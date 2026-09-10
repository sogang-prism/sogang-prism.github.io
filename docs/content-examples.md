# 콘텐츠 입력 예시

아래 값은 구조 설명용입니다. 실제 연구실 정보로 바꾼 다음 `src/data/lab.ts`의 해당 배열에 넣으세요. 사용하지 않는 선택 필드는 생략할 수 있습니다.

## 연구 주제

```ts
export const research: ResearchTheme[] = [
  {
    id: 'research-theme',
    title: '실제 연구 주제의 영문 제목',
    summary: '홈에 표시할 짧은 영문 설명',
    description: '연구 질문, 접근 방법, 연구 방향을 설명하는 영문 문단',
    keywords: ['실제 키워드'],
    publicationIds: ['paper-id'],
  },
];
```

## 프로젝트

연구과제는 `projects` 배열에, 인력양성사업은 같은 항목 구조의 `educationPrograms` 배열에 추가합니다. 화면에서는 Research Projects와 Education & Training Programs로 구분하며, 각 배열의 입력 순서대로 표시됩니다. 현재 연구과제 10건과 인력양성사업 1건을 반영했습니다. 각 사업의 영문 제목은 지원기관의 공식 표기를 우선합니다.

```ts
export const projects: Project[] = [
  {
    id: 'project-id',
    title: '실제 프로젝트 제목',
    period: '실제 시작 연도 – 종료 연도 또는 Present',
    // funder: '실제 지원기관',
    // note: '공동연구 등 공개된 참여 형태',
    // description: '프로젝트 목적과 연구 내용을 담은 간단한 설명',
    // url: '실제 HTTPS 주소 또는 /papers/실제파일.pdf',
    // linkLabel: 'Project website',
  },
];
```

프로젝트 ID는 고유하게 사용하고, 로컬 자료는 먼저 `public/` 아래에 저장하세요. 링크는 URL을 입력했을 때만 표시합니다.

## 교수와 재학생

`members` 배열의 `group`은 `professor`, `phd-students`, `ms-students` 중 하나입니다. 표시 순서는 Professor → Ph.D. Students → M.S. Students입니다. 각 그룹 안에서는 입력 순서를 유지합니다.

```ts
// 기존 members 배열에 실제 재학생 정보를 추가합니다.
{
  id: 'student-id',
  name: '실제 영문 이름',
  group: 'phd-students', // 석사과정은 'ms-students'
  // nativeName: '실제 한글 이름',
  // role: '실제 학적 또는 직위',
  // bio: '짧은 소개',
  // interests: '연구 관심 분야',
  // photo: '/images/people/student.jpg',
  // email: ['실제 계정명', '실제 도메인'].join('@'),
  // website: '실제 HTTPS 주소',
}
```

사진은 먼저 해당 `public/` 경로에 넣으세요. 프로필 ID는 페이지 안에서 고유하게 사용합니다. 교수 직함은 `role`, 약력은 `bio`에서 수정합니다. 김주람 교수의 학력과 경력은 `juramProfile.education`, `juramProfile.experience`에서 관리하며 `/people/juram-kim/`에 표시합니다. `profileUrl`이 있는 구성원은 이름과 사진이 해당 상세 페이지로 연결되며, People 카드에는 약력과 연구 관심 분야를 생략합니다. 소속 링크는 `affiliations` 배열의 `label`과 `url`에서 관리합니다.

## 졸업생

졸업생은 `members` 대신 `alumni` 배열에서 관리합니다. 사진이나 긴 소개 없이 아래 네 항목만 표시합니다.

```ts
export const alumni: Alumnus[] = [
  {
    id: 'alumnus-id',
    name: '실제 이름',
    course: 'M.S.',
    year: '실제 졸업 연도',
    project: '실제 프로젝트 또는 학위논문 제목',
  },
];
```

`course`, `year`, `project`에 빈 문자열을 넣으면 대시로 표시합니다. `year`에는 졸업 연도를 입력하세요. 아직 명단이 없으면 `alumni: Alumnus[] = []`를 유지하세요. 학생과 졸업생의 실제 명단은 아직 입력하지 않았으며, 예시 인물은 홈페이지에 표시하지 않습니다.

## 논문

```ts
export const publications: Publication[] = [
  {
    id: 'paper-id',
    title: '실제 논문 제목',
    authors: '실제 저자 목록',
    venue: '실제 저널명 또는 학회명과 서지 정보',
    year: 2026, // 실제 출판 연도로 변경
    // doi: 'https://doi.org/실제-DOI',
    // pdf: '/papers/actual-paper.pdf',
    // code: '실제 코드 저장소 HTTPS 주소',
  },
];
```

DOI는 전체 HTTPS 주소로 넣습니다. 로컬 PDF는 먼저 `public/papers/`에 추가하세요. 논문 목록은 최신 연도부터 정렬되며, 같은 연도에서는 입력 순서를 유지합니다.

## 연구실 연락처

`lab` 객체의 `affiliation`, `department`, `email`, `address`, `recruitment`를 입력합니다.

- `address`는 주소 줄의 배열입니다.
- `mapUrl`은 실제 지도 페이지 주소입니다.
- `recruitment`는 확인된 모집 안내만 입력합니다.
- 국문명은 `lab.nativeName`, 영문명은 `labName`, 영문 풀네임은 `lab.fullName`에서 관리합니다.
- 입력을 마치면 `draft: false`로 바꾸고 검사와 빌드를 실행합니다.
