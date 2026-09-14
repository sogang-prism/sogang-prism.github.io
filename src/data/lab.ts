export interface ResearchTheme {
  id: string;
  title: string;
  summary: string;
  description: string;
  keywords: string[];
  publicationIds: string[];
  illustration?: { src: string; alt: string };
}

export interface Project {
  titleKorean?: string;
  id: string;
  title: string;
  period: string;
  funder?: string;
  note?: string;
  description?: string;
  url?: string;
  linkLabel?: string;
}

export interface Member {
  id: string;
  name: string;
  nativeName?: string;
  role?: string;
  group: 'professor' | 'phd-students' | 'ms-students';
  admissionYear?: string;
  program?: string;
  organization?: string;
  bio?: string;
  interests?: string;
  photo?: string; // Put the file under public/, e.g. /images/people/name.jpg.
  email?: string;
  website?: string;
  websiteLabel?: string;
  profileUrl?: string;
  affiliations?: { label: string; shortLabel?: string; url: string }[];
}

export interface Alumnus {
  id: string;
  name: string;
  course: string;
  year: string;
  project: string;
  projectKorean?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  scholar?: string;
  doi?: string; // Full https://doi.org/... URL.
  pdf?: string; // Public path or HTTPS URL.
  code?: string; // HTTPS URL.
}

// Verified public profile and scholarly records. See docs/content-sources.md.
// Replace or extend the arrays here to maintain the site.
const labName = 'PRISM Lab';

export const lab = {
  name: labName,
  nativeName: '데이터 기반 의사결정 연구실',
  fullName:
    'Predictive, Reliable, and Interpretable Systems for Decision-Making',
  language: 'en',
  draft: false,
  affiliation: 'Sogang University',
  department: 'Graduate School of Management of Technology',
  interdisciplinaryProgram:
    'Interdisciplinary Program in AI Behavioral Science',
  tagline: 'From Complex Data to Informed Decisions',
  introduction:
    'We develop and apply analytical methods that combine predictive accuracy, reliability, and interpretability for informed decision-making.',
  description: `${labName} at Sogang University. Research in technology intelligence, trustworthy AI, and service analytics, led by Prof. Juram Kim.`,
  email: ['juram', 'sogang.ac.kr'].join('@'),
  address: [
    'Berchmans Woojung Hall (BW Hall) | 베르크만스 우정원',
    'Sogang University',
    '35 Baekbeom-ro, Mapo-gu',
    'Seoul 04107, Republic of Korea',
  ],
  mapUrl: '',
  recruitment:
    'We are recruiting postdoctoral researchers, Ph.D. students, M.S. students, and undergraduate interns.\n\nIf you are interested in joining our lab, please email Prof. Juram Kim with your CV and academic transcripts.',
  github: '',
  scholar: 'https://scholar.google.co.kr/citations?user=F52LTe8AAAAJ&hl=en',
  facultyProfile: 'https://sgmot.sogang.ac.kr/sogangmot/new_faculties_17.html',
};

export const research: ResearchTheme[] = [
  {
    id: 'technology-intelligence',
    title: 'Technology Intelligence',
    illustration: {
      src: '/images/research/technology-intelligence.svg',
      alt: 'Connected knowledge domains with one promising technology highlighted.',
    },
    summary:
      'Understanding technological change through patent data, forecasting, and technology valuation.',
    description:
      'We analyze patents and other knowledge sources to understand how technologies evolve, converge, and create value.',
    keywords: [
      'Technology valuation',
      'Patent analytics',
      'Technology forecasting',
    ],
    publicationIds: [
      'university-valuation-2023',
      'patent-novelty-2022',
      'multi-technology-2021',
    ],
  },
  {
    id: 'service-analytics',
    title: 'Service Analytics',
    illustration: {
      src: '/images/research/service-analytics.webp',
      alt: 'A magnifying glass examining customer review text and analytical bars.',
    },
    summary:
      'Turning customer feedback and text data into insights for service improvement.',
    description:
      'We use text analytics and machine learning to understand services from the perspective of customers and other stakeholders.',
    keywords: [
      'Text mining',
      'Customer review analytics',
      'Service improvement',
    ],
    publicationIds: [
      'service-benchmarking-2025',
      'sustainable-cities-2025',
      'complaints-monitoring-2021',
    ],
  },
  {
    id: 'trustworthy-ai',
    title: 'Trustworthy AI',
    illustration: {
      src: '/images/research/trustworthy-ai.svg',
      alt: 'A transparent triangular model with a highlighted decision path.',
    },
    summary:
      'Making machine learning useful and interpretable for decision-making.',
    description:
      'Trustworthy AI focuses on the reliability and interpretability of AI systems and their role in human decision-making.',
    keywords: [
      'Interpretable machine learning',
      'Explainable AI',
      'Decision support',
    ],
    publicationIds: [
      'expert-machine-2022',
      'battery-health-2022',
      'outpatient-waiting-2024',
    ],
  },
];

