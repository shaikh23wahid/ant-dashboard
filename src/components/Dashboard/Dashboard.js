import {
    AreaChartOutlined, ArrowDownOutlined, ArrowUpOutlined, AuditOutlined, CheckOutlined, ExclamationOutlined
} from '@ant-design/icons';
import { Avatar, Button, Card, Col, Divider, Image, Layout, Row, Space, Tabs, Typography } from "antd";
import React, { useMemo, useState } from 'react';
import banner from '../../assets/images/img_nature.jpg';
import inVisionAvatar from '../../assets/images/inVission.png';
import payPalAvatar from '../../assets/images/paypal.jpg';
import vimeoAvatar from '../../assets/images/vimeo.png';
import posts from '../../data/posts.json';
import PageHeader from '../PageHeader/PageHeader';
import AssignedPeople from './AssignedPeople';
import './index.css';

const { Content } = Layout;
const { TabPane } = Tabs;
const { Text, Link, Title } = Typography;

const Dashboard = () => {
    const [postList] = useState(posts.orgDetails)

    const getImage = (post) => {
        switch (post) {
            case 101:
                return vimeoAvatar;
            case 102:
                return inVisionAvatar;
            case 103:
                return payPalAvatar;
            default:
                return vimeoAvatar;
        }
    }

    const activeReportStats = useMemo(() => [
        {
            id: 1,
            name: 'Performed Operations',
            count: 24,
            status: 'up',
            percentageText: '23% percent increase',
            desc: 'in progress'
        },
        {
            id: 2,
            name: 'Progressive Impact',
            count: 11,
            status: 'down',
            percentageText: '4 leeds less',
            desc: 'then last week'
        },
        {
            id: 2,
            name: 'Market Progress',
            count: 97,
            status: 'down',
            percentageText: '3.25% less',
            desc: 'then last date'
        },
        {
            id: 2,
            name: 'Active Hotpoints',
            count: 78,
            status: 'down',
            percentageText: '4 new points',
            desc: 'added since yesterday'
        },
    ], []);

    return (
        <Content style={{ backgroundColor: "#F6F8FC", padding: '20px' }}>
            <PageHeader />
            <Row>
                <Col span={24}>
                    <Tabs defaultActiveKey="1" style={{ marginBottom: 32 }}>
                        <TabPane tab="Active Reports" key="1">
                            <Row>
                                <Col xs={24} xl={24}>
                                    <div className="example">
                                        <Image src={banner} height="70px" width="1040px" />
                                        <div className="overlay">
                                            Alerts Filtered by: An Enterprise |
                                        </div>
                                        <div className="actions">
                                            <Space>
                                                <Button shape="round" icon={<AuditOutlined />} size="small">
                                                    Due Alerts
                                                </Button>
                                                <Button type="primary" shape="round" icon={<AreaChartOutlined />} size="small">
                                                    Generate Reports
                                                </Button>
                                            </Space>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            {activeReportStats && activeReportStats.length > 0 && (
                                <Row>
                                    {activeReportStats.map((stats, index) => {
                                        return <Col sm={24} xs={18} xl={6} md={12} key={index}>
                                            <div style={{ margin: '10px' }} className="tiles tiles-center">
                                                <Card style={{ height: '150px', maxHeight: '150px' }}>
                                                    <h1>{stats.name}</h1>
                                                    <h1>{stats.count}</h1>
                                                    <div style={{ fontSize: '12px' }}>
                                                        {stats.status === 'up'
                                                            ? (
                                                                <Link href="#" target="_blank">
                                                                    <ArrowDownOutlined /> {stats.percentageText}
                                                                </Link>
                                                            ) : (<Text type="danger">
                                                                <ArrowUpOutlined /> {stats.percentageText}
                                                            </Text>)}&nbsp;{stats.desc}
                                                    </div>
                                                </Card>
                                            </div>
                                        </Col>
                                    })}
                                </Row>
                            )}
                            {postList && postList.length > 0 && (
                                <Row>
                                    {postList.map((post, index) => {
                                        return <Col sm={24} xl={8} md={16} key={`${post.id}_${index}`}>
                                            <div className="tiles_M">
                                                <Card>
                                                    <div style={post?.action?.type === "checked" ? { backgroundColor: 'white', color: 'black' } : {}} className="Row cardHeader">
                                                        <div className="cardIcon">
                                                            <Avatar style={{ backgroundColor: post?.action?.type === "alert" ? '#F87E8B' : '#669DFE' }} size="small"
                                                                icon={post?.action?.type === "alert" ? <ExclamationOutlined /> : <CheckOutlined />} />
                                                        </div>
                                                        <div className="cardHeaderContent">
                                                            <div className="cardTitle">{post?.action?.title}</div>
                                                            <div className="checkout">
                                                                {post?.action?.updated}
                                                            </div>
                                                        </div>
                                                        <Button className={post?.action?.type === "alert" ? "action" : "defaultAction"} size="small">
                                                            View Alerts
                                                        </Button>
                                                    </div>
                                                    <div className="cardInnerContentPanel">
                                                        <Row>
                                                            <Col span="8">
                                                                <Avatar
                                                                    style={{ margin: '20px', display: 'inline-block' }}
                                                                    src={getImage(post.id)}
                                                                    size={{
                                                                        xs: 24,
                                                                        sm: 32,
                                                                        md: 40,
                                                                        lg: 64,
                                                                        xl: 80,
                                                                        xxl: 100,
                                                                    }}
                                                                />
                                                            </Col>
                                                            <Col span="16" style={{ padding: '20px', textAlign: 'left' }}>
                                                                <div className="organizationSection">
                                                                    <Title level={5}>{post.name}</Title>
                                                                    <Link href={`${post.website}`} target="_blank">
                                                                        {post.website}
                                                                    </Link>
                                                                    <Text >
                                                                        {post.email}
                                                                    </Text>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Divider style={{ margin: '10px 0' }} />
                                                        <Row>
                                                            <Col span="24">
                                                                <AssignedPeople assignedPeople={post.assignedPeople} />
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Card>
                                            </div>
                                        </Col>
                                    })}
                                </Row>
                            )}
                        </TabPane>
                        <TabPane tab="Calender" key="2">
                            Content of Calender
                        </TabPane>
                        <TabPane tab="Recent Reports" key="3">
                            Content of Recent Reports
                        </TabPane>
                        <TabPane tab="Live Stats" key="4">
                            Content of Live Stats
                        </TabPane>
                        <TabPane tab="Export Reports" key="5">
                            Content of Export Reports
                        </TabPane>
                        <TabPane tab="Flagged" key="6">
                            Content of Flagged
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </Content>
    )
}

export default Dashboard;