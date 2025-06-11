import '../styles/techstack.css';

const techs = [
  { name: 'CSS', icon: '/assets/css.svg' },
  { name: 'HTML', icon: '/assets/html5.svg' },
  { name: 'JavaScript', icon: '/assets/javascript.svg' },
  { name: 'Node.js', icon: '/assets/nodedotjs.svg' },
  { name: 'Python', icon: '/assets/python.svg' },
  { name: 'React', icon: '/assets/react.svg' },
  { name: 'TensorFlow', icon: '/assets/tensorflow.svg' },
  { name: 'MongoDB', icon: '/assets/mongodb.svg' },
  { name: 'MySQL', icon: '/assets/mysql.svg' },
  { name: 'Vite', icon: '/assets/vite.svg' },
  { name: 'Yarn', icon: '/assets/yarn.svg' },
  { name: 'Git', icon: '/assets/git.svg' },
];

const TechStack = () => {
  return (
    <section className="tech-section">
      <h2>My Tech Stack</h2>
      <div className="tech-grid">
        {techs.map((tech, index) => (
          <div key={index} className="tech-card">
            <img src={tech.icon} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
