import '../styles/techstack.css';

// ✅ Updated import paths
import cssIcon from '../assets/icons/css.svg';
import gitIcon from '../assets/icons/git.svg';
import htmlIcon from '../assets/icons/html5.svg';
import jsIcon from '../assets/icons/javascript.svg';
import mongoIcon from '../assets/icons/mongodb.svg';
import mysqlIcon from '../assets/icons/mysql.svg';
import nodeIcon from '../assets/icons/nodedotjs.svg';
import pythonIcon from '../assets/icons/python.svg';
import reactIcon from '../assets/icons/react.svg';
import tfIcon from '../assets/icons/tensorflow.svg';
import viteIcon from '../assets/icons/vite.svg';
import yarnIcon from '../assets/icons/yarn.svg';

const techs = [
  { name: 'CSS', icon: cssIcon },
  { name: 'HTML', icon: htmlIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'React', icon: reactIcon },
  { name: 'TensorFlow', icon: tfIcon },
  { name: 'MongoDB', icon: mongoIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'Vite', icon: viteIcon },
  { name: 'Yarn', icon: yarnIcon },
  { name: 'Git', icon: gitIcon },
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

