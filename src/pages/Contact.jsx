import React, { useState } from 'react';
import { MessageCircle, Instagram, Mail, Send } from 'lucide-react';

const Contact = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store in localStorage as mock
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    messages.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen" style={{ paddingTop: '5rem' }}>
      {/* Hero Section */}
      <section
        className="pad-2xl"
        style={{
          background: 'var(--gradient-hero-subtle)',
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-hero mb-4">{content.contact.title}</h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              {content.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="pad-2xl" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Methods */}
              <div>
                <h2 className="heading-2 mb-6">Quick Connect</h2>
                <div className="space-y-4">
                  {content.contact.methods.map((method, index) => {
                    const iconMap = {
                      'WhatsApp': MessageCircle,
                      'Email': Mail,
                      'Instagram': Instagram
                    };
                    const Icon = iconMap[method.type];
                    
                    const linkMap = {
                      'WhatsApp': 'https://wa.me/17785224713',
                      'Email': 'mailto:Smilyverma149@gmail.com',
                      'Instagram': 'https://www.instagram.com/smily._.verma'
                    };
                    const link = linkMap[method.type];

                    const colorMap = {
                      'WhatsApp': 'var(--accent-green-200)',
                      'Email': 'var(--accent-blue-200)',
                      'Instagram': 'var(--accent-pink-200)'
                    };

                    return (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card hover-lift"
                        style={{
                          background: colorMap[method.type],
                          padding: '1.5rem',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '1rem',
                          textDecoration: 'none',
                          color: 'inherit'
                        }}
                      >
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: 'var(--bg-card)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <Icon size={24} style={{ color: 'var(--text-primary)' }} />
                        </div>
                        <div>
                          <h3 className="heading-3 mb-1">{method.type}</h3>
                          <p className="body-medium mb-2" style={{ fontWeight: '500' }}>
                            {method.value}
                          </p>
                          <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                            {method.description}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Additional Info */}
                <div
                  className="card mt-6"
                  style={{
                    background: 'var(--accent-blue-200)',
                    padding: '1.5rem'
                  }}
                >
                  <h3 className="heading-3 mb-3">Response Time</h3>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    I typically respond within 24 hours on weekdays. For urgent queries, WhatsApp is the fastest way to reach me.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div
                  className="card"
                  style={{
                    background: 'var(--bg-card)',
                    padding: '2rem'
                  }}
                >
                  <h2 className="heading-2 mb-6">{content.contact.formTitle}</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="body-medium" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                        {content.contact.formFields.name}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="body-medium"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          border: '1px solid var(--border-input)',
                          borderRadius: '0.5rem',
                          background: 'var(--bg-page)',
                          color: 'var(--text-primary)'
                        }}
                      />
                    </div>

                    <div>
                      <label className="body-medium" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                        {content.contact.formFields.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="body-medium"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          border: '1px solid var(--border-input)',
                          borderRadius: '0.5rem',
                          background: 'var(--bg-page)',
                          color: 'var(--text-primary)'
                        }}
                      />
                    </div>

                    <div>
                      <label className="body-medium" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                        {content.contact.formFields.subject}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="body-medium"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          border: '1px solid var(--border-input)',
                          borderRadius: '0.5rem',
                          background: 'var(--bg-page)',
                          color: 'var(--text-primary)'
                        }}
                      />
                    </div>

                    <div>
                      <label className="body-medium" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                        {content.contact.formFields.message}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="body-medium"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          border: '1px solid var(--border-input)',
                          borderRadius: '0.5rem',
                          background: 'var(--bg-page)',
                          color: 'var(--text-primary)',
                          resize: 'vertical',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                      <Send size={18} style={{ marginRight: '0.5rem' }} />
                      {content.contact.formFields.submit}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
