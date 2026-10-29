// All site content lives here so updates don't require touching layout code.

export const profile = {
  name: 'Brijesh Nanda B Y',
  fullName: 'Brijesh Nanda Brunda Yogananda',
  role: 'Associate Applications Developer',
  org: 'NSF AI Institute ICICLE · The Ohio State University',
  location: 'Columbus, Ohio',
  email: 'brijeshnandaby@protonmail.com',
  github: 'https://github.com/brijesh-nanda-by',
  linkedin: 'https://www.linkedin.com/in/brijesh-nanda-b-y',
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  tagline: 'I build ML platforms that take researchers from raw data to results without writing code.',
  summary:
    'Full stack developer and AI engineer with nearly four years of industry experience building scalable microservices. I now lead software and ML/AI engineering for a 15-person research group at ICICLE, shipping foundation-model-based auto-labeling, no-code workflow orchestration, and self-managed AWS HPC infrastructure.',
};

export const stats = [
  { value: '~4 yrs', label: 'Industry experience in Java, Python & AWS' },
  { value: '15', label: 'Researchers supported at ICICLE' },
  { value: '2', label: 'Accepted papers: WACV 2027, EduHiPC 2026' },
  { value: '~80%', label: 'Smart Labeler accuracy after five feedback batches' },
];

export type PipelineStep = { name: string; detail: string };

export type Project = {
  id: string;
  kicker: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  steps?: PipelineStep[];
};

export const featured: Project = {
  id: 'smart-labeler',
  kicker: 'Lead engineer · Computer vision',
  title: 'Smart Labeler',
  summary:
    'An interactive ground-truth generation platform for zero- and few-shot object detection, semantic segmentation, and video segmentation/tracking. Foundation models propose, a human-in-the-loop triage workflow decides.',
  highlights: [
    'SAM3 and OWLv2 generate proposals; DINOv3 and BioCLIP extract features for triage',
    '~80% accuracy after five feedback batches on animal ecology datasets',
    'Few-shot batch jobs submitted to Slurm',
    'Extended to digital agriculture and weld-fault segmentation/tracking',
  ],
  stack: ['PyTorch', 'SAM3', 'OWLv2', 'DINOv3', 'BioCLIP', 'Slurm'],
  steps: [
    {
      name: 'Data ingestion',
      detail: 'Images and video from field cameras, drones, and lab datasets are collected into a single labeling workspace.',
    },
    {
      name: 'Proposal generation',
      detail: 'SAM3 provides one-click and text-prompt segmentation; OWLv2 proposes boxes for classes it has never been trained on.',
    },
    {
      name: 'Prototype triage',
      detail: 'DINOv3 and BioCLIP embeddings are matched against class prototypes so each proposal is resolved, cleared, or deferred to a human.',
    },
    {
      name: 'Threshold tuning',
      detail: 'Visual tools tune patch size, objectness, similarity, and NMS thresholds against IoU so researchers can see the trade-offs.',
    },
    {
      name: 'Batch execution',
      detail: 'Few-shot labeling runs as Slurm batch jobs on HPC, and every feedback round improves the next batch.',
    },
  ],
};

export const projects: Project[] = [
  {
    id: 'orchestrator',
    kicker: 'Architect · Open source',
    title: 'Workflow Orchestrator',
    summary:
      'A no-code platform covering the full ML/AI lifecycle, from data collection through training, inference, harmonization, and visualization, built from swappable, community-contributed steps.',
    highlights: [
      'Steps expose input/output ports, configurable triggers, and data validators',
      'Workflows bundle and run on laptops, base stations, or HPC clusters',
      'Long-running steps deploy as Slurm-scheduled VMs via Apptainer and TAPIS on SDSC and OSC Pitzer, Cardinal and Ascend',
    ],
    stack: ['Python', 'Slurm', 'Apptainer', 'TAPIS'],
  },
  {
    id: 'agritech',
    kicker: 'Applied ML · Digital agriculture',
    title: 'Precision Zone-Spraying Pipeline',
    summary:
      'Drone image uploads trigger weed detection, which produces spray/no-spray zones and a ready-to-fly mission plan.',
    highlights: [
      'Outputs a GeoPackage of spray zones and flight plans for .waypoints, RD Pilot (.rds), and PX4 (.plan)',
      'Companion Linux ground-control app for farm boundaries, obstacles, and auto-generated flight plans',
    ],
    stack: ['Object detection', 'GIS', 'PX4', 'Orchestrator'],
  },
  {
    id: 'hpc',
    kicker: 'Infrastructure · Admin',
    title: 'Lab HPC on AWS ParallelCluster',
    summary:
      'A custom HPC environment designed and built from scratch for the lab, which I continue to administer, debug, and maintain.',
    highlights: [
      'Head node plus A10, L40S, A100 GPU and CPU partitions',
      'Scoped queues and user groups, service quota management, TAPIS for external job submission',
      'Amazon EFS for private per-user storage',
    ],
    stack: ['AWS', 'ParallelCluster', 'Slurm', 'EFS', 'TAPIS'],
  },
  {
    id: 'image-lab',
    kicker: 'Tooling · Computer vision',
    title: 'Image Lab',
    summary:
      'A no-code OpenCV step for image pre-processing, verification, and region-of-interest enhancement, with batch submission across directories.',
    highlights: ['Interactive previews before committing a batch', 'Plugs into the Workflow Orchestrator as a reusable step'],
    stack: ['OpenCV', 'Python'],
  },
];

