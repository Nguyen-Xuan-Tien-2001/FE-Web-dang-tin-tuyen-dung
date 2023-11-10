import React, { useEffect } from 'react';
import { Space, Button } from 'antd';
import TableCustom from '../../components/TableCustom/TableCustom';
import { Container } from 'react-bootstrap';
import UserHeader from '../../components/user/userHeader/userHeader';

import { GetAllUsersService } from '../../ApiServices/ADMINService/getAllUsers';

const QuanLyUser = () => {
    const { GetAllUsersResponse, GetAllUsersRefetch } = GetAllUsersService();
    let dataUsers = false;

    if (GetAllUsersResponse) {
        dataUsers = GetAllUsersResponse.data.filter((user) => {
            return user.role === 'USER';
        });
    }


    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Username',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            key: 'role',
            dataIndex: 'role',

        },
        {
            title: '',
            key: '',
            render: (_,) => (
                <Button danger>Khóa</Button>
            ),
        },
    ];


    return (
        <>
            <UserHeader />
            <Container>
                <h3 style={{ margin: '40px 0' }}>Quản lý Ứng viên</h3>
                {dataUsers ? <TableCustom columns={columns} data={dataUsers} /> : ''}
            </Container>
        </>
    )
};
export default QuanLyUser;