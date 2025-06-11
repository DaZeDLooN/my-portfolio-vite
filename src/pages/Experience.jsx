import AnimatedSection from '../components/AnimatedSection';
import PageWrapper from '../components/PageWrapper';
import '../styles/experience.css';

const experiences = [
  {
    role: '1. Software Development Intern',
    company: 'Mindstack Technologies',
    duration: 'May 2025 – Present',
    desc: 'Developed full-stack features using the MERN stack. Created reusable React components and optimized backend APIs.',
  },
  {
    role: '2. Artificial Intelligence Trainee',
    company: 'Corizo (Certified by Wipro DICE, MSME, ISO)',
    duration: 'August 2024 – September 2024',
    desc: 'Completed a 1-month intensive program covering ML algorithms, model evaluation, and neural networks using Python. Participated in live sessions and collaborative projects demonstrating innovation and consistency.',
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
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <span className="timeline-date">{exp.duration}</span>
                <p>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Experience;
