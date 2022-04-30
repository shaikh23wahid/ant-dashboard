import { BellOutlined, CommentOutlined, GlobalOutlined, SearchOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Form, Menu, Dropdown, Avatar, Badge, Button, Input, Space, message } from 'antd';
import React, { useMemo } from 'react';
import './index.css';
const { Header } = Layout;

const PageTopHeader = () => {
    const userMenu = useMemo(() => {
        <Menu>
            <Menu.Item key="1">Profile Settings</Menu.Item>
            <Menu.Item key="2">Dashboard</Menu.Item>
            <Menu.Item key="3">Report</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">Logout</Menu.Item>
        </Menu>
    });

    const onSearch = (values) => {
        console.log(values);
        message.info(`Trying to search with ${JSON.stringify(values)}`);
    }

    return (
        <Header style={{ backgroundColor: "whie", border: 'none', maxHeight: '40px', lineHeight: 0 }}>
            <Row className="headerSearchRow">
                <Col span="16">
                    <Form
                        name="globalSearch_Form"
                        onFinish={onSearch}
                    >
                        <Form.Item
                            name="globalSearch"
                        >
                            <Input prefix={<SearchOutlined />}
                                placeholder="Type in to search" />
                        </Form.Item>
                    </Form>
                </Col>
                <Col span="8" style={{ textAlign: 'right' }}>
                    <Button type="text">+ Add</Button>
                    <Space>
                        <BellOutlined />
                        <Badge style={{ marginRight: '10px', backgroundColor: '#6AAEE2', color: 'white' }} size="small" count={2}><CommentOutlined style={{ marginRight: '10px' }} /></Badge>
                        <Badge style={{ backgroundColor: '#6AAEE2', color: 'white' }} size="small" count={5}><GlobalOutlined style={{ marginRight: '2px' }} /></Badge>
                    </Space>
                    <Dropdown.Button
                        style={{ position: 'relative', left: '-20px', top: '2px' }}
                        className="dropdown-btn"
                        overlay={userMenu}
                        icon={
                            <Avatar src='https://reqres.in/img/faces/10-image.jpg' icon={<UserOutlined style={{
                                fontSize: '28px',
                                backgroundColor: '#f0f0f0',
                                borderRadius: '50%',
                            }} />} />


                        }
                    >
                    </Dropdown.Button>
                </Col>
            </Row>
        </Header >
    )
}

export default PageTopHeader;