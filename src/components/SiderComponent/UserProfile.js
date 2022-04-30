import React, { useState, useEffect } from 'react';
import { AntDesignOutlined, EyeOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { AuthentocationService } from '../service/AuthentocationService'

const UserProfile = () => {
    const objAuthentocationService = new AuthentocationService();
    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        async function fetchUserDetails() {
            const objUser = objAuthentocationService.getUserDatails();
            setUserDetails(JSON.parse(objUser));
        }

        fetchUserDetails();
    }, [])

    return (
        <div className="profileSection">
            {userDetails && (
                <>
                    <Avatar
                        style={{ backgroundColor: 'ActiveBorder', marginBottom: '20px' }}
                        src={userDetails?.avatar}
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
                    <div className="userName mB_20">{`${userDetails['first_name']} ${userDetails['last_name']}`}</div>
                    <Button type="primary" icon={<EyeOutlined />}>Live Metrics</Button>
                </>
            )}
        </div>
    )
}

export default UserProfile