import {
    CommentOutlined,
    MailOutlined
} from '@ant-design/icons';
import { Avatar, Divider, List } from "antd";
import React, { useCallback, useEffect, useState } from 'react';
import './index.css';
export const PAGE_SIZE = 2;

const AssignedPeople = (props) => {
    const { assignedPeople } = props;
    const [showMore, setShowMore] = useState(assignedPeople.length > PAGE_SIZE)
    const [peoples, setPeoples] = useState([])

    useEffect(() => {
        setPeoples(showMore ? assignedPeople.slice(0, PAGE_SIZE) : assignedPeople)
    }, [showMore])

    const handleToggleMore = useCallback(() => {
        setShowMore(!showMore)
    }, [showMore])

    return (
        <div className="assignedPeople">
            <span>Assigned people:</span>
            <List
                itemLayout="horizontal"
                dataSource={peoples}
                renderItem={person => (
                    <List.Item>
                        <List.Item.Meta
                            key={person.id}
                            avatar={<Avatar src={person.avatar} />}
                            title={<a href="https://ant.design">{`${person.first_name} ${person.last_name}`} <MailOutlined style={{ float: 'right' }} /> <CommentOutlined style={{ float: 'right', marginRight: '5px' }} /> </a>}
                        />
                    </List.Item>
                )}
            />
            {assignedPeople && assignedPeople.length > PAGE_SIZE && (
                <>
                    <Divider className="noMargin" />
                    <p className="loadMore" onClick={handleToggleMore}>{showMore ? `+ ${assignedPeople.length - PAGE_SIZE} more people` : `show less`}</p>
                </>
            )}
        </div>
    )
}

export default AssignedPeople