import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Carousel, Divider, Col, Row  } from 'antd';
import './components/catalogo.js';
import { FacebookOutlined, YoutubeOutlined, TwitterSquareFilled } from '@ant-design/icons';
import catalogo from './components/catalogo.js';

const { Header, Content, Footer } = Layout;

const contentStyle = {
  height: '100%',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function App() {
  return (
    <Layout className="layout">
        <Header style={{ background: 'white', Align: 'right' }}>
          <div className="logo" /> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/404px-International_Pok%C3%A9mon_logo.svg.png" style={{ width: '125px', height: '50px' }} />
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{ float: 'right' }}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="1">Videogames</Menu.Item>
        <Menu.Item key="1">News</Menu.Item>
        </Menu>
          </Header>
          <Content style={{ padding: '0 100px', height: '100%', background: 'cornflowerblue ' }}>
      <div className="site-layout-content">
        <Layout className="site-layout-content5">
        <Divider orientation="left">Pokemon TCG</Divider>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle} >
                <img src="https://assets.pokemon.com/assets//cms2/img/trading-card-game/_tiles/tcgo/generic/tcgo-playmat-action-169-en.jpg" /></h3>
            </div>
            <div>
              <h3 style={contentStyle}> <img src="https://assets.pokemon.com/assets//cms2/img/trading-card-game/_tiles/swsh035/highlighted-cards/swsh035-card-highlights-169-en.jpg" /></h3>
            </div>
          </Carousel>
          <div> </div>
        </Layout>
      </div>
      <div className="site-layout-content">
        <Layout className="site-layout-content5">
          <Divider orientation="left">Featured pokemons</Divider>
          {catalogo()}
  

        </Layout>
      </div>
    </Content>
    <Footer><Divider orientation="left">The Pokemon Company. ©2020 Pokémon. TM, ®Nintendo.</Divider>
          <Row>
            <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
              <a href="https://twitter.com/pokemon"> <TwitterSquareFilled /> Twitter </a>
            </Col>
            <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
              <a href="https://web.facebook.com/Pok%C3%A9mon-103682847702080/?brand_redir=230809307041021"> <FacebookOutlined /> Facebook </a>
            </Col>
            <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>

            </Col>
            <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
              <a href="https://www.youtube.com/user/pokemon"> <YoutubeOutlined /> YouTube </a>
            </Col>
          </Row></Footer>
          
    </Layout>
);
  }

export default App;
