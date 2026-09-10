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
    title:
      'Domain-Normative Alignment of Large Language Models: Diagnosing Structural Misalignment and Causal Constraint-Based Correction in Technology Valuation',
    period: 'Sep 2026 – Aug 2029',
    funder: 'National Research Foundation of Korea (NRF)',
    note: 'Principal Investigator',
  },
  {
    id: 'climate-technology-knowledge-exchange',
    title:
      'Knowledge Exchange and Innovation in Climate Technology Ecosystems: An Empirical Study Using Patent and Bibliometric Data',
    period: 'Jun 2025 – May 2028',
    funder: 'National Research Foundation of Korea (NRF)',
    note: 'Collaborative research',
  },
  {
    id: 'data-valuation-framework',
    title: 'Developing a Data Valuation Framework',
    period: '2023 – 2024',
    funder: 'Korea Institute of Science and Technology Information (KISTI)',
  },
  {
    id: 'data-valuation-guidelines',
    title: 'Developing Data Valuation Guidelines',
    period: '2023',
    funder: 'Korea Data Agency (K-DATA)',
  },
  {
    id: 'purpose-specific-ip-valuation-models',
    title:
      'Developing Purpose-Specific Models for Intellectual Property Valuation',
    period: '2023',
    funder: 'Korea Invention Promotion Association (KIPA)',
  },
  {
    id: 'explainable-ai-patent-renewal',
    title:
      'Developing an Explainable AI-Based Decision Support Model for Patent Renewal',
    period: '2023',
    funder: 'Korea Institute of Science and Technology Information (KISTI)',
    note: 'Principal Investigator',
  },
  {
    id: 'translational-research-technology-seeds',
    title:
      'Developing a System for Identifying Technology Seeds for Translational Research',
    period: '2021 – 2023',
    funder: 'Commercialization Promotion Agency for R&D Outcomes (COMPA)',
  },
  {
    id: 'explainable-ai-technology-valuation',
    title:
      'Developing an Explainable AI-Based Methodology for Valuing Promising Technologies and Identifying Key Factors',
    period: 'May 2021 – Apr 2023',
    funder: 'National Research Foundation of Korea (NRF)',
    note: 'Principal Investigator',
  },
  {
    id: 'emerging-technology-decision-support',
    title:
      'Developing an Explainable AI-Based Decision Support System for Valuing Emerging Technologies',
    period: 'Jun 2021 – Nov 2021',
    funder: 'National Research Foundation of Korea (NRF)',
    note: 'Principal Investigator',
  },
  {
    id: 'customer-centric-service-decision-support',
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
    "id": "walmyung-byun",
    "name": "Walmyung Byun",
    "project": "An Empirical Game-Theoretic Analysis of Technology Credit Bureau (TCB) Strategy Selection and Bank Responses: Changes in Market Structure during Policy Introduction",
    "year": "2026",
    "course": "MOT Master's Program"
  },
  {
    "id": "sangsu-chun",
    "name": "Sangsu Chun",
    "project": "Quantifying Semantic and Structural Discrepancies between LLM-Generated and Authentic Customer Reviews",
    "year": "2026",
    "course": "MOT Master's Program"
  },
  {
    "id": "hyeongseok-lee",
    "name": "HyeongSeok Lee",
    "project": "Identifying Firm-Specific Core Technology Opportunities for Achieving Market Leadership in the Carbon Nanotube (CNT)-Based X-Ray Market",
    "year": "2026",
    "course": "MOT Master's Program"
  },
  {
    "id": "seunghyun-hwang",
    "name": "Seunghyun Hwang",
    "project": "A Framework for Recommending Candidate Technology Transferees Based on Technological Similarity and Complementarity",
    "year": "2026",
    "course": "MOT Master's Program"
  },
  {
    "id": "inho-park",
    "name": "Inho Park",
    "project": "Risk Factor Analysis of the Last-Mile Delivery Process Using FMEA",
    "year": "2026",
    "course": "MOT Master's Program"
  },
  {
    "id": "jecheol-yeon",
    "name": "Jecheol Yeon",
    "project": "Performance and Reliability Validation of an LLM-Based Technology Valuation Model Using a Multi-Agent Critique Loop",
    "year": "2026",
    "course": "MOT Master's Program"
  },
  {
    "id": "youngil-song",
    "name": "Youngil Song",
    "project": "Development of a Region-Specific R&D Evaluation Model: An AHP-Based Expert Assessment Approach",
    "year": "2026",
    "course": "MOT Master's Program"
  },
  {
    "id": "miseo-choi",
    "name": "Mi-seo choe",
    "project": "The Impact of the AI Voucher Program on Firms’ Economic Performance",
    "year": "2026",
    "course": "MOT Master's Program"
  },
  {
    "id": "hanlam-choi",
    "name": "HanLam Choi",
    "project": "Assessing the Adequacy of Corporate Cybersecurity Investment and Developing Future Strategies through an Analysis of National Cybersecurity R&D Trends",
    "year": "2026",
    "course": "MOT Master's Program"
  },
  {
    "id": "jisuk-shin",
    "name": "Jisuk Shin",
    "project": "Development of a Production Planning Optimization Model for Small and Medium-Sized Elevator Manufacturers",
    "year": "2026",
    "course": "MOT Master's Program"
  },
  {
    "id": "bora-sung",
    "name": "Bora Sung",
    "project": "Structural Relationships among Barriers to Generative AI Adoption: Evidence from the Telecommunications Industry",
    "year": "2026",
    "course": "MOT Master's Program"
  },
  {
    "id": "gi-beom-ko",
    "name": "Gi-beom Ko",
    "project": "Identifying Effective Training Approaches for Newly Hired Telecommunications Sales Employees: An Analysis of Training and Early Job Performance",
    "year": "2026",
    "course": "MOT Master's Program"
  },
  {
    "id": "byung-deuk-park",
    "name": "Byung-deuk Park",
    "project": "Relationships among Buyer Price-Reduction Pressure, External Collaboration Networks, Internal R&D Capabilities, and Technological Innovation Performance in SMEs and Venture Firms",
    "year": "2026",
    "course": "MOT Master's Program"
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
