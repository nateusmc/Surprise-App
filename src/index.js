import React from 'react';
import ReactDOM from 'react-dom';
import Surprise from './components/Surprise';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Surprise />,
  document.getElementById('root')
);
registerServiceWorker();