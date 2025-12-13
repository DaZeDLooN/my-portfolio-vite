import AnimatedSection from '../components/AnimatedSection';
import PageWrapper from '../components/PageWrapper';
import '../styles/experience.css';

const experiences = [
  {
    role: '1. Frontend Web Development Intern',
    company: 'Mindstack Technologies',
    duration: 'May 2025 – August 2025',
    desc: 'Built and enhanced full-stack features using the MERN stack across multiple live projects. Implemented robust form handling with Formik and Yup, resolving validation bugs and enforcing schema rules. Refactored and optimized React components for better usability and maintainability. Developed a dynamic theme toggle system based on user/client intent, and contributed to mobile-responsive UI/UX enhancements.',
    logo: '/logos/mindstack-logo.jpeg',
  },
  {
    role: '2. Artificial Intelligence Trainee',
    company: 'Corizo (Certified by Wipro DICE, MSME, ISO)',
    duration: 'August 2024 – September 2024',
    desc: 'Completed a 1-month intensive program covering ML algorithms, model evaluation, and neural networks using Python. Participated in live sessions and collaborative projects demonstrating innovation and consistency.',
    logo: '/logos/corizo-logo.png',
  },
];

const Experience = () => {
  return (
    <PageWrapper>
      <div className="page">
        <AnimatedSection>
          <h1>Experience</h1>
        </AnimatedSection>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content-with-logo">
                <div className="timeline-text">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <span className="timeline-date">{exp.duration}</span>
                  <p>{exp.desc}</p>
                </div>
                <div className="timeline-logo">
                  <img src={exp.logo} alt={`${exp.company} logo`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Experience;
