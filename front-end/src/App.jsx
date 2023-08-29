import React from 'react';
import { Layout } from 'antd';
import AppRouter from './router/router';
import './assets/styles/global.css';
import './assets/styles/tables.css';

const { Header, Footer, Content } = Layout;

const App = () => (
  <Layout>
    <Header className='header'>
      Header
    </Header>
    <Content className='content'>
      <AppRouter />
    </Content>
    <Footer className='footer'>
      Footer
    </Footer>
  </Layout>
);

export default App;