// Research projects from the Sogang faculty profile and details supplied by the professor.
export const projects: Project[] = [
  {
    id: 'domain-normative-alignment-llms',
    titleKorean: "대규모 언어모델의 도메인 규범 정렬: 기술가치평가의 구조적 불일치 진단 및 인과 제약 기반 교정",
    title:
      'Domain-Normative Alignment of Large Language Models: Diagnosing Structural Misalignment and Causal Constraint-Based Correction in Technology Valuation',
    period: 'Sep 2026 – Aug 2029',
    funder: 'National Research Foundation of Korea (NRF)',
    note: 'Principal Investigator',
  },
  {
    id: 'climate-technology-knowledge-exchange',
    titleKorean: "기후기술 생태계의 지식교류와 혁신: 특허 및 계량서지 데이터를 활용한 실증연구",
    title:
      'Knowledge Exchange and Innovation in Climate Technology Ecosystems: An Empirical Study Using Patent and Bibliometric Data',
    period: 'Jun 2025 – May 2028',
    funder: 'National Research Foundation of Korea (NRF)',
    note: 'Collaborative Research',
  },
  {
    id: 'data-valuation-framework',
    titleKorean: "데이터 가치평가 프레임워크 개발",
    title: 'Developing a Data Valuation Framework',
    period: '2023 – 2024',
    funder: 'Korea Institute of Science and Technology Information (KISTI)',
  },
  {
    id: 'data-valuation-guidelines',
    titleKorean: "데이터 가치평가 가이드라인 개발",
    title: 'Developing Data Valuation Guidelines',
    period: '2023',
    funder: 'Korea Data Agency (K-DATA)',
  },
  {
    id: 'purpose-specific-ip-valuation-models',
    titleKorean: "지식재산 가치평가를 위한 목적별 모델 개발",
    title:
      'Developing Purpose-Specific Models for Intellectual Property Valuation',
    period: '2023',
    funder: 'Korea Invention Promotion Association (KIPA)',
  },
  {
    id: 'explainable-ai-patent-renewal',
    titleKorean: "특허 유지 의사결정을 위한 설명가능 AI 기반 의사결정지원모델 개발",
    title:
      'Developing an Explainable AI-Based Decision Support Model for Patent Renewal',
    period: '2023',
    funder: 'Korea Institute of Science and Technology Information (KISTI)',
    note: 'Principal Investigator',
  },
  {
    id: 'translational-research-technology-seeds',
    titleKorean: "중개연구를 위한 기술시드 발굴 시스템 개발",
    title:
      'Developing a System for Identifying Technology Seeds for Translational Research',
    period: '2021 – 2023',
    funder: 'Commercialization Promotion Agency for R&D Outcomes (COMPA)',
  },
  {
    id: 'explainable-ai-technology-valuation',
    titleKorean: "유망기술 가치평가 및 핵심요인 도출을 위한 설명가능 AI 기반 방법론 개발",
    title:
      'Developing an Explainable AI-Based Methodology for Valuing Promising Technologies and Identifying Key Factors',
    period: 'May 2021 – Apr 2023',
    funder: 'National Research Foundation of Korea (NRF)',
    note: 'Principal Investigator',
  },
  {
    id: 'emerging-technology-decision-support',
    titleKorean: "신흥기술 가치평가를 위한 설명가능 AI 기반 의사결정지원시스템 개발",
    title:
      'Developing an Explainable AI-Based Decision Support System for Valuing Emerging Technologies',
    period: 'Jun 2021 – Nov 2021',
    funder: 'National Research Foundation of Korea (NRF)',
    note: 'Principal Investigator',
  },
  {
    id: 'customer-centric-service-decision-support',
    titleKorean: "고객 중심의 서비스 운영 및 개선을 위한 데이터 기반 의사결정지원시스템 개발",
    title:
      'Developing a Data-Driven Decision Support System for Customer-Centric Service Operations and Improvement',
    period: 'Sep 2019 – Aug 2020',
    funder: 'National Research Foundation of Korea (NRF)',
    note: 'Principal Investigator',
  },
];

