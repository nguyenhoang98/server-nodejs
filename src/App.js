import { useState } from 'react';
import { menuRouters, menuPages } from './api/menuRouters';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import { Avatar, Button, Image, Layout, Menu, Popover } from 'antd';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

function App(props) {
  const [collapsed, setCollapsed] = useState(false);
  const showMenu = () => {
    return menuRouters.map((item) => {
      return (
        <Menu.Item key={item.path} icon={item.icon}>
          <Link to={item.path}> {item.label} </Link>
        </Menu.Item>
      );
    });
  };
  const showContent = () => {
    return menuPages.map((item) => {
      return (
        <Route
          path={item.path}
          element={item.component}
          exact={item.exact}
          key={item.path}
        />
      );
    });
  };
  const contentPopover = () => {
    return (
      <>
        <Button>
          <Link to='dang-nhap'>Đăng nhập</Link>
        </Button>
      </>
    );
  };
  return (
    <Router>
      <AuthContextProvider>
        <Layout className='h-100'>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={() => setCollapsed(!collapsed)}
          >
            <Menu theme='dark'>{showMenu()}</Menu>
          </Sider>
          <Content className='p-relative'>
            <Header className='header'>
              <div className='align-vertical'>
                <Image
                  src='https://baabrand.com/wp-content/uploads/2018/12/icon-thiet-ke-linh-vuc-logo-thuong-hieu-thoi-trang-my-pham-lam-dep-spa-baa-brand-1.png'
                  width={50}
                  height={50}
                />
              </div>
              <div className='align-horizontal'>
                <div className='header-name'>Nguyễn Văn Hoàng</div>
                <Popover content={contentPopover()}>
                  <Avatar src='https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-1/p240x240/182152998_1207350626372354_1314914554198212296_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=XwNdZR7uJgAAX_Hbrlp&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-s0bmsvpj-mJE6wtISxuDYNyPXnGygbn2eg80gpT6xfA&oe=61D086D1' />
                </Popover>
              </div>
            </Header>
            <Content>
              <Routes>{showContent()}</Routes>
            </Content>
            <Footer className='footer' style={footerStyle}>
              Footer
            </Footer>
          </Content>
        </Layout>
      </AuthContextProvider>
    </Router>
  );
}

const footerStyle = {
  background: 'black',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export default App;
