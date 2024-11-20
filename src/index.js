import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import './i18n';

import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
