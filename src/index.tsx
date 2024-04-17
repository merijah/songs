import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
    theme={{ 
      token: { 
        colorPrimary: '#038cfc', 
        colorBorder: '#00b96b', 
      }, 
    }}>
      <App />
    </ConfigProvider>
      
  </React.StrictMode>
);
reportWebVitals();
