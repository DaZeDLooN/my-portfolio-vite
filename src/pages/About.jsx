import AnimatedSection from '../components/AnimatedSection';
import PageWrapper from '../components/PageWrapper';
import SkillBar from '../components/SkillBar';
import TechStack from '../components/TechStack';
import '../styles/page.css';


const skills = [
    { skill: 'HTML', level: 90 },
    { skill: 'CSS', level: 75 },
    { skill: 'JavaScript', level: 70 },
    { skill: 'React', level: 80 },
    { skill: 'Python', level: 70 },
    { skill: 'TensorFlow / PyTorch', level: 65 },
    { skill: 'Node.js', level: 20 },
    { skill: 'API / RESTful API Development', level: 70 },
    { skill: 'Machine Learning', level: 90 },
    { skill: 'Web Development', level: 75 },
    { skill: 'UI/UX Design', level: 70 },
    { skill: 'Data Analysis', level: 80 },
    { skill: 'Git / Version Control', level: 80 },
    { skill: 'SQL / NoSQL Databases', level: 60 },

];

const About = () => {
  return (
    <PageWrapper>
      <div className="page">
        <AnimatedSection>
            <h1>About Me</h1>
        </AnimatedSection>
        <AnimatedSection>
            <p>
            Hello there, I’m Lionel — a passionate developer with a strong focus on AI, web development,
            and interactive user experiences. I enjoy building intelligent systems, beautiful interfaces,
            and solving real-world problems through code.
            </p>
            <p style={{ marginTop: '1rem' }}>
            I’ve worked on projects ranging from facial emotion recognition to API-based joke generation,
            and I’m constantly learning and experimenting with new tools in the React and AI ecosystems.
            </p>
        </AnimatedSection>
        <h2 style={{ marginTop: '2rem', color: '#00d8ff' }}>Skills</h2>
        <div>
          {skills.map((item, idx) => (
            <SkillBar key={idx} skill={item.skill} level={item.level} />
          ))}
        </div>
        <a
        href="/LionelJSerrao_220968368_DSE.pdf"
        download
        className="resume-button"
        style={{ marginTop: '1.5rem', display: 'inline-block' }}
        >
        Resume
        </a>
        <TechStack />
      </div>
    </PageWrapper>
  );
};

export default About;
