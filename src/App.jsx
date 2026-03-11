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
            <p className="hero-p">Full Stack Developer with 1 year of experience in building and maintaining web applications using React, JavaScript, and Node.js. Skilled in frontend development, API integration, database management, and cloud deployment.</p>
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
              <p>Passionate about writing clean, maintainable code and continuously improving technical skills. I specialize in building responsive web applications and integrating them with robust backend services.</p>
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
              <div className="time-period">April 2025 – Present</div>
              <h3>Full Stack Developer</h3>
              <h4 className="company">Jothi Software Private Limited, Chennai</h4>
              <ul>
                <li>Developed and maintained responsive web applications using React, HTML, CSS, and JavaScript.</li>
                <li>Integrated frontend components with backend services using Node.js.</li>
                <li>Managed application data using MySQL, performing CRUD operations and optimizing queries.</li>
                <li>Deployed, tested, and monitored applications on AWS for high availability.</li>
                <li>Collaborated with senior developers to debug and resolve complex issues.</li>
                <li>Used Git and Sourcetree for robust version control and team collaboration.</li>
              </ul>
            </div>
            <div className="timeline-item glass">
              <div className="time-period">Jan 2025 – Mar 2025</div>
              <h3>Software Development Intern</h3>
              <h4 className="company">KY Technologies</h4>
              <p>Gained practical experience in real-time projects and team collaboration, focusing on the software development lifecycle and foundational web technologies.</p>
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
                <span>Node.js</span> <span>TypeScript</span> <span>SQL / MySQL</span>
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
                  <span className="project-link">AWS Deployed</span>
                </div>
                <p>Built a robust web-based system for tracking stock levels, restocking alerts, and generating detailed reports.</p>
                <div className="project-details">
                  <ul>
                    <li>Implemented core features for real-time inventory tracking and restocking logic.</li>
                    <li>Optimized database queries for 30% faster data retrieval.</li>
                    <li>Integrated full CRUD operations for book records and supplier management.</li>
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
            <div className="cert-item glass">Web Development</div>
            <div className="cert-item glass">Cloud Computing</div>
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