export const publications = [
  {
    title: 'Resolve, Clear, or Defer: Training-Free Active Prototype Triage for Ecological Detection Pipelines',
    venue: 'WACV 2027',
    track: 'Applications Track',
    status: 'Accepted',
  },
  {
    title: 'The Workflow Is the Curriculum: Provenance-Aware Learning Modules from AI/HPC Artifacts',
    venue: 'EduHiPC 2026',
    track: 'Held with IEEE HiPC 2026',
    status: 'Accepted',
  },
];

export type Role = { title: string; period: string; highlights: string[] };
export type Job = { company: string; location: string; roles: Role[] };

export const experience: Job[] = [
  {
    company: 'ICICLE · The Ohio State University',
    location: 'Columbus, OH',
    roles: [
      {
        title: 'Associate Applications Developer',
        period: 'Jun 2026 – Present',
        highlights: [
          'Primary point of contact for software and ML/AI engineering in a 15-person research group (8 undergraduates, 3 master’s, 4 PhD students)',
          'Lead Smart Labeler and architect the Workflow Orchestrator, Image Lab, and the AgriTech zone-spraying pipeline',
          'Built and administer the lab’s AWS ParallelCluster HPC environment',
          'Lead maintenance of the lab’s websites, delegating updates to student contributors',
        ],
      },
      {
        title: 'Graduate Research Assistant',
        period: 'Jun 2024 – Jun 2026',
        highlights: [
          'Architected an end-to-end ML pipeline that lets researchers run object detection without coding, pairing a drag-and-drop interface with SAM3-assisted annotation',
          'Implemented few-shot and zero-shot learning with OWLv2 and DINOv3 for new object classes in animal ecology and digital agriculture',
          'Built threshold optimization tools that visualize and tune parameters such as patch size against IoU and similarity',
        ],
      },
    ],
  },
  {
    company: 'Avis Budget Group',
    location: 'Bengaluru, India',
    roles: [
      {
        title: 'Software Development Engineer',
        period: 'Jul 2023 – Jul 2024',
        highlights: [
          'Designed RESTful microservices processing 10,000+ daily transactions across fleet management, insurance, and payments',
          'Developed a data pipeline managing toll transactions between fleet vehicles and toll systems',
        ],
      },
    ],
  },
  {
    company: 'Dassault Systèmes',
    location: 'Bengaluru, India',
    roles: [
      {
        title: 'Software Engineering Specialist',
        period: 'Oct 2020 – Jun 2023',
        highlights: [
          'Engineered an Enterprise Message Bus on AWS (Kinesis, SQS, DynamoDB) processing 1M+ messages daily across 50+ microservices',
          'Developed a web-based no-code workflow framework for designing backend systems, cutting the development lifecycle by 60%',
          'Built a HIPAA-compliant Donor Management System handling 10,000+ records, from onboarding to automated payments',
        ],
      },
    ],
  },
];

export const skills = [
  { group: 'AI / ML', items: ['PyTorch', 'OpenCV', 'YOLO', 'HuggingFace', 'SAM', 'DINOv3', 'BioCLIP', 'OWLv2', 'CNNs', 'Transformers'] },
  { group: 'Languages', items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C++'] },
  { group: 'Backend', items: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Maven', 'JUnit', 'Mockito'] },
  { group: 'Cloud & HPC', items: ['AWS Lambda', 'EC2', 'ECS', 'S3', 'SQS', 'SNS', 'Kinesis', 'IAM', 'ParallelCluster', 'Slurm'] },
  { group: 'Frontend', items: ['React', 'Angular', 'HTML5', 'CSS3'] },
  { group: 'Data & Tools', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Kubernetes', 'Terraform', 'Kafka', 'Jenkins', 'Linux'] },
];

export const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'The Ohio State University',
    period: 'May 2026',
    detail: 'GPA 3.94 · Machine Learning, Computer Vision, MLOps, Advanced Algorithms, Data Mining & Visualization',
  },
  {
    degree: 'B.E. Mechanical Engineering',
    school: 'The National Institute of Engineering, Mysuru',
    period: 'Aug 2016 – Jun 2020',
    detail: 'GPA 9.52 / 10 · Suspension Design Head, SAE BAJA India (all-terrain vehicles)',
  },
];
