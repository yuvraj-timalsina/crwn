import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductsProvider } from './contexts/products.context';
import { UserProvider } from './contexts/user.context';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);
reportWebVitals();
