import React from 'react';
import { Layout, Typography } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const Report = () => {
    return (
        <Content className='pageStyle'>
            <Title level={3}>Report Page!</Title>
        </Content>
    )
}

export default Report;