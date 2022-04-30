import { Badge, Layout, Space, Menu, Divider } from 'antd';
import "antd/dist/antd.css";
import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import navItems from '../../data/menu.json';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const SiderComponent = () => {
    const menuItems = navItems.items;

    return (
        <Sider style={{ backgroundColor: '#fff' }
        }>
            <div className="logo">
                <span className="title">Rideway</span>
                <Space>
                    <Badge
                        className="site-badge-count-109"
                        count="Test"
                        style={{ marginLeft: '10px', backgroundColor: '#6AAEE2' }}
                        size={{
                            xs: 24,
                            sm: 32,
                            md: 40,
                            lg: 64,
                            xl: 80,
                            xxl: 100,
                        }}
                    />
                </Space>
            </div>
            <UserProfile />
            <Divider />
            {menuItems && menuItems.length > 0 && (
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    {menuItems.map((item) => {
                        return <SubMenu key={item.key} title={<span>{item.text}</span>}>
                            {item.items.map((child) => {
                                // code to render child nav items
                                return <Menu.Item key={child.key}>
                                    {child.route
                                        ? (<Link to={`/${child.route}`}>{child.text}</Link>)
                                        : (<>{child.text}</>)}
                                </Menu.Item>
                            })}
                        </SubMenu>
                    })};
                </Menu>
            )};
        </Sider>
    )
}

export default SiderComponent;