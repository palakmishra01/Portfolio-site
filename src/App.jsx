import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Award, BookOpen, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Version Controlled Notes",
      description: "CLI-based note-taking app with built-in version control featuring commit, diff, and restore capabilities with AES encryption for data security.",
      tech: ["C++", "AES Encryption", "Command-Line Interface"],
      github: "https://github.com/palakmishra01/DSA-project-repo",
      highlights: ["Lightweight versioning", "Linked-list based diffs", "No external VCS needed"]
    },
    {
      title: "AI Sleep Breathing Irregularity Detection",
      description: "AI-driven system for detecting sleep breathing abnormalities from overnight physiological time-series signals using signal processing and deep learning.",      tech: ["Python", "CNN", "Signal Processing"],
      github: "https://github.com/palakmishra01/SRIP_health",
      highlights: ["Signal filtering and windowed time-series sample generation", "CNN-based classification of sleep breathing abnormalities", "81.63% accuracy with subject-independent validation"]
    },
    {
      title: "MONEFY",
      description: "Financial tracking system with real-time multi-currency conversion, automated analytics, and persistent CSV storage for comprehensive expense management.",
      tech: ["C++", "REST API", "JSON"],
      github: "https://github.com/palakmishra01/MONEFY",
      highlights: ["ExchangeRate API", "Automated reports", "Modular design"]
    },
    {
      title: "MailQ - Quantum Secure Email",
      description: "First-of-its-kind quantum-secure framework integrating Post-Quantum Cryptography (Kyber), AES encryption, and QKD simulator for future-proof email protection.",
      tech: ["C++", "Quantum Cryptography", "AES", "Kyber"],
      github: "https://github.com/palakmishra01/Quant_Crypt_SIH",
      highlights: ["Multi-layered security", "User-friendly Security Dial", "Modular architecture"]
    },
    {
      title: "PHEME Club Website",
      description: "Official web presence for PHEME club with dynamic pages for events, newsletters, and communication.",
      tech: [ "HTML", "CSS", "JavaScript","React"],
      github: "https://github.com/palakmishra01/PHEME-Website_Clone",
      website: "https://pheme-iitj.vercel.app/",
      highlights: ["Dynamic content", "Enhanced UX", "Resource sharing"]
    }
  ];

  const achievements = [
    { icon: "🏆", text: "99.74%ile in JEE Mains 2024", highlight: "Top 3% JEE Advanced 2024" },
    { icon: "📊", text: "Leetcode", highlight: " Solved 400+ problems with a daily streak of 250+ days" },
    { icon: "💻", text: "Leetcode", highlight: "Peak Rating: 1530" },
    { icon: "🎯", text: "AlgoUniversity Tech Fellowship", highlight: "Top 8% Nationwide" }
    
  ];

  const skills = {
    "Languages": ["C/C++", "Python", "JavaScript", "LaTeX"],
    "Web Dev": ["React", "HTML", "CSS", "REST APIs"],
    "Tools": ["Git", "VS Code", "Visual Studio", "Figma"]
  };

  return (
    <div className="min-h-screen bg-[#0B1D2A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0B1D2A]/90 backdrop-blur-md z-50 border-b border-[#C99700]">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="https://drive.google.com/file/d/1_XIc0rD0VyvYAMTQdhw0ZTxKYgGOerLr/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl font-bold transition-colors hover:text-[#E6C068]" style={{color: '#D4AF37'}}>
              Resume
            </a>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'achievements', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors text-sm sm:text-base ${
                    activeSection === section 
                      ? 'text-[#D4AF37]' 
                      : 'text-gray-300 hover:text-[#E6C068]'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0B1D2A]/95 backdrop-blur-md border-t border-[#C99700]">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'projects', 'achievements', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize py-2 text-gray-300 hover:text-[#E6C068] transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4" style={{background: 'linear-gradient(90deg, #D4AF37, #E6C068)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 2px 12px rgba(212, 175, 55, 0.25)'}}>
              Palak Mishra
            </h1>
            {/* <p className="text-lg sm:text-2xl text-amber-300 mb-2">B24EE1050</p> */}
            <p className="text-base sm:text-lg text-gray-400">Sophomore</p>
            <p className="text-base sm:text-lg text-gray-400">Indian Institute of Technology, IIT Jodhpur</p>
          </div>
          
          {/* <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Building secure, scalable systems with a focus on cryptography, algorithms, and modern web technologies
          </p> */}

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <a href="https://github.com/palakmishra01" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all hover:scale-105 text-sm sm:text-base border-2 border-[#C99700] text-white" style={{background: 'linear-gradient(135deg, #D4AF37, #E6C068)', color: '#0B1D2A', boxShadow: '0 4px 18px rgba(212,175,55,0.25)'}} onMouseEnter={(e) => e.target.style.boxShadow = '0 6px 24px rgba(212,175,55,0.4)'} onMouseLeave={(e) => e.target.style.boxShadow = '0 4px 18px rgba(212,175,55,0.25)'}>
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/palak-mishra-6253a3328/" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all hover:scale-105 text-sm sm:text-base border-2 border-[#C99700] text-white" style={{background: 'linear-gradient(135deg, #D4AF37, #E6C068)', color: '#0B1D2A', boxShadow: '0 4px 18px rgba(212,175,55,0.25)'}} onMouseEnter={(e) => e.target.style.boxShadow = '0 6px 24px rgba(212,175,55,0.4)'} onMouseLeave={(e) => e.target.style.boxShadow = '0 4px 18px rgba(212,175,55,0.25)'}>
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://leetcode.com/u/palakmishra0810/" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all hover:scale-105 text-sm sm:text-base border-2 border-[#C99700] text-white" style={{background: 'linear-gradient(135deg, #D4AF37, #E6C068)', color: '#0B1D2A', boxShadow: '0 4px 18px rgba(212,175,55,0.25)'}} onMouseEnter={(e) => e.target.style.boxShadow = '0 6px 24px rgba(212,175,55,0.4)'} onMouseLeave={(e) => e.target.style.boxShadow = '0 4px 18px rgba(212,175,55,0.25)'}>
              <Code2 size={20} /> LeetCode
            </a>
          </div>

          <button 
            onClick={() => scrollToSection('projects')}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all hover:scale-105 text-sm sm:text-base w-full sm:w-auto border border-[#C99700]" style={{background: 'linear-gradient(135deg, #D4AF37, #E6C068)', color: '#0B1D2A', boxShadow: '0 4px 18px rgba(212,175,55,0.25)'}} onMouseEnter={(e) => e.target.style.boxShadow = '0 6px 24px rgba(212,175,55,0.4)'} onMouseLeave={(e) => e.target.style.boxShadow = '0 4px 18px rgba(212,175,55,0.25)'}
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center pb-2" style={{color: '#D4AF37'}}>
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-[#003D66]/50 backdrop-blur-sm rounded-xl p-5 sm:p-8 border-2 border-[#C99700]">
              <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{color: '#D4AF37'}}>Background</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                Second year B.Tech, pursuing Electrical Engineering at IIT Jodhpur.{/*with a CGPA of 7.79.*/ }
                
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                I enjoy working at the intersection of systems, machine learning, and web technologies. My experience spans quantum-secure communication systems, ML-driven applications, version control implementations, and full-stack development, where I prioritize clarity, performance, and maintainability.
              </p>
            </div>

            <div className="bg-[#003D66]/50 backdrop-blur-sm rounded-xl p-5 sm:p-8 border-2 border-[#C99700]">
              <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{color: '#D4AF37'}}>What I Do</h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-lg">⚙️</span>
                  <span>Backend Systems (C++, Python)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">🌐</span>
                  <span>Full-Stack Development (React)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">🧠</span>
                  <span>Machine Learning Projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">🔐</span>
                  <span>Quantum & Cryptography Exploration</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#003D66]/50 backdrop-blur-sm rounded-xl p-5 sm:p-8 border-2 border-[#C99700]">
            <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{color: '#D4AF37'}}>Skills & Technologies</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-base sm:text-lg font-semibold mb-3" style={{color: '#D4AF37'}}>{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span key={skill} className="px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300 border-2 border-[#C99700]" style={{backgroundColor: '#D4AF37', color: '#0B1D2A'}}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center pb-2" style={{color: '#D4AF37'}}>
            Featured Projects
          </h2>
          
          <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${
            projects.length % 2 === 1
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 md:grid-cols-2'
          }`}>
                    {projects.map((project, index) => (
                      <div key={index} className={`${projects.length % 2 === 1 && index === projects.length - 1 ? 'md:col-span-2 flex justify-center' : ''}`}>
                        <div className={`${projects.length % 2 === 1 && index === projects.length - 1 ? 'w-full md:w-[calc(50%-1rem)]' : 'w-full'} bg-[#003D66]/50 backdrop-blur-sm rounded-xl p-5 sm:p-6 border-2 border-[#C99700] hover:scale-105 transition-all group`}>
                          <div className="flex justify-between items-start mb-4 gap-2">
                            <h3 className="text-lg sm:text-xl font-bold group-hover:scale-105 transition-colors" style={{color: '#D4AF37'}}>
                              {project.title}
                            </h3>
                            <div className="flex gap-2 flex-shrink-0">
                              <a href={project.github} target="_blank" rel="noopener noreferrer"
                                 className="transition-colors" style={{color: '#D4AF37'}} onMouseEnter={(e) => e.target.style.color = '#E6C068'} onMouseLeave={(e) => e.target.style.color = '#D4AF37'}>
                                <Github size={20} />
                              </a>
                              {project.website && (
                                <a href={project.website} target="_blank" rel="noopener noreferrer"
                                   className="transition-colors" style={{color: '#D4AF37'}} onMouseEnter={(e) => e.target.style.color = '#E6C068'} onMouseLeave={(e) => e.target.style.color = '#D4AF37'}>
                                  <ExternalLink size={20} />
                                </a>
                              )}
                            </div>
                          </div>
                          
                          <p className="text-sm sm:text-base text-gray-300 mb-2 leading-relaxed">
                            {project.description}
                          </p>
                          {project.accuracy && (
                            <p className="text-sm sm:text-base mb-4 font-medium" style={{color: '#D4AF37'}}>
                              {project.accuracy}
                            </p>
                          )}

                          <div className="mb-4">
                            <p className="text-xs sm:text-sm font-semibold mb-2" style={{color: '#D4AF37'}}>Key Features:</p>
                            <ul className="space-y-1">
                              {project.highlights.map((highlight, i) => (
                                <li key={i} className="text-xs sm:text-sm text-gray-400 flex items-start gap-2">
                                  <span style={{color: '#D4AF37'}} className="mt-1">•</span>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.tech.map(tech => (
                              <span key={tech} className="px-2.5 py-1 rounded-full text-xs text-gray-300 border border-[#C99700]" style={{backgroundColor: '#D4AF37', color: '#0B1D2A'}}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center pb-2" style={{color: '#D4AF37'}}>
            Achievements
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-[#003D66]/50 backdrop-blur-sm rounded-xl p-5 sm:p-6 border-2 border-[#C99700] hover:scale-105 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl sm:text-4xl">{achievement.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold mb-1" style={{color: '#D4AF37'}}>
                      {achievement.text}
                    </h3>
                    <p className="font-medium text-sm sm:text-base" style={{color: '#E6C068'}}>{achievement.highlight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 bg-[#003D66]/50 backdrop-blur-sm rounded-xl p-5 sm:p-8 border-2 border-[#C99700]">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center" style={{color: '#D4AF37'}}>Key Courses</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-300">
              <div className="flex items-start gap-2">
                <BookOpen size={20} className="mt-1 flex-shrink-0" style={{color: '#D4AF37'}} />
                <span>Data Structures & Algorithms (A)</span>
              </div>
              <div className="flex items-start gap-2">
                <BookOpen size={20} className="mt-1 flex-shrink-0" style={{color: '#D4AF37'}} />
                <span>Pattern Recognition and Machine Learning</span>
              </div>
              <div className="flex items-start gap-2">
                <BookOpen size={20} className="mt-1 flex-shrink-0" style={{color: '#D4AF37'}} />
                <span>Signals and Systems (A)</span>
              </div>
              <div className="flex items-start gap-2">
                <BookOpen size={20} className="mt-1 flex-shrink-0" style={{color: '#D4AF37'}} />
                <span>Probability & Stochastic Processes (A-)</span>
              </div>
              <div className="flex items-start gap-2">
                <BookOpen size={20} className="mt-1 flex-shrink-0" style={{color: '#D4AF37'}} />
                <span>Digital Design</span>
              </div>
              <div className="flex items-start gap-2">
                <BookOpen size={20} className="mt-1 flex-shrink-0" style={{color: '#D4AF37'}} />
                <span>Fundamentals of Quantum Information</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 pb-2" style={{color: '#D4AF37'}}>
            Get In Touch
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
            I'm currently looking for software development opportunities. Whether you have a question 
            or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8 sm:mb-12">
            <a href="mailto:b24ee1050@iitj.ac.in" 
               className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all hover:scale-105 text-sm sm:text-base border-2 border-[#C99700]" style={{backgroundColor: '#D4AF37', color: '#0B1D2A'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#E6C068'} onMouseLeave={(e) => e.target.style.backgroundColor = '#D4AF37'}>
              <Mail size={20} /> <span className="truncate">b24ee1050@iitj.ac.in</span>
            </a>
            <a href="tel:+919685351911"
               className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all hover:scale-105 text-sm sm:text-base border-2 border-[#C99700]" style={{backgroundColor: '#D4AF37', color: '#0B1D2A'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#E6C068'} onMouseLeave={(e) => e.target.style.backgroundColor = '#D4AF37'}>
              📱 <span>+91 96853 51911</span>
            </a>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6">
            <a href="https://github.com/palakmishra01" target="_blank" rel="noopener noreferrer"
               className="transition-colors hover:scale-110 transform" style={{color: '#D4AF37'}} onMouseEnter={(e) => e.target.style.color = '#E6C068'} onMouseLeave={(e) => e.target.style.color = '#D4AF37'}>
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/palak-mishra-6253a3328/" target="_blank" rel="noopener noreferrer"
               className="transition-colors hover:scale-110 transform" style={{color: '#D4AF37'}} onMouseEnter={(e) => e.target.style.color = '#E6C068'} onMouseLeave={(e) => e.target.style.color = '#D4AF37'}>
              <Linkedin size={28} />
            </a>
            <a href="https://leetcode.com/u/palakmishra0810/" target="_blank" rel="noopener noreferrer"
               className="transition-colors hover:scale-110 transform" style={{color: '#D4AF37'}} onMouseEnter={(e) => e.target.style.color = '#E6C068'} onMouseLeave={(e) => e.target.style.color = '#D4AF37'}>
              <Code2 size={28} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
