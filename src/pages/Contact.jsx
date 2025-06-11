// Add these imports
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PageWrapper from '../components/PageWrapper';
import '../styles/contact.css';
import '../styles/page.css';

const Contact = () => {
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  // Real-time validation
  useEffect(() => {
    const newErrors = {};
    if (!form.user_name.trim()) newErrors.user_name = 'Name is required';
    if (!form.user_email.includes('@')) newErrors.user_email = 'Valid email required';
    if (!form.message.trim()) newErrors.message = 'Message cannot be empty';
    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);
    emailjs
      .send(
        'service_xwwc9w9',
        'template_5q5ryeb',
        form,
        'ocF1zxTT8O5YIfuqI'
      )
      .then(() => {
        setLoading(false);
        alert('✅ Message sent successfully!');
        setForm({ user_name: '', user_email: '', message: '' });
      })
      .catch((error) => {
        setLoading(false);
        alert('❌ Error sending message: ' + error.text);
      });
  };

  return (
    <PageWrapper>
      <div className="contact-container">
        <AnimatedSection>
          <h1>Contact Me</h1>
        </AnimatedSection>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="user_name"
            value={form.user_name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          {errors.user_name && <span className="error">{errors.user_name}</span>}

          <input
            type="email"
            name="user_email"
            value={form.user_email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          {errors.user_email && <span className="error">{errors.user_email}</span>}

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            required
          />
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit" disabled={!isValid || loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default Contact;


