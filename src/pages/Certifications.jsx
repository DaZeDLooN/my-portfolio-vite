import AnimatedSection from '../components/AnimatedSection';
import PageWrapper from '../components/PageWrapper';
import ProjectCard from '../components/ProjectCard'; // same card used for uniformity
import '../styles/page.css';

const certifications = [
    {
        title: 'Introduction to Networks',
        description: 'Cisco Networking Academy',
        image: '/assets/certificates/cisco.svg',
        link: 'https://coursera.org/verify/your-deeplearning-cert',
    },
    {
        title: 'Switching, Routing and Wireless Essentials',
        description: 'Cisco Networking Academy',
        image: '/assets/certificates/cisco.svg',
        link: 'https://udemy.com/certificate/your-mern-cert',
    },
    {
        title: 'Enterprise Networking, Security and Automation',
        description: 'Cisco Networking Academy',
        image: '/assets/certificates/cisco.svg',
        link: 'https://your-genai-certificate-link.com',
    },
    {
        title: 'Introduction to Cybersecurity',
        description: 'Cisco Networking Academy',
        image: '/assets/certificates/cisco.svg',
        link: 'https://your-ai-foundation-certificate-link.com',
    },
    {
        title: 'Cybersecurity Essentials',
        description: 'Cisco Networking Academy',
        image: '/assets/certificates/cisco.svg',
        link: 'https://your-ai-foundation-certificate-link.com',
    },
    {
        title: 'Python for Data Science, AI & Development ',
        description: 'IBM Skills Network',
        image: '/assets/certificates/ibm.svg',
        link: 'https://www.coursera.org/account/accomplishments/certificate/your-python-data-science-cert',
    },
    {
        title: 'Python Essentials 1',
        description: 'Cisco Networking Academy',
        image: '/assets/certificates/cisco.svg',
        link: 'https://www.coursera.org/account/accomplishments/specialization/your-python-everybody-cert',
    },
    {
        title: 'Python Essentials 2',
        description: 'Cisco Networking Academy',
        image: '/assets/certificates/cisco.svg',
        link: 'https://www.coursera.org/account/accomplishments/specialization/your-python-everybody-cert',
    },
];

const Certifications = () => {
  return (
    <PageWrapper>
      <div className="page">
        <AnimatedSection>
          <h1>Certifications</h1>
        </AnimatedSection>
        <div className="project-grid">
          {certifications.map((cert, index) => (
            <ProjectCard
              key={index}
              title={cert.title}
              description={cert.description}
              image={cert.image}
              link={cert.link}
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Certifications;
