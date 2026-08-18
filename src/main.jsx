import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '24px', color: '#fff', backgroundColor: '#111216', minHeight: '100vh', fontFamily: 'sans-serif' }}>
          <h2 style={{ color: '#ff5823', fontSize: '20px' }}>Converte+</h2>
          <p style={{ marginTop: '12px', fontSize: '14px', color: '#ccc' }}>
            Recarregando a página com versão otimizada...
          </p>
          <button 
            onClick={() => window.location.reload()} 
            style={{ marginTop: '16px', padding: '12px 24px', background: '#ff5823', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold' }}
          >
            Atualizar Página
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
