import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// "eslint": "7.19.0",
// "eslint-config-prettier": "^8.3.0",
// "eslint-config-standard": "16.0.3",
// "eslint-plugin-import": "2.25.3",
// "eslint-plugin-node": "^11.1.0",
// "eslint-plugin-promise": "5.2.0",
