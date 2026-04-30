import React, { useState, useEffect } from 'react';
import './App.css';
import BookingDemo from './BookingDemo';
import profileImg from './assets/profile.jpg';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'nav-scrolled glass' : ''}`}>
        <div className="container nav-content">
          <div className="logo">NAVEEN KUMAR<span>.A</span></div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="badge">Full Stack Developer</span>
            <h1>Naveen <span className="text-accent">Kumar A</span></h1>
            <p className="hero-p">Results-driven Full Stack Developer with 1+ year of professional experience designing, building, and deploying scalable web applications using React, Node.js, TypeScript, NestJS, and MySQL.</p>
            <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#experience" className="btn btn-outline">My Journey</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-card glass">
              <div className="card-dot"></div>
              <div className="profile-img-container">
                <img src={profileImg} alt="Naveen Kumar A" className="hero-profile-img" />
              </div>
              <div className="card-content">
                <div className="line-item">Expertise: <span>React.js + Node</span></div>
                <div className="line-item">Education: <span>BE CSE (8.86 CGPA)</span></div>
                <div className="line-item">Location: <span>Chennai, India</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about bg-alt">
        <div className="container">
          <div className="section-header">
            <h2>Profile Summary</h2>
            <div className="underline"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>Results-driven Full Stack Developer with 1+ year of professional experience designing, building, and deploying scalable web applications using React, Node.js, TypeScript, NestJS, and MySQL. Hands-on expertise in REST API development, AWS cloud deployment (S3, Lambda), and database optimisation. Proven ability to deliver clean, maintainable code in agile team environments, with a track record of reducing query response times, improving UI performance, and shipping production-ready features.</p>
              <div className="stats-grid">
                <div className="stat-card glass">
                  <div className="stat-num">1</div>
                  <div className="stat-label">Year Experience</div>
                </div>
                <div className="stat-card glass">
                  <div className="stat-num">8.86</div>
                  <div className="stat-label">BE CGPA</div>
                </div>
                <div className="stat-card glass">
                  <div className="stat-num">2+</div>
                  <div className="stat-label">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <h2>Professional Experience</h2>
            <div className="underline"></div>
          </div>
          <div className="timeline">
            <div className="timeline-item glass">
              <div className="time-period">April 2025 – February 2026</div>
              <h3>Full Stack Developer</h3>
              <h4 className="company">Jothi Software Private Limited, Chennai</h4>
              <ul>
                <li>Designed and delivered 5+ responsive web application modules using React, HTML5, CSS3, and JavaScript, improving cross-browser UI consistency and reducing reported frontend bugs by 40%.</li>
                <li>Built and integrated RESTful APIs connecting React frontend to Node.js backend services, cutting average API response time by approximately 25%.</li>
                <li>Managed and optimised MySQL database operations (CRUD, indexing, joins) for datasets exceeding 10,000 records, achieving a 30% reduction in average query execution time.</li>
                <li>Deployed, configured, and monitored production applications on AWS (S3, Lambda), maintaining 99%+ uptime across all hosted services.</li>
                <li>Collaborated in daily Agile standups and sprint reviews with cross-functional teams of 6+, identifying and resolving 10+ production defects within SLA timelines.</li>
                <li>Reviewed and merged pull requests in Git/Sourcetree; enforced coding standards that reduced code review iteration cycles by 35%.</li>
              </ul>
            </div>
            <div className="timeline-item glass">
              <div className="time-period">January 2025 – March 2025</div>
              <h3>Software Development Intern</h3>
              <ul>
                <li>Contributed to 2 real-time software development projects, delivering frontend components using React and JavaScript under senior developer mentorship.</li>
                <li>Participated in agile sprint planning, daily standups, and code review sessions, strengthening collaborative development practices.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills bg-alt">
        <div className="container">
          <div className="section-header">
            <h2>Technical Skills</h2>
            <div className="underline"></div>
          </div>
          <div className="skills-grid">
            <div className="skill-category glass">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span>React.js</span> <span>JavaScript</span> <span>HTML5</span> <span>CSS3</span> <span>Ant Design</span>
              </div>
            </div>
            <div className="skill-category glass">
              <h3>Backend & DB</h3>
              <div className="skill-tags">
                <span>Node.js</span> <span>TypeScript</span> <span>NestJS</span> <span>MySQL</span>
              </div>
            </div>
            <div className="skill-category glass">
              <h3>Cloud & DevOps</h3>
              <div className="skill-tags">
                <span>AWS (S3, Lambda)</span> <span>GCP</span> <span>Git</span> <span>Sourcetree</span> <span>Postman</span>
              </div>
            </div>
            <div className="skill-category glass">
              <h3>Practices</h3>
              <div className="skill-tags">
                <span>SDLC</span> <span>Unit Testing (Basic)</span> <span>JUnit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2>Projects</h2>
            <div className="underline"></div>
          </div>
          <div className="projects-grid">
            <div className="project-card glass">
              <div className="project-info">
                <div className="project-header">
                  <h3>Books Stock Inventory Management System</h3>
                </div>
                <p>Architected and built a full-stack inventory management web application handling 2,000+ book records with real-time stock tracking, low-stock alerts, and automated reporting dashboards.</p>
                <div className="project-details">
                  <ul>
                    <li>Implemented optimised MySQL queries with indexing strategies, reducing data retrieval time by ~35% compared to the initial schema.</li>
                    <li>Integrated Shopify API for product catalogue synchronisation and deployed the application on AWS S3 and Lambda for cost-effective, scalable access.</li>
                    <li>Delivered end-to-end feature development — from database schema design to React UI — within a 4-week development cycle.</li>
                  </ul>
                </div>
                <div className="tech-tags">
                  <span>React</span> <span>Node.js</span> <span>TypeScript</span> <span>MySQL</span> <span>AWS</span> <span>Shopify</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Demo Section */}
      <BookingDemo />

      {/* Education Section */}
      <section id="education" className="education bg-alt">
        <div className="container">
          <div className="section-header">
            <h2>Education</h2>
            <div className="underline"></div>
          </div>
          <div className="education-grid">
            <div className="edu-card glass">
              <div className="edu-year">2024</div>
              <h3>B.E. Computer Science and Engineering</h3>
              <p>Muthayammal Engineering College (Autonomous), Rasipuram</p>
              <div className="edu-score">CGPA: 8.86</div>
            </div>
            <div className="edu-card glass">
              <div className="edu-year">2020</div>
              <h3>Higher Secondary Certificate (HSC)</h3>
              <p>Vidhya Nikethan Matric Hr. Sec. School, Rasipuram</p>
              <div className="edu-score">Percentage: 78.16%</div>
            </div>
            <div className="edu-card glass">
              <div className="edu-year">2018</div>
              <h3>Secondary School Leaving Certificate (SSLC)</h3>
              <p>Vidhya Nikethan Matric Hr. Sec. School, Rasipuram</p>
              <div className="edu-score">Percentage: 77.40%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications">
        <div className="container">
          <div className="section-header">
            <h2>Certifications</h2>
            <div className="underline"></div>
          </div>
          <div className="cert-list">
            <div className="cert-item glass">Web Development – Qspider | 2024</div>
            <div className="cert-item glass">Cloud Computing – Wipro | 2023</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container footer-content">
          <div className="footer-info">
            <h2>Naveen Kumar A</h2>
            <p>Full Stack Developer | Namakkal, Tamil Nadu, India</p>
            <div className="contact-links">
              <a href="tel:+918610825251" className="contact-item">📞 +91 8610825251</a>
              <a href="mailto:naveenkumararunachalam97@gmail.com" className="contact-item">📧 naveenkumararunachalam97@gmail.com</a>
              <a href="https://www.linkedin.com/in/naveen-kumar-a-752103225" target="_blank" rel="noreferrer" className="contact-item">🔗 LinkedIn Profile</a>
            </div>
          </div>
          <div className="social-links">
            <div className="footer-badge glass">Willing to relocate</div>
            <div className="footer-badge glass">Quick Learner</div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Naveen Kumar A. Built with React & Passion.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
