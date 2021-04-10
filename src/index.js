import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rotas from './components/routes/Rotas';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';

ReactDOM.render(
  <ThemeProvider theme={theme} children={<Rotas/>} />,
  document.getElementById('root')
);