import React from 'react';
import ReactDOM from 'react-dom';
import './output.css';
import { ThemeProvider } from './ThemeContext';

import App from './App';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
