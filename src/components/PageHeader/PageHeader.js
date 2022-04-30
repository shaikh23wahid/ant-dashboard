import React from 'react'
import { Row, Col, Button, Space } from 'antd'
import {
    BellOutlined,
    AreaChartOutlined,
    AuditOutlined
} from '@ant-design/icons';

const PageHeader = () => {
    return (
        <Row style={{marginBottom: '20px'}}>
            <Col style={{ position: 'relative' }}>
                <Button size="large" type="primary" icon={
                    <BellOutlined />} ></Button>
                <div className="pageHeader pL_10">Live Alterts</div>
                <div className="pageSubHeading pL_10">Rideway | Export to Mail</div>
            </Col>
            <Col style={{ position: 'relative'}}>
                <Space>
                    <Button style={{float: 'right'}} shape="round" icon={<AuditOutlined />}>
                        Due Alerts
                    </Button>
                    <Button shape="round" icon={<AreaChartOutlined />}>
                        Live Alerts
                    </Button>
                </Space>
            </Col>
        </Row>
    )
}

export default PageHeader;