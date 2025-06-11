import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import '../styles/notfound.css';

const NotFound = () => {
  return (
    <PageWrapper>
      <div className="notfound-container">
        <img src="/assets/404.svg" alt="404 Illustration" className="notfound-img" />
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="back-home">← Go Back Home</Link>
      </div>
    </PageWrapper>
  );
};

export default NotFound;