export const educationPrograms: Project[] = [
  {
    id: 'global-strategic-industries-technology-management',
    titleKorean: "첨단전략산업 글로벌 기술경영 전문인력 양성사업",
    title:
      'Global Talent Development Program in Technology Management for Advanced Strategic Industries',
    period: '2025 – 2030',
    funder: 'Korea Institute for Advancement of Technology (KIAT)',
  },
];

export const members: Member[] = [
  {
    id: 'juram-kim',
    name: 'Juram Kim',
    nativeName: '김주람',
    role: 'Assistant Professor at Sogang University',
    group: 'professor',
    interests: 'Technology Intelligence · Service Analytics · Trustworthy AI',
    photo: '/images/people/juram-kim.jpg',
    email: ['juram', 'sogang.ac.kr'].join('@'),
    profileUrl: '/people/juram-kim/',
    affiliations: [
      {
        label: 'Graduate School of Management of Technology',
        shortLabel: 'MOT',
        url: 'https://sgmot.sogang.ac.kr/sogangmotindex.do',
      },
      {
        label: lab.interdisciplinaryProgram,
        shortLabel: 'AI Behavioral Science',
        url: 'https://aibeh.sogang.ac.kr/aibeh/index.do',
      },
    ],
  },
  {
    id: 'yongwoo-lee',
    name: 'Yongwoo Lee',
    group: 'ms-students',
    admissionYear: '2025',
    program: "MOT Master's Program",
    organization: 'INZENT Co.,Ltd.',
  },
  {
    id: 'sejin-yang',
    name: 'Sejin Yang',
    group: 'ms-students',
    admissionYear: '2025',
    program: "MOT Master's Program",
    organization: 'DSsolar',
  },
  {
    id: 'ilbum-chun',
    name: 'Ilbum Chun',
    group: 'ms-students',
    admissionYear: '2025',
    program: "MOT Master's Program",
    organization: 'KT',
  },
  {
    id: 'riahn-kim',
    name: 'Riahn Kim',
    group: 'ms-students',
    admissionYear: '2025',
    program: "MOT Master's Program",
    organization: 'KIAS',
  },
  {
    id: 'suyeon-kim',
    name: 'Suyeon Kim',
    group: 'ms-students',
    admissionYear: '2025',
    program: "MOT Master's Program",
    organization: 'NIPA',
  },
];

export interface ProfileEntry {
  period: string;
  title: string;
  institution: string;
  detail?: string;
}

