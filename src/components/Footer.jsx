import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Lionel Serrao. All rights reserved.</p>

      <div className="social-icons">
        <a href="mailto:lionelserrao1@gmail.com" title="Email">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="tel:+918296890044" title="Call">
          <i className="fas fa-phone"></i>
        </a>
        <a href="https://github.com/DaZeDLooN" target="_blank" rel="noopener noreferrer" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/lionel-serrao-bab94623b" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
