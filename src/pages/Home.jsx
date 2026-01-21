import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram, MessageCircle, Award, BookOpen, Globe2, CheckCircle, Play } from 'lucide-react';
import { images } from '../mockData';

const Home = ({ content }) => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open('https://wa.me/17785224713', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/smily._.verma', '_blank');
  };

  const handleReelClick = () => {
    window.open(content.instagram.reelLink, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center relative"
        style={{
          background: 'var(--gradient-hero-warm)',
          padding: '6rem 1.5rem 4rem'
        }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Announcement Badge */}
            <div
              className="inline-flex items-center space-x-2 mb-6"
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                borderRadius: '2rem',
                padding: '0.5rem 1.25rem',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)'
              }}
            >
              <Award size={16} style={{ color: 'var(--text-primary)' }} />
              <span className="caption font-mono" style={{ textTransform: 'uppercase', letterSpacing: '0.025em' }}>
                {content.hero.announcement}
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="heading-hero mb-6">{content.hero.title}</h1>

            {/* Hero Subtitle */}
            <p className="body-large mb-8" style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
              {content.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button onClick={handleWhatsApp} className="btn-primary">
                <MessageCircle size={18} style={{ marginRight: '0.5rem' }} />
                {content.hero.primaryCTA}
              </button>
              <button onClick={handleInstagram} className="btn-secondary">
                <Instagram size={18} style={{ marginRight: '0.5rem' }} />
                {content.hero.secondaryCTA}
              </button>
            </div>

            {/* Hero Image */}
            <div className="mt-12">
              <img
                src={images.hero[1]}
                alt="French Learning Guidance"
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  borderRadius: '0.75rem',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
                  margin: '0 auto',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Score Proof Section */}
      <section className="pad-2xl" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-1 mb-4">{content.scoreProof.title}</h2>
              <div
                className="inline-flex items-center space-x-2 mb-4"
                style={{
                  background: 'var(--accent-green-200)',
                  borderRadius: '2rem',
                  padding: '0.5rem 1.5rem'
                }}
              >
                <Award size={20} style={{ color: 'var(--text-primary)' }} />
                <span className="body-medium font-mono" style={{ fontWeight: '500' }}>
                  {content.scoreProof.subtitle}
                </span>
              </div>
              <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto' }}>
                {content.scoreProof.description}
              </p>
            </div>

            {/* Score Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {content.scoreProof.stats.map((stat, index) => (
                <div
                  key={index}
                  className="card text-center hover-lift"
                  style={{
                    background: 'var(--bg-card)',
                    padding: '2rem 1rem'
                  }}
                >
                  <div className="heading-2 mb-2" style={{ color: 'var(--text-primary)' }}>
                    {stat.score}
                  </div>
                  <div className="body-small font-mono" style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.025em' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pad-2xl" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-3">{content.services.title}</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              {content.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.services.items.map((service, index) => (
              <div
                key={service.id}
                className="card hover-lift"
                style={{
                  background: `var(--accent-${service.color}-200)`,
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '200px',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    marginBottom: '1.25rem'
                  }}
                >
                  <img
                    src={images.services[index]}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <h3 className="heading-3 mb-3">{service.title}</h3>
                <p className="body-medium mb-4" style={{ color: 'var(--text-secondary)', flexGrow: 1 }}>
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle size={16} style={{ color: 'var(--text-primary)', marginTop: '0.25rem', flexShrink: 0 }} />
                      <span className="body-small">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="btn-primary mt-4"
                  style={{ width: '100%' }}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Reel Section */}
      <section className="pad-2xl" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-1 mb-3">{content.instagram.title}</h2>
            <p className="body-large mb-6" style={{ color: 'var(--text-secondary)' }}>
              {content.instagram.subtitle}
            </p>
            <p className="body-medium mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
              {content.instagram.description}
            </p>

            {/* Instagram Preview Card */}
            <div
              className="card hover-lift"
              style={{
                maxWidth: '500px',
                margin: '0 auto',
                padding: '2rem',
                cursor: 'pointer',
                background: 'var(--bg-card)'
              }}
              onClick={handleReelClick}
            >
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  background: 'var(--accent-purple-200)',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={images.hero[0]}
                  alt="Instagram Preview"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '50%',
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)'
                  }}
                >
                  <Play size={32} style={{ color: 'white', marginLeft: '4px' }} />
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Instagram size={24} style={{ color: 'var(--text-primary)' }} />
                <span className="heading-3 font-mono">{content.instagram.handle}</span>
              </div>
              <button className="btn-primary" style={{ width: '100%' }}>
                {content.instagram.buttonText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pad-2xl" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-3">{content.testimonials.title}</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              {content.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.testimonials.items.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="card hover-lift"
                style={{
                  background: 'var(--bg-card)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginBottom: '1rem',
                    border: '3px solid var(--accent-green-200)'
                  }}
                >
                  <img
                    src={images.testimonials[index]}
                    alt={testimonial.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <h4 className="heading-3 mb-1">{testimonial.name}</h4>
                <div
                  className="inline-flex items-center mb-3"
                  style={{
                    background: 'var(--accent-green-200)',
                    borderRadius: '1rem',
                    padding: '0.25rem 0.75rem',
                    width: 'fit-content'
                  }}
                >
                  <span className="caption font-mono" style={{ fontWeight: '500' }}>
                    {testimonial.score}
                  </span>
                </div>
                <p className="body-medium" style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="pad-2xl" style={{ background: 'var(--bg-page)' }}>
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
            <h2 className="heading-1 mb-3">{content.booking.title}</h2>
            <p className="body-medium mb-2" style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>
              {content.booking.subtitle}
            </p>
            <p className="body-large mb-8" style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>
              {content.booking.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={handleWhatsApp} className="btn-primary">
                <MessageCircle size={18} style={{ marginRight: '0.5rem' }} />
                {content.booking.whatsappText}
              </button>
              <button onClick={handleInstagram} className="btn-secondary">
                <Instagram size={18} style={{ marginRight: '0.5rem' }} />
                {content.booking.instagramText}
              </button>
            </div>

            <div className="mt-6">
              <a
                href={`tel:${content.booking.phone}`}
                className="body-medium font-mono hover-scale"
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                {content.booking.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
