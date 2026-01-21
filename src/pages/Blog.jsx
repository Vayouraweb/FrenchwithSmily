import React from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';
import { images } from '../mockData';

const Blog = ({ content }) => {
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
            <h1 className="heading-hero mb-4">{content.blog.title}</h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              {content.blog.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pad-2xl" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.blog.posts.map((post, index) => (
                <div
                  key={post.id}
                  className="card hover-lift"
                  style={{
                    background: 'var(--bg-card)',
                    padding: '0',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Featured Image */}
                  <div
                    style={{
                      width: '100%',
                      height: '250px',
                      overflow: 'hidden',
                      background: 'var(--accent-grey-200)'
                    }}
                  >
                    <img
                      src={images.blog[index]}
                      alt={post.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Category Badge */}
                    <div
                      className="inline-flex items-center mb-3"
                      style={{
                        background: 'var(--accent-purple-200)',
                        borderRadius: '1rem',
                        padding: '0.25rem 0.75rem',
                        width: 'fit-content'
                      }}
                    >
                      <Tag size={12} style={{ marginRight: '0.5rem' }} />
                      <span className="caption font-mono" style={{ textTransform: 'uppercase', letterSpacing: '0.025em' }}>
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="heading-3 mb-3">{post.title}</h3>

                    {/* Excerpt */}
                    <p className="body-medium mb-4" style={{ color: 'var(--text-secondary)', flexGrow: 1 }}>
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center space-x-4" style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} style={{ color: 'var(--text-muted)' }} />
                        <span className="caption" style={{ color: 'var(--text-muted)' }}>
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} style={{ color: 'var(--text-muted)' }} />
                        <span className="caption" style={{ color: 'var(--text-muted)' }}>
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pad-2xl" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <div
            className="card text-center"
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              padding: '3rem 2rem',
              background: 'var(--accent-blue-200)'
            }}
          >
            <h2 className="heading-2 mb-4">Stay Updated</h2>
            <p className="body-large mb-6">
              Get weekly French learning tips, TCF preparation strategies, and PR guidance directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3" style={{ maxWidth: '500px', margin: '0 auto' }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="body-medium"
                style={{
                  flex: 1,
                  padding: '0.75rem 1.25rem',
                  border: '1px solid var(--border-input)',
                  borderRadius: '2rem',
                  background: 'var(--bg-card)',
                  color: 'var(--text-primary)'
                }}
              />
              <button className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
