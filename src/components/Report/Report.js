import 'ant-design-pro/dist/ant-design-pro.css';
import { Col, Layout, Row } from "antd";
import "antd/dist/antd.css";
import React from "react";
import PageHeader from '../PageHeader/PageHeader';
import TabsComponent from '../Tabs/TabsComponent';

const { Content } = Layout;

const Report = () => {
    return (
        <Content style={{ backgroundColor: "white", padding: '20px' }}>
            <PageHeader />
            <Row>
                <Col span={24}>
                    <TabsComponent />
                </Col>
            </Row>
        </Content>
    )
}

export default Report;