import { motion } from 'framer-motion';
import '../styles/skillbar.css';

const SkillBar = ({ skill, level }) => {
  return (
    <div className="skill-bar">
      <div className="skill-label">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="bar-background">
        <motion.div
          className="bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.2 }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
