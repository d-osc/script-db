import { CreateStyle } from 'elit';

// Create our own style instance
const css = new CreateStyle();

// Flag to ensure styles are only initialized once
let stylesInitialized = false;

// Initialize all styles
export const initStyles = () => {
  if (stylesInitialized) return;
  stylesInitialized = true;

  // Global styles
  const style = document.createElement('style');
  style.textContent = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f5f5f5;
    }
  `;
  document.head.appendChild(style);

  // App container
  css.addClass('app-container', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
});

css.addClass('container', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px'
});

// Header & Navigation
css.addClass('header', {
  background: '#2c3e50',
  color: 'white',
  padding: '1rem 0',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
});

css.addClass('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1rem'
});

css.addClass('logo', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textDecoration: 'none',
  color: 'white'
});

css.addClass('nav-links', {
  display: 'flex',
  gap: '2rem',
  listStyle: 'none',
  flexWrap: 'wrap'
});

css.addClass('nav-link', {
  color: 'white',
  textDecoration: 'none',
  transition: 'opacity 0.2s',
  padding: '0.25rem 0'
});

css.addPseudoClass('hover', {
  opacity: 0.8
}, '.nav-link');

css.addClass('nav-link-active', {
  color: 'white',
  textDecoration: 'none',
  padding: '0.25rem 0',
  borderBottom: '2px solid white'
});

css.addPseudoClass('hover', {
  opacity: 0.8
}, '.nav-link-active');

// Main Content
css.addClass('main-content', {
  flex: 1,
  background: 'white',
  margin: '2rem auto',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '1200px',
  width: '100%'
});

css.addClass('page', {
  maxWidth: '100%'
});

// Page typography
css.addClass('page-h1', {
  color: '#2c3e50',
  marginBottom: '1rem',
  paddingBottom: '0.5rem',
  borderBottom: '3px solid #3498db'
});

css.addClass('page-h2', {
  color: '#2c3e50',
  marginTop: '2rem',
  marginBottom: '1rem'
});

css.addClass('page-h3', {
  color: '#34495e',
  marginTop: '1.5rem',
  marginBottom: '0.75rem'
});

css.addClass('page-p', {
  marginBottom: '1rem',
  lineHeight: 1.6
});

css.addClass('page-ul', {
  marginLeft: '2rem',
  marginBottom: '1rem'
});

css.addClass('page-li', {
  marginBottom: '0.5rem'
});

css.addClass('page-pre', {
  background: '#f4f4f4',
  border: '1px solid #ddd',
  borderLeft: '3px solid #3498db',
  color: '#333',
  fontFamily: "'Courier New', Courier, monospace",
  fontSize: '14px',
  lineHeight: 1.6,
  marginBottom: '1.6rem',
  maxWidth: '100%',
  overflow: 'auto',
  padding: '1rem',
  borderRadius: '4px'
});

css.addClass('page-code', {
  fontFamily: "'Courier New', Courier, monospace",
  background: '#f4f4f4',
  padding: '2px 6px',
  borderRadius: '3px',
  fontSize: '0.9em'
});

// Hero Section
css.addClass('hero', {
  textAlign: 'center',
  padding: '3rem 0'
});

css.addClass('hero-title', {
  fontSize: '3rem',
  border: 'none',
  marginBottom: '0.5rem'
});

css.addClass('subtitle', {
  fontSize: '1.25rem',
  color: '#666'
});

// Features Grid
css.addClass('features', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  margin: '3rem 0'
});

css.addClass('feature', {
  padding: '1.5rem',
  border: '1px solid #ddd',
  borderRadius: '8px',
  transition: 'transform 0.2s, box-shadow 0.2s'
});

css.addPseudoClass('hover', {
  transform: 'translateY(-4px)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
}, '.feature');

css.addClass('feature-h3', {
  marginTop: 0,
  marginBottom: '0.5rem'
});

// Section
css.addClass('section', {
  margin: '2rem 0'
});

// Footer
css.addClass('footer', {
  textAlign: 'center',
  padding: '2rem 0',
  color: '#666',
  background: '#f5f5f5',
  marginTop: 'auto'
});

// Tabs
css.addClass('tabs', {
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  borderBottom: '2px solid #e0e0e0'
});

css.addClass('tab', {
  padding: '0.75rem 1.5rem',
  background: 'transparent',
  border: 'none',
  borderBottom: '2px solid transparent',
  cursor: 'pointer',
  fontSize: '1rem',
  color: '#666',
  transition: 'all 0.2s',
  marginBottom: '-2px'
});

css.addPseudoClass('hover', {
  color: '#2c3e50',
  background: '#f5f5f5'
}, '.tab');

css.addClass('tab-active', {
  padding: '0.75rem 1.5rem',
  background: 'transparent',
  border: 'none',
  borderBottom: '2px solid #3498db',
  cursor: 'pointer',
  fontSize: '1rem',
  color: '#2c3e50',
  fontWeight: 'bold',
  marginBottom: '-2px'
});

css.addClass('tab-content', {
  marginTop: '1rem'
});

// Download Section
css.addClass('download-section', {
  textAlign: 'center',
  margin: '2rem 0'
});

css.addClass('download-button', {
  display: 'inline-block',
  background: '#27ae60',
  color: 'white',
  padding: '1rem 2rem',
  textDecoration: 'none',
  borderRadius: '8px',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  transition: 'all 0.3s',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
});

css.addPseudoClass('hover', {
  background: '#229954',
  transform: 'translateY(-2px)',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
}, '.download-button');

// Responsive styles
css.mediaMaxWidth('768px', {
  '.nav': {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  '.nav-links': {
    flexDirection: 'column',
    gap: '1rem',
    width: '100%'
  },
  '.hero-title': {
    fontSize: '2rem'
  },
  '.main-content': {
    margin: '1rem auto',
    padding: '1rem'
  },
  '.features': {
    gridTemplateColumns: '1fr'
  }
});

  // Inject styles into document
  css.inject('app-styles');
};

// Re-export styles from separate file to avoid circular dependency
export { styles } from './styleNames';