// Education and experience from the official Sogang faculty profile.
export const juramProfile: {
  memberId: string;
  education: ProfileEntry[];
  experience: ProfileEntry[];
} = {
  memberId: 'juram-kim',
  education: [
    {
      period: '2020',
      title: 'Ph.D. in Industrial Engineering',
      institution: 'Ulsan National Institute of Science and Technology (UNIST)',
      detail: 'Integrated M.S.–Ph.D. program',
    },
    {
      period: '2015',
      title: 'B.A. in Business Administration',
      institution: 'Ulsan National Institute of Science and Technology (UNIST)',
    },
  ],
  experience: [
    {
      period: 'Sep 2024 – Present',
      title: 'Assistant Professor',
      institution: 'Sogang University',
      detail: 'Graduate School of Management of Technology',
    },
    {
      period: 'Nov 2021 – Aug 2024',
      title: 'Senior Researcher',
      institution:
        'Korea Institute of Science and Technology Information (KISTI)',
      detail: 'Division of Data Analysis',
    },
    {
      period: 'Oct 2020 – Nov 2021',
      title: 'Postdoctoral Researcher',
      institution: 'Ulsan National Institute of Science and Technology (UNIST)',
      detail: 'Department of Industrial Engineering',
    },
  ],
};

// Alumni records supplied by the professor. See docs/content-examples.md.
export const alumni: Alumnus[] = [
  {
    "id": "gi-beom-ko",
    "name": "Gi-beom Ko",
    "course": "MOT Master's Program",
    "year": "2026",
    "project": "New-Hire Training and Early Job Performance in Telecommunications Sales: Implications for Training Design",
    "projectKorean": "통신 세일즈 신입사원 교육과 초기업무 성과 분석을 통한 교육방식 설계"
  },
  {
    "id": "walmyung-byun",
    "name": "Walmyung Byun",
    "course": "MOT Master's Program",
    "year": "2026",
    "project": "Technology Credit Bureau Strategies and Bank Responses: An Empirical Game-Theoretic Analysis of Market Structure during Policy Rollout",
    "projectKorean": "TCB 전략 선택과 은행 반응에 대한 게임이론 실증분석: 정책 도입기의 시장구조 변화"
  },
  {
    "id": "sangsu-chun",
    "name": "Sangsu Chun",
    "course": "MOT Master's Program",
    "year": "2026",
    "project": "Semantic and Structural Divergence between LLM-Generated and Real-World Customer Reviews",
    "projectKorean": "LLM이 생성한 고객 리뷰와 실제 고객 리뷰 간 의미적·구조적 불일치 정량화"
  },
  {
    "id": "hyeongseok-lee",
    "name": "HyeongSeok Lee",
    "course": "MOT Master's Program",
    "year": "2026",
    "project": "Firm-Specific Technology Opportunity Discovery for Market Leadership in CNT-Based X-Ray Technologies",
    "projectKorean": "CNT 기반 X-ray 시장 주도권 확보를 위한 기업 특화형 핵심 기술기회 탐색"
  },
  {
    "id": "seunghyun-hwang",
    "name": "Seunghyun Hwang",
    "course": "MOT Master's Program",
    "year": "2026",
    "project": "A Technology Transfer Partner Recommendation Framework Based on Technological Similarity and Complementarity",
    "projectKorean": "기술 유사도와 상보성 분석을 통한 기술이전 후보기업 추천 프레임워크 개발"
  },
  {
    "id": "miseo-choi",
    "name": "Mi-seo Choi",
    "course": "MOT Master's Program",
    "year": "2026",
    "project": "The AI Voucher Program and Firm Economic Performance",
    "projectKorean": "AI 바우처 지원사업이 기업의 경제적 성과에 미치는 영향 분석"
  },
  {
    "id": "jisuk-shin",
    "name": "Jisuk Shin",
    "course": "MOT Master's Program",
    "year": "2026",
    "project": "Production Planning Optimization for Small and Medium-Sized Elevator Manufacturers",
    "projectKorean": "중소 승강기 제조업을 위한 생산계획 최적화 모델 개발"
  },
  {
    "id": "bora-sung",
    "name": "Bora Sung",
    "course": "MOT Master's Program",
    "year": "2026",
    "project": "Structural Relationships among Barriers to Generative AI Adoption in the Telecommunications Industry",
    "projectKorean": "생성형 인공지능 도입 장애요인의 구조적 관계 분석: 통신산업을 중심으로"
  },
  {
    "id": "byung-deuk-park",
    "name": "Byung-deuk Park",
    "course": "MOT Master's Program",
    "year": "2026",
    "project": "Buyer Price-Reduction Pressure, Collaboration Networks, R&D Capabilities, and Innovation Performance in SMEs and Venture Firms",
    "projectKorean": "구매자의 단가인하 압력, 외부 협력네트워크, 내부 R&D 역량과 중소·벤처기업의 기술혁신 성과 간 관계 분석"
  },
  {
    "id": "inho-park",
    "name": "Inho Park",
    "course": "MOT Master's Program",
    "year": "2026",
    "project": "Risk Assessment of Last-Mile Delivery Using FMEA",
    "projectKorean": "FMEA 기법을 활용한 라스트마일 배송구간의 위험요인 분석"
  },
  {
    "id": "jecheol-yeon",
    "name": "Jecheol Yeon",
    "course": "MOT Master's Program",
    "year": "2026",
    "project": "Evaluating the Performance and Reliability of an LLM-Based Technology Valuation Model Using Multi-Agent Critique",
    "projectKorean": "멀티에이전트 비판 루프를 적용한 LLM 기반 기술가치평가 모델의 성능 및 신뢰성 검증"
  },
  {
    "id": "youngil-song",
    "name": "Youngil Song",
    "course": "MOT Master's Program",
    "year": "2026",
    "project": "A Region-Specific R&D Evaluation Model Based on AHP Expert Assessments",
    "projectKorean": "지역특화형 R&D 평가모델 개발: AHP 기반 전문가 평가를 중심으로"
  },
  {
    "id": "hanlam-choi",
    "name": "HanLam Choi",
    "course": "MOT Master's Program",
    "year": "2026",
    "project": "Corporate Cybersecurity Investment Adequacy and Future Strategy: Evidence from National R&D Trend Analysis",
    "projectKorean": "국가 사이버보안 R&D 동향 분석을 통한 사내 보안투자 적정성 평가 및 향후 전략 수립"
  },
  {
    "id": "jin-young-seo",
    "name": "Jin-young Seo",
    "course": "MOT Master's Program",
    "year": "2026",
    "project": "Development of a Data-Driven System for Designing Interdisciplinary and Self-Designed Majors through Alignment Analysis between Emerging Technologies and University Curricula",
    "projectKorean": "유망기술과 대학 교육과정 간 정합성 분석을 통한 데이터 기반 융합·자율전공 설계 시스템 개발"
  },
  {
    "id": "jeong-yeon-kim",
    "name": "Jeong-yeon Kim",
    "course": "MOT Master's Program",
    "year": "2026",
    "project": "Technology Outsourcing in AI Transformation and Subsequent Firm Performance: Evidence from Korean Firms",
    "projectKorean": "AI 전환 과정에서의 기술 외부조달과 후속 기업성과: 한국 기업을 대상으로 한 실증분석"
  }
];

