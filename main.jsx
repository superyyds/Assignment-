import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import App from './App.jsx';

const rootElement = document.getElementById('root');

// Create a root using createRoot from react-dom/client
const root = createRoot(rootElement);

// Use the render method on the created root to render your App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

