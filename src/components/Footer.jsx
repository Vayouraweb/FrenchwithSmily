import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

const Footer = ({ content }) => {
  return (
    <footer
      style={{
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--border-light)',
        padding: '3rem 0 1.5rem'
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="heading-3 font-mono mb-3">{content.siteName}</h3>
            <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
              {content.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="body-medium font-mono mb-3" style={{ fontWeight: '500' }}>
              {content.footer.quickLinks.title}
            </h4>
            <div className="flex flex-col space-y-2">
              {['/', '/about', '/services', '/blog', '/contact'].map((path, index) => (
                <Link
                  key={path}
                  to={path}
                  className="body-small hover-scale"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    display: 'inline-block',
                    width: 'fit-content'
                  }}
                >
                  {content.footer.quickLinks.links[index]}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="body-medium font-mono mb-3" style={{ fontWeight: '500' }}>
              {content.footer.services.title}
            </h4>
            <div className="flex flex-col space-y-2">
              {content.footer.services.links.map((link) => (
                <span
                  key={link}
                  className="body-small"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link}
                </span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="body-medium font-mono mb-3" style={{ fontWeight: '500' }}>
              {content.footer.connect.title}
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.instagram.com/smily._.verma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 body-small hover-scale"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  width: 'fit-content'
                }}
              >
                <Instagram size={18} />
                <span>{content.footer.connect.instagram}</span>
              </a>
              <a
                href="https://wa.me/17785224713"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 body-small hover-scale"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  width: 'fit-content'
                }}
              >
                <MessageCircle size={18} />
                <span>{content.footer.connect.whatsapp}</span>
              </a>
              <a
                href="mailto:Smilyverma149@gmail.com"
                className="flex items-center space-x-2 body-small hover-scale"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  width: 'fit-content'
                }}
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: '1.5rem',
            textAlign: 'center'
          }}
        >
          <p className="caption" style={{ color: 'var(--text-muted)' }}>
            {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;