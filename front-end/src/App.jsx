import React from 'react';
import { Layout } from 'antd';
import AppRouter from './router/router';
import Footer from './pages/footer/ViewFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.css';

const { Header, Content } = Layout;

const App = () => (
  <Layout>
    <Header className='header'>
      Header
    </Header>
    <Content className='content'>
      <AppRouter />
    </Content>
    <Footer className="footer"/>
  </Layout>
);

export default App;
