import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Router wrapping
import { LoaderProvider } from './components/contexts/LoaderContext'; // Your loader context provider
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoaderProvider>
      <Router> 
        <App />
      </Router>
    </LoaderProvider>
  </StrictMode>
);
