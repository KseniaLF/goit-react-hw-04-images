import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from 'components/Constants/GlobalStyle';
import { Layout } from 'components/Constants/Layout.styled';

import { App } from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Layout>
    <GlobalStyle />
    <App />
  </Layout>
  // </React.StrictMode>
);
