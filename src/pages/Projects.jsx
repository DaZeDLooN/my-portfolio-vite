import AnimatedSection from '../components/AnimatedSection';
import PageWrapper from '../components/PageWrapper';
import ProjectCard from '../components/ProjectCard';
import '../styles/page.css';

const projects = [
  {
    title: '1. Mood-Based Music Recommender System',
    description: 'Recommends music based on user mood using advanced ML & DL techniques.',
    link: 'https://github.com/DaZeDLooN/Mini-Projects',
    demo: 'https://music-recommender.vercel.app/',
    tags: ['Deep Learning', 'Vite', 'Yarn', 'TensorFlow', 'Keras'],
    image: '/assets/projects/music.svg',
  },
  {
    title: '2. Multi-Purpose FAQ Chatbot',
    description: 'A versatile chatbot built with advanced NLP techniques to answer FAQs across various domains.',
    link: 'https://github.com/DaZeDLooN/AI-Chatbot/tree/main/Philips',
    demo: 'https://faq-chatbot.vercel.app/',
    tags: ['NLP', 'Fetch API', 'Streamlit', 'Python', 'OpenAI'],
    image: '/assets/projects/chatbot.svg',
  },
  {
    title: '3. Joke Generator Web App ',
    description: 'Built an interactive joke app using public APIs with support for random and user-submitted jokes, dynamic rendering, and external link integration.',
    link: 'https://github.com/DaZeDLooN/NLP-Project/tree/main/jokesAPI',
    demo: 'https://joke-generator.vercel.app/',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST API', 'DOM Manipulation'],
    image: '/assets/projects/joke.svg',
  },
];


const Projects = () => {
  return (
    <PageWrapper>
      <div className="page">
        <AnimatedSection>
          <h1>My Projects</h1>
        </AnimatedSection>
        <div className="project-grid">
          {projects.map((proj, index) => (
            <AnimatedSection key={index}>
              <ProjectCard
                title={proj.title}
                description={proj.description}
                link={proj.link}
                demo={proj.demo}
                image={proj.image}
                tags={proj.tags}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;

