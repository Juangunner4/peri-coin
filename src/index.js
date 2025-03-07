import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';
import './i18n';
import ErrorBoundary from './components/ErrorBoundary';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
