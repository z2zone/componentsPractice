import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NavigationProvider } from './Context/Navigation';

const rootElement = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(
    <NavigationProvider>
        <App/>
    </NavigationProvider>  
);