# PRISM Lab

Predictive, Reliable, and Interpretable Systems for Decision-Making

데이터 기반 의사결정 연구실

Astro 기반 영문 연구실 홈페이지입니다. 흰색 배경, 네이비 본문, 파란색 포인트를 사용하며 Home, Research, People, Publications, Projects, Contact 페이지, 교수 상세 프로필, 404 페이지를 제공합니다.

## 실행

Node.js 24 LTS를 권장합니다. 프로젝트 최상위 폴더에서 실행하세요.

```sh
npm ci
npm run dev
```

터미널에 표시되는 로컬 주소를 여세요. 기본 주소는 http://127.0.0.1:4321/ 입니다.

```sh
npm run check
npm run build
npm run verify
npm run preview
```

- `check`: Astro / TypeScript 검사
- `build`: `dist/`에 정적 사이트 생성
- `verify`: 생성된 페이지, 링크, 앵커, 글꼴, 경로, 메타데이터 검사
- `preview`: 빌드 결과 미리보기

## 콘텐츠 수정

영문 연구실명은 `labName`, 영문 풀네임은 `lab.fullName`, 국문명은 `lab.nativeName`에서 관리합니다. 헤더의 풀네임은 한 줄로 표시하며, 모바일에서는 숨깁니다. 로고 글자, 페이지 제목, 푸터와 메일 문의 제목에 같은 이름이 적용됩니다. 실제 연구실 정보는 **`src/data/lab.ts`** 한 파일에서 관리합니다. React나 데이터베이스는 필요하지 않습니다.

| 항목                                      | 수정 위치                          |
| ----------------------------------------- | ---------------------------------- |
| 이름, 소속, 소개, 이메일, 주소, 모집 안내 | `lab`                              |
| 연구 주제와 관련 논문                     | `research`                         |
| 연구과제 제목, 기간, 지원기관, 설명, 링크 | `projects`                         |
| 인력양성사업                              | `educationPrograms`                |
| 교수와 재학생                             | `members`                          |
| 졸업생                                    | `alumni`                           |
| 논문 및 DOI / PDF / 코드 링크             | `publications`                     |
| 사진과 공개 PDF                           | `public/images/`, `public/papers/` |
| 색상과 레이아웃                           | `src/styles/global.css`            |

현재 `draft: false`이며, 사용자가 제공한 서강대 교수 소개와 Google Scholar를 바탕으로 김주람 교수의 정보, 학술지 논문 16편, 연구과제 10건, 인력양성사업 1건을 반영했습니다. 출처와 편집 기준은 `docs/content-sources.md`에 정리했습니다.

필요하면 `draft: true`로 검토용 표시를 켤 수 있습니다. `draft: false`일 때:

- 상단 Preview edition 표시와 자리표시자가 사라집니다.
- 빈 목록에는 간단한 준비 중 안내만 표시됩니다.
- 일반 페이지의 검색엔진 `noindex, nofollow`가 제거됩니다.

`draft`는 표시와 검색 인덱싱 설정이며 접근 제한 기능이 아닙니다.

논문은 최신 연도순으로 표시되며 최근 3편이 홈에 자동 표시됩니다. 별도 대표 논문 선택은 필요하지 않습니다. 소식 기능은 없습니다. Projects는 Research Projects와 Education & Training Programs로 구분합니다. 연구과제는 `projects`, 인력양성사업은 `educationPrograms` 배열의 입력 순서로 표시합니다. 인력양성사업에는 2025–2030년 KIAT 지원 사업을 반영했습니다. People은 Professor, Ph.D. Students, M.S. Students, Alumni 순서입니다. 명단이 비어 있어도 각 섹션은 유지하며 짧은 준비 안내를 표시합니다. 교수 카드는 이름과 사진을 누르면 상세 프로필로 이동합니다. 상세 페이지의 Education과 Experience는 `juramProfile`에서 관리합니다. 교수와 재학생은 프로필 카드, 졸업생은 Graduation Year · Name · Program · Project / Thesis 네 열의 간단한 표로 표시됩니다. 사용자가 제공한 2026년 졸업생 9명을 반영했으며, 프로그램은 모두 MOT Master's Program입니다.

연구 주제와 논문의 `id`는 영문 소문자와 하이픈으로 구성된 고유 값으로 지정하세요. `publicationIds`에 논문 ID를 넣으면 연구 페이지에 앞의 두 편이 대표 논문으로 표시됩니다. 개인 사진이 없으면 이름의 머리글자를 표시합니다. 이메일과 외부 링크는 값이 있을 때만 표시됩니다.

