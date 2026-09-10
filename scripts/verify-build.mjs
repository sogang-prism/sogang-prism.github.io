import { readFile, readdir, stat, access } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = path.resolve('dist');
const base = '/' + (process.env.BASE_PATH || '').replace(/^\/+|\/+$/g, '');
const prefix = base === '/' ? '' : base;
const origin = process.env.SITE_URL || 'https://build.invalid';
const required = [
  'index.html',
  'research/index.html',
  'people/index.html',
  'people/juram-kim/index.html',
  'publications/index.html',
  'projects/index.html',
  'contact/index.html',
  '404.html',
];
const failures = [];
const htmlFiles = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (entry.name.endsWith('.html')) htmlFiles.push(full);
  }
}
for (const file of required) {
  try {
    await access(path.join(root, file));
  } catch {
    failures.push('Missing route: ' + file);
  }
}
await walk(root);

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(root, file).replaceAll('\\', '/');
  const route =
    relative === '404.html'
      ? '/404.html'
      : '/' + relative.replace(/index\.html$/, '');
  const pageURL = new URL(prefix + route, origin);
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1)
    failures.push(relative + ': expected exactly one h1');
  if (!/<html[^>]+lang="en"/.test(html))
    failures.push(relative + ': language missing');
  if (!/<meta[^>]+name="description"/.test(html))
    failures.push(relative + ': description missing');
  if (!html.includes('id="main-content"'))
    failures.push(relative + ': skip-link target missing');
  if (process.env.SITE_URL && relative !== '404.html') {
    const canonical = html.match(
      /<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/,
    )?.[1];
    if (canonical !== pageURL.href)
      failures.push(relative + ': incorrect canonical ' + canonical);
  }
  for (const match of html.matchAll(
    /<(?:a|link|img|script)\b[^>]*?\b(?:href|src)="([^"]+)"/g,
  )) {
    const value = match[1].replaceAll('&amp;', '&');
    if (/^(?:mailto:|tel:|data:|https?:|\/\/)/i.test(value)) continue;
    const url = new URL(value, pageURL);
    if (
      prefix &&
      url.pathname !== prefix &&
      !url.pathname.startsWith(prefix + '/')
    ) {
      failures.push(relative + ': unprefixed link ' + value);
      continue;
    }
    const pathname = decodeURIComponent(url.pathname.slice(prefix.length));
    let target = path.resolve(root, '.' + pathname);
    if (target !== root && !target.startsWith(root + path.sep)) {
      failures.push(relative + ': invalid local path ' + value);
      continue;
    }
    try {
      if ((await stat(target)).isDirectory())
        target = path.join(target, 'index.html');
      await access(target);
      if (url.hash && target.endsWith('.html')) {
        const targetHTML = await readFile(target, 'utf8');
        const id = decodeURIComponent(url.hash.slice(1));
        if (!targetHTML.includes('id="' + id + '"'))
          failures.push(relative + ': missing anchor ' + value);
      }
    } catch {
      failures.push(relative + ': broken link or asset ' + value);
    }
  }
}

// Fonts and CSS assets also need to work under a repository base path.
async function inspectCSS(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await inspectCSS(file);
      continue;
    }
    if (!file.endsWith('.css')) continue;
    const css = await readFile(file, 'utf8');
    for (const match of css.matchAll(/url\(["']?([^)"']+)["']?\)/g)) {
      const url = match[1];
      if (/^(?:data:|https?:|#)/.test(url)) continue;
      let target;
      if (url.startsWith('/')) {
        if (prefix && !url.startsWith(prefix + '/'))
          failures.push('Unprefixed CSS asset: ' + url);
        target = path.join(root, url.slice(prefix.length));
      } else target = path.resolve(path.dirname(file), url);
      try {
        await access(target);
      } catch {
        failures.push('Missing CSS asset: ' + url);
      }
    }
  }
}
await inspectCSS(root);
assert.equal(failures.length, 0, failures.join('\n'));
console.log(
  'Verified ' +
    htmlFiles.length +
    ' pages: routes, local links, anchors, assets, fonts, metadata, and base path (' +
    base +
    ').',
);
