import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ info });
    console.error('[ErrorBoundary] Caught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          background: '#030306',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          color: '#f8fafc',
          padding: '2rem',
          gap: '1rem'
        }}>
          <div style={{ color: '#ff6b35', fontSize: '2rem', fontWeight: 'bold' }}>⚠ RENDER ERROR</div>
          <div style={{ color: '#94a3b8', fontSize: '0.875rem', maxWidth: '800px', textAlign: 'center' }}>
            {this.state.error?.message}
          </div>
          <pre style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            padding: '1rem',
            fontSize: '0.75rem',
            color: '#94a3b8',
            overflow: 'auto',
            maxWidth: '90vw',
            maxHeight: '50vh'
          }}>
            {this.state.info?.componentStack}
          </pre>
          <button
            onClick={() => this.setState({ hasError: false, error: null, info: null })}
            style={{
              background: '#6d28d9',
              color: 'white',
              border: 'none',
              borderRadius: '999px',
              padding: '0.5rem 1.5rem',
              cursor: 'pointer',
              fontFamily: 'monospace',
              fontWeight: 'bold'
            }}
          >
            RETRY
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
