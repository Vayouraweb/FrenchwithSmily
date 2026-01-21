import React from 'react';
import { Award, Users, Target, Trophy } from 'lucide-react';
import { images } from '../mockData';

const About = ({ content }) => {
  const iconMap = {
    0: Award,
    1: Users,
    2: Target,
    3: Trophy
  };

  return (
    <div className="min-h-screen" style={{ paddingTop: '5rem' }}>
      {/* Hero Section */}
      <section
        className="pad-2xl"
        style={{
          background: 'var(--gradient-hero-subtle)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-hero mb-4">{content.about.title}</h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              {content.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="pad-2xl" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div>
                <img
                  src={images.about}
                  alt="Smily Verma"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '0.75rem',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </div>

              {/* Story Text */}
              <div>
                {content.about.story.map((paragraph, index) => (
                  <p
                    key={index}
                    className="body-large mb-6"
                    style={{ color: 'var(--text-primary)', lineHeight: '1.8' }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pad-2xl" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <div
            className="card text-center"
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              padding: '3rem 2rem',
              background: 'var(--accent-blue-200)'
            }}
          >
            <h2 className="heading-2 mb-4">Mission</h2>
            <p className="body-large" style={{ fontStyle: 'italic' }}>
              {content.about.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="pad-2xl" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-1 text-center mb-12">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.about.achievements.map((achievement, index) => {
                const Icon = iconMap[index];
                return (
                  <div
                    key={index}
                    className="card hover-lift"
                    style={{
                      background: 'var(--bg-card)',
                      padding: '1.5rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem'
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'var(--accent-purple-200)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Icon size={24} style={{ color: 'var(--text-primary)' }} />
                    </div>
                    <p className="body-medium" style={{ paddingTop: '0.5rem' }}>
                      {achievement}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
