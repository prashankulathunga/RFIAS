import {Card, Space, Typography} from "antd";
import {HiUserGroup} from "react-icons/hi";
import React from "react";

function DefaultCard(props) {

    const {count, title, icon} = props;

    return (
        <>

            <Card className='card-outer'>
                <Space direction='vertical'>
                    <Typography.Text className='card-inner'>{count}</Typography.Text>
                    <Typography.Text className='cardText-item'>
                        <Space direction='horizontal'> <span style={{fontSize: "18px"}}> {icon} </span> {title} </Space>
                    </Typography.Text>
                </Space>
            </Card>

        </>
    );
}

export default DefaultCard;