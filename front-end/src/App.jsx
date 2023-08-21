import React from 'react';
import { Layout } from 'antd';
import AppRouter from './router/router';

const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const App = () => (
  <Layout>
    <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>
        <div className="App">
          <AppRouter />
        </div>
      </Content>
    <Footer style={footerStyle}>Footer</Footer>
  </Layout>
);

export default App;
