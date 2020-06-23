import React from 'react'
import {HashRouter,Link,Route,Switch} from "react-router-dom"
import { Layout, Menu} from 'antd';
const { Sider,Content } = Layout;
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
import MovieList from "@/components/MovieList"
import MovieDetail from "@/components/MovieDetail"
export default class  extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <Layout style={{height:'100%'}}>
            <Sider width={200} className="site-layout-background">
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                 <Menu.Item key="1"><Link to="/movie/in_theaters/1">正在上映</Link></Menu.Item>
                 <Menu.Item key="2"><Link to="/movie/coming_soon/1">即将上映</Link></Menu.Item>
                 <Menu.Item key="3"><Link to="/movie/top250/1">top250</Link></Menu.Item>
                </Menu>
              </Sider>
            
              <Content style={{background:'#fff',minHeight:'280px',flex:1}}>
             <Switch>
             <Route exact path="/movie/detail/:id" component={MovieDetail}></Route>
             <Route exact path="/movie/:type/:page" component={MovieList}></Route>
              </Switch>
              </Content>


            </Layout>
        )
    }

}