복사해서 실제 내용으로 바꿀 수 있는 예시는 `docs/content-examples.md`에 있습니다.

## GitHub Pages 배포

공식 [Astro GitHub Pages 안내](https://docs.astro.build/en/guides/deploy/github/)를 바탕으로 `.github/workflows/deploy.yml`을 준비했습니다.

1. GitHub 저장소를 만들고 프로젝트 파일을 `main` 브랜치에 올립니다. `package-lock.json`과 `.github/workflows/deploy.yml`도 포함하세요.
2. 저장소 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택합니다.
3. `main`에 push하거나 **Actions → Deploy PRISM Lab to GitHub Pages → Run workflow**를 실행합니다.
4. 배포가 완료되면 Actions의 deployment 링크 또는 Settings → Pages에 표시되는 주소를 엽니다.

저장소 이름으로 배포 경로를 자동 계산합니다.

| 저장소                                  | 주소                                                       |
| --------------------------------------- | ---------------------------------------------------------- |
| `OWNER/OWNER.github.io`                 | `https://owner.github.io/`                                 |
| `OWNER/prism-lab` | `https://owner.github.io/prism-lab/` |

공개 주소는 `https://sogang-prism.github.io/`, 저장소는 `sogang-prism/sogang-prism.github.io`를 사용하도록 준비했습니다. `juram-tech` 개인 계정으로 연구실 조직을 관리합니다. 실제 공개 여부와 최신 배포 결과는 GitHub Actions와 Settings → Pages에서 확인하세요. 계정이나 토큰을 소스에 넣을 필요는 없습니다.

### 사용자 도메인

1. GitHub Pages의 Custom domain과 DNS를 설정합니다.
2. 저장소 **Settings → Secrets and variables → Actions → Variables**에 `SITE_URL=https://lab.example.edu`를 등록합니다.
3. 기본 경로는 자동으로 `/`가 됩니다. 별도 하위 경로가 필요할 때만 `BASE_PATH`를 지정합니다.

### 로컬에서 저장소 경로 확인

PowerShell 예시입니다. 아래 도메인과 저장소 이름은 테스트용이며 실제 배포 주소가 아닙니다.

```powershell
$env:SITE_URL = 'https://example.github.io'
$env:BASE_PATH = '/prism-lab'
npm run build
npm run verify
npm run preview
# 확인 후 환경변수를 지웁니다.
Remove-Item Env:SITE_URL
Remove-Item Env:BASE_PATH
```

메뉴, 이미지, PDF 등 내부 링크에는 `src/lib/links.ts`의 `sitePath()`를 사용합니다. CSS와 글꼴은 Astro가 배포 경로에 맞춰 처리합니다. `SITE_URL`이 주어지면 canonical / Open Graph URL이 생성됩니다.

## 구성

```text
.github/workflows/deploy.yml   GitHub Pages 자동 배포
astro.config.mjs              정적 빌드 및 배포 경로
src/data/lab.ts               실제 연구실 콘텐츠
src/layouts/Layout.astro      공통 헤더, 푸터, 메타데이터
src/components/               반복되는 화면 요소
src/pages/                    6개 메뉴 페이지, 교수 상세 프로필 및 404
src/styles/global.css         반응형 스타일
src/lib/links.ts              배포 경로 처리
scripts/verify-build.mjs       빌드 결과 검사
public/favicon.svg            데이터 점을 배열한 마크
docs/content-examples.md       콘텐츠 입력 예시
```

글꼴은 Inter를 npm 패키지로 포함해 직접 제공합니다. 김주람 교수 사진은 사용자가 제공한 공식 교수 소개 페이지에서 가져왔습니다. FELAB의 콘텐츠, 사진, 소속 정보는 복사하지 않았습니다.

## 이메일 주소 표시

Contact, People, 교수 상세 프로필의 이메일은 **Show email address** 버튼을 누르면 `계정명 [at] 도메인` 형태로 나타납니다. 나타난 주소를 누르면 메일 작성 프로그램이 열립니다. 전화번호는 표시하지 않습니다.

`src/components/EmailContact.astro`가 초기 HTML의 평문 주소와 mailto 링크 노출을 줄입니다. JavaScript를 끈 경우에는 활성화 안내가 표시됩니다. 이는 단순한 주소 수집을 줄이는 난독화이며, 스팸이나 모든 수집 프로그램을 차단하지는 않습니다.

실제 이메일은 `src/data/lab.ts`에서 `[계정명, 도메인].join('@')` 형식으로 관리합니다. 일반 문자열도 지원하지만 공개 소스에 평문 주소가 남을 수 있습니다.
