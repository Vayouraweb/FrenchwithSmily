import React from 'react';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { images } from '../mockData';

const Services = ({ content }) => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/17785224713', '_blank');
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
            <h1 className="heading-hero mb-4">{content.services.title}</h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              {content.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="pad-2xl" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-12">
            {content.services.items.map((service, index) => (
              <div
                key={service.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                {/* Alternate layout */}
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <img
                        src={images.services[index]}
                        alt={service.title}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '0.75rem',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                    </div>
                    <div
                      className="card"
                      style={{
                        background: `var(--accent-${service.color}-200)`,
                        padding: '2rem'
                      }}
                    >
                      <h2 className="heading-2 mb-4">{service.title}</h2>
                      <p className="body-large mb-6" style={{ color: 'var(--text-secondary)' }}>
                        {service.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle
                              size={20}
                              style={{ color: 'var(--text-primary)', marginTop: '0.25rem', flexShrink: 0 }}
                            />
                            <span className="body-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button onClick={handleWhatsApp} className="btn-primary" style={{ width: '100%' }}>
                        <MessageCircle size={18} style={{ marginRight: '0.5rem' }} />
                        Book This Service
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="card"
                      style={{
                        background: `var(--accent-${service.color}-200)`,
                        padding: '2rem'
                      }}
                    >
                      <h2 className="heading-2 mb-4">{service.title}</h2>
                      <p className="body-large mb-6" style={{ color: 'var(--text-secondary)' }}>
                        {service.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle
                              size={20}
                              style={{ color: 'var(--text-primary)', marginTop: '0.25rem', flexShrink: 0 }}
                            />
                            <span className="body-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button onClick={handleWhatsApp} className="btn-primary" style={{ width: '100%' }}>
                        <MessageCircle size={18} style={{ marginRight: '0.5rem' }} />
                        Book This Service
                      </button>
                    </div>
                    <div>
                      <img
                        src={images.services[index]}
                        alt={service.title}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '0.75rem',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pad-2xl" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <div
            className="card text-center"
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              padding: '3rem 2rem',
              background: 'var(--gradient-hero-subtle)'
            }}
          >
            <h2 className="heading-1 mb-4">Ready to Get Started?</h2>
            <p className="body-large mb-8" style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>
              Book a free consultation to discuss which service is right for you.
            </p>
            <button onClick={handleWhatsApp} className="btn-primary">
              <MessageCircle size={18} style={{ marginRight: '0.5rem' }} />
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
