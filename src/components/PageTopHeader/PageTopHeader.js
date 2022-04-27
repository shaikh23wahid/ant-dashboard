import React from 'react'
import { Row, Col } from 'antd'

const PageTopHeader = () => {
    return (
        <Row>
            <Col span="12" offset={4}>
                Page Top Header Section Goes here!
            </Col>
            <Col span="6"> Header right section</Col>
        </Row>
    )
}

export default PageTopHeader;