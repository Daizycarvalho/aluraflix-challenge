import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routes';
import { VideosProvider } from './context/Videos';

ReactDOM.render(
  <React.StrictMode>
    <VideosProvider>
      <AppRoutes />
    </VideosProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
