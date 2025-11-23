import { useState } from 'react';
import { Camera, Code, Mail, Github, Linkedin, Download, ArrowRight, Brain, Eye, Zap, Database, Cloud, Settings, Box, Target, BarChart3, Layers, PlayCircle, Cpu, GitBranch } from 'lucide-react';
import pipelineImg from '../assets/object-detection-pipeline.png';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredPipeline, setHoveredPipeline] = useState<number | null>(null);

  const skills = {
    mlai: ['Computer Vision', 'Object Detection', 'ML Pipelines', 'PyTorch', 'TensorFlow', 'OpenCV', 'MLflow'],
    backend: ['Java', 'Spring', 'Python', 'RESTful APIs', 'Microservices', 'Multithreading'],
    frontend: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML/CSS'],
    cloud: ['AWS EC2', 'Lambda', 'ECS', 'S3', 'Kinesis', 'SQS', 'DynamoDB'],
    tools: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'Terraform', 'Redis']
  };

  const pipelineStages = [
    { 
      id: 1,
      name: 'Data Ingestion', 
      icon: <Database className="w-8 h-8" />, 
      desc: 'Multi-source data collection',
      details: 'Automated ingestion from diverse data sources with support for various formats and protocols'
    },
    { 
      id: 2,
      name: 'Ground Truth Creation', 
      icon: <Box className="w-8 h-8" />, 
      desc: 'Intelligent annotation system',
      details: 'SAM3-assisted bounding box annotation with one-click segmentation. Few-shot and zero-shot annotation using Google OWL-v2 and DINO-v3'
    },
    { 
      id: 3,
      name: 'Class Support Generation', 
      icon: <Layers className="w-8 h-8" />, 
      desc: 'Patch optimization',
      details: 'Automated patch size optimization with visual comparison of predicted vs. actual boxes and IOU score analysis'
    },
    { 
      id: 4,
      name: 'Threshold Optimization', 
      icon: <BarChart3 className="w-8 h-8" />, 
      desc: 'Parameter tuning',
      details: 'Interactive visualization and optimization of objectness, similarity, and NMS thresholds with real-time feedback'
    },
    { 
      id: 5,
      name: 'Automated Deployment', 
      icon: <PlayCircle className="w-8 h-8" />, 
      desc: 'Smart orchestration',
      details: 'Intelligent job scheduling with automatic resource allocation or user-defined system requirements'
    }
  ];

  const experience = [
    {
      title: 'Graduate Research Assistant',
      company: 'ICICLE (OSU)',
      period: 'Jun 2025 - Present',
      location: 'Columbus, OH',
      type: 'research',
      highlights: [
        'Architected an end-to-end ML/AI pipeline democratizing object detection for researchers—eliminating the need for programming expertise through an intuitive drag-and-drop interface',
        'Integrated SAM3 (Segment Anything Model) for intelligent annotation assistance, reducing annotation time by enabling one-click object segmentation that automatically generates bounding boxes',
        'Implemented few-shot and zero-shot learning capabilities using Google\'s OWL-v2 and DINO-v3 models, enabling rapid annotation of new object classes with minimal training data',
        'Developed advanced visualization tools for threshold optimization (objectness, similarity, NMS) with real-time IOU score analysis and graphical comparison of predicted vs. ground truth boxes',
        'Built intelligent job orchestration system with automatic resource allocation and deployment optimization, handling complex ML workflows without manual job scheduling',
        'Applied computer vision techniques to animal ecology and digital agriculture domains, enabling researchers to conduct experiments through clicks rather than code'
      ]
    },
    {
      title: 'Software Development Engineer',
      company: 'Avis Budget Group',
      period: 'Jun 2023 - Jul 2024',
      location: 'Bangalore, India',
      type: 'industry',
      highlights: [
        'Engineered a comprehensive web-based platform serving 500+ rental agents, digitizing the complete car rental lifecycle from reservation to return and damage assessment',
        'Designed and implemented RESTful microservices handling 10,000+ daily transactions for fleet management, insurance processing, payment workflows, and vehicle tracking',
        'Built automated data pipeline delivering real-time vehicle and billing information to SiriusXM and toll authorities, enabling seamless toll passage for 50,000+ fleet vehicles',
        'Developed intelligent billing system automatically routing traffic violations and toll charges to appropriate customers, reducing manual billing errors by 85%',
        'Integrated with third-party APIs for insurance verification, payment processing, and DMV systems, creating a unified ecosystem for rental operations',
        'Reduced average rental processing time from 45 minutes to 12 minutes through workflow automation and optimized database queries'
      ]
    },
    {
      title: 'Software Engineering Specialist',
      company: 'Dassault Systemes',
      period: 'Oct 2020 - Jun 2023',
      location: 'Bangalore, India',
      type: 'industry',
      highlights: [
        'Architected Enterprise Message Bus—a distributed data streaming platform using AWS (Kinesis, SQS, S3, DynamoDB) processing 1M+ messages daily across 50+ microservices',
        'Eliminated the need for coordinated API calls between services by implementing event-driven architecture, reducing API development time by 40% and improving system reliability with automatic retry mechanisms',
        'Designed and built a configurable workflow engine enabling non-technical users to create complex business workflows through drag-and-drop interface, eliminating the need for custom development',
        'Reduced client onboarding time by 60%—from 6 months to 2.5 months—by providing reusable workflow templates that companies could customize without programming',
        'Orchestrated cluster of 15+ microservices handling 500,000+ workflow executions monthly with 99.9% uptime, serving 5 Fortune 500 companies',
        'Developed Donor Management System for plasma donation centers managing 10,000+ donor records, payment tracking, equipment management, and clinical data with HIPAA compliance',
        'Implemented real-time payment tracking and automated reconciliation reducing financial discrepancies by 95% and ensuring compliance with health and safety standards'
      ]
    }
  ];

  const ScrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-emerald-400">BN</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => ScrollToSection('about')} className="hover:text-emerald-400 transition">About</button>
              <button onClick={() => ScrollToSection('experience')} className="hover:text-emerald-400 transition">Experience</button>
              <button onClick={() => ScrollToSection('research')} className="hover:text-emerald-400 transition">Research</button>
              <button onClick={() => ScrollToSection('skills')} className="hover:text-emerald-400 transition">Skills</button>
              <button onClick={() => ScrollToSection('contact')} className="hover:text-emerald-400 transition">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-emerald-400 text-sm tracking-widest mb-4 uppercase">
                Full Stack Developer → ML/AI Engineer
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Brijesh Nanda B Y
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Building intelligent systems at the intersection of Software Engineering and Computer Vision
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/brijesh-nanda-by" target="_blank" rel="noopener noreferrer"
                   className="bg-gray-800 p-3 rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/brijesh-nanda-b-y" target="_blank" rel="noopener noreferrer"
                   className="bg-gray-800 p-3 rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:brijeshnandaby@protonmail.com"
                   className="bg-gray-800 p-3 rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 rounded-2xl opacity-20 blur-xl animate-pulse"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border-2 border-emerald-400 border-opacity-50 backdrop-blur">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="bg-emerald-400 bg-opacity-20 p-2 rounded-lg">
                      <Brain className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-400">Current Focus</h3>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="group bg-gray-800 bg-opacity-50 p-4 rounded-xl border border-gray-700 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start space-x-3">
                      <div className="text-3xl mt-1 group-hover:scale-110 transition-transform">🎯</div>
                      <div className="flex-1">
                        <div className="font-bold text-lg text-white mb-1">Computer Vision</div>
                        <div className="text-gray-400 text-sm">Object Detection & Recognition</div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          <span className="text-xs bg-emerald-400 bg-opacity-20 text-emerald-400 px-2 py-0.5 rounded">SAM3</span>
                          <span className="text-xs bg-cyan-400 bg-opacity-20 text-cyan-400 px-2 py-0.5 rounded">OWL-v2</span>
                          <span className="text-xs bg-blue-400 bg-opacity-20 text-blue-400 px-2 py-0.5 rounded">DINO-v3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-gray-800 bg-opacity-50 p-4 rounded-xl border border-gray-700 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start space-x-3">
                      <div className="text-3xl mt-1 group-hover:scale-110 transition-transform">🌾</div>
                      <div className="flex-1">
                        <div className="font-bold text-lg text-white mb-1">Digital Agriculture</div>
                        <div className="text-gray-400 text-sm">Animal Ecology Applications</div>
                        <div className="mt-2 flex items-center space-x-2 text-xs text-gray-500">
                          <Eye className="w-3 h-3" />
                          <span>Wildlife Monitoring • Crop Analysis</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-gray-800 bg-opacity-50 p-4 rounded-xl border border-gray-700 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start space-x-3">
                      <div className="text-3xl mt-1 group-hover:scale-110 transition-transform">🔬</div>
                      <div className="flex-1">
                        <div className="font-bold text-lg text-white mb-1">ML Pipeline Development</div>
                        <div className="text-gray-400 text-sm">End-to-End Automation</div>
                        <div className="mt-2 flex items-center space-x-2 text-xs text-gray-500">
                          <Zap className="w-3 h-3" />
                          <span>No-Code Research Platform</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Actively researching</span>
                    </span>
                    <span>@ ICICLE Project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-emerald-400">About Me</h2>
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I'm a Full Stack Developer transitioning into ML/AI with nearly 4 years of software engineering experience. 
              My journey began with building scalable enterprise systems using Java, Spring, and AWS, where I reduced 
              API development time by 40% through innovative data streaming solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Now, I'm channeling that engineering expertise into computer vision and machine learning at Ohio State 
              University's ICICLE project, where I'm developing end-to-end ML pipelines for object detection in animal 
              ecology and digital agriculture. My unique background in both software engineering and mechanical 
              engineering gives me a systems-thinking approach to solving complex problems.
            </p>
          </div>
        </div>
      </section>

      {/* Research & ML Pipeline */}
      <section id="research" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-12 text-emerald-400">Research & ML Pipeline</h2>
          <div className="bg-gray-800 p-8 rounded-2xl border border-emerald-400 border-opacity-30 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Camera className="w-8 h-8 text-emerald-400" />
              <h3 className="text-2xl font-bold">ICICLE Object Detection Pipeline</h3>
            </div>
            <p className="text-gray-400 text-lg mb-2">
              No-code ML platform for researchers in Animal Ecology and Digital Agriculture
            </p>
            <p className="text-gray-300 mb-6">
              An end-to-end automated pipeline that democratizes object detection research through intuitive drag-and-drop 
              interfaces, eliminating the need for programming expertise or manual job scheduling.
            </p>
          </div>

          {/* Pipeline Diagram - Visual Workflow */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-emerald-400 border-opacity-20 mb-8">
            <div className="text-center mb-4">
              <h4 className="text-xl font-bold text-emerald-400 mb-2">Complete Workflow</h4>
              <p className="text-gray-400 text-sm">Interactive timeline from data ingestion to deployment</p>
            </div>
            {/* Pipeline image from assets */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <img
                src={pipelineImg}
                alt="ICICLE object detection pipeline"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Detailed Pipeline Stages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pipelineStages.map((stage, idx) => (
              <div 
                key={stage.id}
                onMouseEnter={() => setHoveredPipeline(idx)}
                onMouseLeave={() => setHoveredPipeline(null)}
                className={`bg-gray-800 rounded-xl p-6 border-2 transition-all duration-300 ${
                  hoveredPipeline === idx 
                    ? 'border-emerald-400 shadow-lg shadow-emerald-400/20 transform scale-105' 
                    : 'border-gray-700'
                }`}
              >
                {/* Icon */}
                <div className={`mb-3 transition-colors ${
                  hoveredPipeline === idx ? 'text-emerald-400' : 'text-gray-400'
                }`}>
                  {stage.icon}
                </div>
                
                {/* Stage Name */}
                <h4 className="text-lg font-bold mb-2 text-white">{stage.name}</h4>
                
                {/* Short Description */}
                <p className="text-sm text-gray-400 mb-2">{stage.desc}</p>
                
                {/* Detailed Description */}
                <p className="text-xs text-gray-300 leading-relaxed">
                  {stage.details}
                </p>
              </div>
            ))}
          </div>

          {/* Key Features */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <Target className="w-10 h-10 text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold mb-2">Intelligent Annotation</h4>
              <p className="text-gray-400 text-sm">
                SAM3-powered one-click segmentation with few-shot learning using OWL-v2 and DINO-v3
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <BarChart3 className="w-10 h-10 text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold mb-2">Visual Optimization</h4>
              <p className="text-gray-400 text-sm">
                Real-time IOU analysis with graphical comparison of predicted vs. ground truth boxes
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <Cpu className="w-10 h-10 text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold mb-2">Smart Orchestration</h4>
              <p className="text-gray-400 text-sm">
                Automated resource allocation and deployment with intelligent job scheduling
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gray-900 p-6 rounded-lg border border-gray-700">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-emerald-400 font-semibold">Tech Stack:</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm">PyTorch</span>
              {/* <span className="bg-gray-800 px-3 py-1 rounded text-sm">TensorFlow</span> */}
              <span className="bg-gray-800 px-3 py-1 rounded text-sm">SAM3</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm">OWL-v2</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm">DINO-v3</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm">OpenCV</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm">AWS</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm">Docker</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm">Singularity containers</span>
              {/* <span className="bg-gray-800 px-3 py-1 rounded text-sm">MLflow</span> */}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-emerald-400">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-gray-800 p-8 rounded-2xl border transition-all duration-300 ${
                  hoveredCard === idx ? 'border-emerald-400 transform translate-x-2' : 'border-gray-700'
                }`}
              >
                <div className="flex flex-col md:flex-row justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <div className="text-emerald-400 text-xl font-semibold">{exp.company}</div>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <div className="text-gray-400 font-medium">{exp.period}</div>
                    <div className="text-gray-400">{exp.location}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-3">
                      <ArrowRight className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-emerald-400">Skills & Technologies</h2>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {['ML/AI', 'Backend', 'Frontend', 'Cloud & DevOps', 'Tools'].map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  activeTab === idx 
                    ? 'bg-emerald-400 text-gray-900' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <div className="flex flex-wrap gap-3">
              {activeTab === 0 && skills.mlai.map((skill, idx) => (
                <span key={idx} className="bg-gray-900 text-emerald-400 px-4 py-2 rounded-lg font-medium border border-emerald-400 border-opacity-30">
                  {skill}
                </span>
              ))}
              {activeTab === 1 && skills.backend.map((skill, idx) => (
                <span key={idx} className="bg-gray-900 text-emerald-400 px-4 py-2 rounded-lg font-medium border border-emerald-400 border-opacity-30">
                  {skill}
                </span>
              ))}
              {activeTab === 2 && skills.frontend.map((skill, idx) => (
                <span key={idx} className="bg-gray-900 text-emerald-400 px-4 py-2 rounded-lg font-medium border border-emerald-400 border-opacity-30">
                  {skill}
                </span>
              ))}
              {activeTab === 3 && skills.cloud.map((skill, idx) => (
                <span key={idx} className="bg-gray-900 text-emerald-400 px-4 py-2 rounded-lg font-medium border border-emerald-400 border-opacity-30">
                  {skill}
                </span>
              ))}
              {activeTab === 4 && skills.tools.map((skill, idx) => (
                <span key={idx} className="bg-gray-900 text-emerald-400 px-4 py-2 rounded-lg font-medium border border-emerald-400 border-opacity-30">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-emerald-400">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <Code className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">MS in Computer Science</h3>
              <div className="text-emerald-400 font-semibold mb-2">Ohio State University</div>
              <div className="text-gray-400 mb-4">Aug 2024 - May 2026</div>
              <div className="text-gray-300">
                Focus: Machine Learning, AI, Computer Vision, Advanced Algorithms, Data Mining
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <Settings className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">BE in Mechanical Engineering</h3>
              <div className="text-emerald-400 font-semibold mb-2">National Institute of Engineering</div>
              <div className="text-gray-400 mb-4">Aug 2016 - May 2020</div>
              <div className="text-gray-300">
                CGPA: 9.52/10.0 • Systems Thinking • Engineering Fundamentals
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-emerald-400">Get In Touch</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm currently open to research opportunities and collaborations in ML/AI and Computer Vision. 
            Whether you want to discuss projects or just say hi, feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:brijeshnandaby@protonmail.com"
              className="flex items-center space-x-2 bg-emerald-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-300 transition"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>
            <button className="flex items-center space-x-2 border-2 border-emerald-400 text-emerald-400 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-400 hover:text-gray-900 transition">
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;