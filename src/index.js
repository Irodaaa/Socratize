import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Routes, Router, Route} from "react-router-dom";
import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import App from './App';
import './i18n'



ReactDOM.render(
  <React.StrictMode>
          <App />
  </React.StrictMode>,
  document.getElementById('root')
);

