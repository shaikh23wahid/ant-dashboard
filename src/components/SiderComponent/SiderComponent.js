import { AntDesignOutlined, EyeOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Layout, Space } from 'antd';
import "antd/dist/antd.css";
import React from 'react';
import { Link } from 'react-router-dom';
import userPng from '../../assets/images/Wahid_Shaikh.jpg';
const { Sider } = Layout;

const SiderComponent = () => {
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
            <div className="profileSection">
                <Avatar
                    style={{ backgroundColor: 'ActiveBorder', marginBottom: '20px' }}
                    src={userPng}
                    size={{
                        xs: 24,
                        sm: 32,
                        md: 40,
                        lg: 64,
                        xl: 80,
                        xxl: 100,
                    }}
                    icon={<AntDesignOutlined />}
                />
                <div className="greeting">Hello,</div>
                <div className="userName mB_20">Wahid Shaikh</div>
                <Button type="primary" icon={<EyeOutlined />}>Live Metrics</Button>
            </div>
            <ul style={{ listStyle: 'none', textAlign: 'left', paddingTop: '20px'}}>
                <li style={{ paddingBottom: '10px' }}>
                    <Link to="/">Report</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </Sider >
    )
}

export default SiderComponent;