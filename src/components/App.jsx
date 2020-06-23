import React from 'react'
import {HashRouter,Link,Route} from "react-router-dom"
import Home from "@/components/Home"
import Movie from "@/components/Movie"
import About from "@/components/About"

import { Layout, Menu} from 'antd';
const { Header, Content, Footer,Sider } = Layout;
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
import Appcss from "@/css/app.scss"

export default class App extends React.Component {

    constructor() {
        super()
    }

    render() {
        return     <HashRouter>
        <Layout className="layout" style={{height:'100%'}}>
    <Header>
      <div className={Appcss.logo} />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.hash.split('/')[1]]}>
        <Menu.Item key="1"><Link to="/index">首页</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/movie/in_theaters/1">电影</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/about">关于</Link></Menu.Item>
      </Menu>
    </Header>
 
    <Content style={{background:'#fff',minHeight:'280px',flex:1}}>
        <Route path="/index" component={Home}></Route>
        <Route path="/movie" component={Movie}></Route>
        <Route path="/about" component={About}></Route>
</Content>

  
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
            </HashRouter>
        
    }

}