export const publications: Publication[] = [
  {
    id: 'service-benchmarking-2025',
    title:
      'Customer-centric service benchmarking using online reviews: A case study of Bangkok hotels',
    authors: 'J. Kim, C. Lim',
    venue: 'Journal of Marketing Analytics',
    year: 2025,
    scholar:
      'https://scholar.google.co.kr/citations?view_op=view_citation&hl=en&user=F52LTe8AAAAJ&citation_for_view=F52LTe8AAAAJ:kNdYIx-mwKoC',
    doi: 'https://doi.org/10.1057/s41270-025-00437-z',
  },
  {
    id: 'sustainable-cities-2025',
    title:
      'Exploring the concept and operations of sustainable cities: A text mining approach',
    authors: 'M. Kim, J. Kim, J. Joung, C. Lim',
    venue: 'IEEE Access, 13, 156613–156627',
    year: 2025,
    scholar:
      'https://scholar.google.co.kr/citations?view_op=view_citation&hl=en&user=F52LTe8AAAAJ&citation_for_view=F52LTe8AAAAJ:3fE2CSJIrl8C',
    doi: 'https://doi.org/10.1109/ACCESS.2025.3605571',
  },
  {
    id: 'outpatient-waiting-2024',
    title:
      'Dissatisfaction-considered waiting time prediction for outpatients with interpretable machine learning',
    authors: 'J. Shin, D. A. Lee, J. Kim, C. Lim, B. K. Choi',
    venue: 'Health Care Management Science, 27(3), 370–390',
    year: 2024,
    scholar:
      'https://scholar.google.co.kr/citations?view_op=view_citation&hl=en&user=F52LTe8AAAAJ&citation_for_view=F52LTe8AAAAJ:MXK_kJrjxJIC',
    doi: 'https://doi.org/10.1007/s10729-024-09676-5',
  },
  {
    id: 'university-valuation-2023',
    title:
      'Domain-specific valuation of university technologies using bibliometrics, Jonckheere–Terpstra tests, and data envelopment analysis',
    authors: 'J. Kim, S. Hong, Y. Kang, C. Lee',
    venue: 'Technovation, 122, 102664',
    year: 2023,
    scholar:
      'https://scholar.google.co.kr/citations?view_op=view_citation&hl=en&user=F52LTe8AAAAJ&citation_for_view=F52LTe8AAAAJ:0EnyYjriUFMC',
    doi: 'https://doi.org/10.1016/j.technovation.2022.102664',
  },
  {
    id: 'expert-machine-2022',
    title:
      'Towards expert–machine collaborations for technology valuation: An interpretable machine learning approach',
    authors: 'J. Kim, G. Lee, S. Lee, C. Lee',
    venue: 'Technological Forecasting and Social Change, 183, 121940',
    year: 2022,
    scholar:
      'https://scholar.google.co.kr/citations?view_op=view_citation&hl=en&user=F52LTe8AAAAJ&citation_for_view=F52LTe8AAAAJ:hqOjcs7Dif8C',
    doi: 'https://doi.org/10.1016/j.techfore.2022.121940',
  },
  {
    id: 'battery-health-2022',
    title:
      'State-of-health estimation of Li-ion batteries in the early phases of qualification tests: An interpretable machine learning approach',
    authors: 'G. Lee, J. Kim, C. Lee',
    venue: 'Expert Systems with Applications, 197, 116817',
    year: 2022,
    scholar:
      'https://scholar.google.co.kr/citations?view_op=view_citation&hl=en&user=F52LTe8AAAAJ&citation_for_view=F52LTe8AAAAJ:Se3iqnhoufwC',
  },
  {
    id: 'idea-screening-2022',
    title:
      'Screening ideas in the early stages of technology development: A word2vec and convolutional neural network approach',
    authors: 'S. Hong, J. Kim, H. G. Woo, Y. C. Kim, C. Lee',
    venue: 'Technovation, 112, 102407',
    year: 2022,
    scholar:
      'https://scholar.google.co.kr/citations?view_op=view_citation&hl=en&user=F52LTe8AAAAJ&citation_for_view=F52LTe8AAAAJ:_FxGoFyzp5QC',
  },
  {
    id: 'patent-novelty-2022',
    title:
      'A doc2vec and local outlier factor approach to measuring the novelty of patents',
    authors: 'D. Jeon, J. M. Ahn, J. Kim, C. Lee',
    venue: 'Technological Forecasting and Social Change, 174, 121294',
    year: 2022,
    scholar:
      'https://scholar.google.co.kr/citations?view_op=view_citation&hl=en&user=F52LTe8AAAAJ&citation_for_view=F52LTe8AAAAJ:roLk4NBRz8UC',
  },
  {
    id: 'metaverse-community-2022',
    title: '연구기관 내 커뮤니티 활성화를 위한 메타버스 플랫폼 활용사례 분석',
    authors: '이선희, 김주람, 김지영, 유수현, 양혜영',
    venue: '한국콘텐츠학회논문지, 22(11), 138–157',
    year: 2022,
    scholar:
      'https://scholar.google.co.kr/citations?view_op=view_citation&hl=en&user=F52LTe8AAAAJ&citation_for_view=F52LTe8AAAAJ:5nxA0vEk-isC',
  },
  {
    id: 'complaints-monitoring-2021',
    title:
      'Customer complaints monitoring with customer review data analytics: An integrated method of sentiment and statistical process control analyses',
    authors: 'J. Kim, C. Lim',
    venue: 'Advanced Engineering Informatics, 49, 101304',
    year: 2021,
    scholar:
      'https://scholar.google.co.kr/citations?view_op=view_citation&hl=en&user=F52LTe8AAAAJ&citation_for_view=F52LTe8AAAAJ:ufrVoPGSRksC',
  },
  {
    id: 'multi-technology-2021',
    title:
      'Anticipating multi-technology convergence: A machine learning approach using patent information',
    authors: 'C. Lee, S. Hong, J. Kim',
    venue: 'Scientometrics, 126(3), 1867–1896',
    year: 2021,
    scholar:
      'https://scholar.google.co.kr/citations?view_op=view_citation&hl=en&user=F52LTe8AAAAJ&citation_for_view=F52LTe8AAAAJ:WF5omc3nYNoC',
  },
  {
    id: 'convergence-wikipedia-2019',
    title:
      'Anticipating technological convergence: Link prediction using Wikipedia hyperlinks',
    authors: 'J. Kim, S. Kim, C. Lee',
    venue: 'Technovation, 79, 25–34',
    year: 2019,
    scholar:
      'https://scholar.google.co.kr/citations?view_op=view_citation&hl=en&user=F52LTe8AAAAJ&citation_for_view=F52LTe8AAAAJ:YsMSGLbcyi4C',
  },
  {
    id: 'service-life-cycle-2017',
    title: 'Stochastic service life cycle analysis using customer reviews',
    authors: 'J. Kim, C. Lee',
    venue: 'The Service Industries Journal, 37(5–6), 296–316',
    year: 2017,
    scholar:
      'https://scholar.google.co.kr/citations?view_op=view_citation&hl=en&user=F52LTe8AAAAJ&citation_for_view=F52LTe8AAAAJ:9yKSN-GCB0IC',
    doi: 'https://doi.org/10.1080/02642069.2017.1316379',
  },
  {
    id: 'technology-life-cycles-2017',
    title:
      'Patterns of technology life cycles: Stochastic analysis based on patent citations',
    authors: 'C. Lee, J. Kim, M. Noh, H. G. Woo, K. Gang',
    venue: 'Technology Analysis & Strategic Management, 29(1), 53–67',
    year: 2017,
    scholar:
      'https://scholar.google.co.kr/citations?view_op=view_citation&hl=en&user=F52LTe8AAAAJ&citation_for_view=F52LTe8AAAAJ:d1gkVwhDpl0C',
  },
  {
    id: 'patent-indicators-2016',
    title:
      'Stochastic technology life cycle analysis using multiple patent indicators',
    authors: 'C. Lee, J. Kim, O. Kwon, H. G. Woo',
    venue: 'Technological Forecasting and Social Change, 106, 53–64',
    year: 2016,
    scholar:
      'https://scholar.google.co.kr/citations?view_op=view_citation&hl=en&user=F52LTe8AAAAJ&citation_for_view=F52LTe8AAAAJ:u5HHmVD_uO8C',
  },
  {
    id: 'technology-roadmapping-2016',
    title:
      'Towards robust technology roadmapping: How to diagnose the vulnerability of organisational plans',
    authors: 'C. Lee, J. Kim, S. Lee',
    venue: 'Technological Forecasting and Social Change, 111, 164–175',
    year: 2016,
    scholar:
      'https://scholar.google.co.kr/citations?view_op=view_citation&hl=en&user=F52LTe8AAAAJ&citation_for_view=F52LTe8AAAAJ:u-x6o8ySG0sC',
  },
];
