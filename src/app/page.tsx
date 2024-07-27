'use client';

import React from 'react';
import { Card, Layout, Menu, Space, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';

const { Header, Content, Footer } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items} style={{ flex: 1, minWidth: 0 }} />
      </Header>

      <Layout style={{ padding: '24px 48px' }}>
        <Sider style={{ marginRight: '24px' }}></Sider>

        <Content>
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </div>
        </Content>

        <div>
          <Card style={{ width: 200, height: 100 }}></Card>

          <Card style={{ width: 200, height: 300 }}></Card>
        </div>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;