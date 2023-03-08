import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from 'constants/GlobalStyle';
import { Layout } from 'constants/Layout.styled';

import { App } from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Layout>
    <GlobalStyle />
    <App />
  </Layout>
  // </React.StrictMode>
);
