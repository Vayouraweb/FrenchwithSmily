import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Header = ({ language, onLanguageChange, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: content.navigation.home, path: '/' },
    { label: content.navigation.about, path: '/about' },
    { label: content.navigation.services, path: '/services' },
    { label: content.navigation.blog, path: '/blog' },
    { label: content.navigation.contact, path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md' : 'bg-transparent'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(8px)' : 'none'
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-scale">
            <div className="heading-2 font-mono" style={{ color: 'var(--text-primary)' }}>
              {content.siteName}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="body-medium font-mono"
                style={{
                  color: location.pathname === item.path ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  fontWeight: location.pathname === item.path ? '500' : '400'
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onLanguageChange}
              className="btn-secondary"
              style={{ padding: '0.5rem 1rem', minHeight: '2rem' }}
            >
              <Globe size={16} style={{ marginRight: '0.5rem' }} />
              {content.navigation.languageToggle}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)'
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden"
          style={{
            background: 'var(--bg-card)',
            borderTop: '1px solid var(--border-light)',
            padding: '1rem'
          }}
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="body-medium font-mono"
                style={{
                  color: location.pathname === item.path ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  padding: '0.5rem 0'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                onLanguageChange();
                setIsMobileMenuOpen(false);
              }}
              className="btn-secondary"
              style={{ width: '100%' }}
            >
              <Globe size={16} style={{ marginRight: '0.5rem' }} />
              {content.navigation.languageToggle}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;