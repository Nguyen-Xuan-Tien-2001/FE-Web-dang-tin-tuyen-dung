import React, { useEffect } from 'react';
import { Space, Button } from 'antd';
import TableCustom from '../../components/TableCustom/TableCustom';
import { Container } from 'react-bootstrap';
import UserHeader from '../../components/user/userHeader/userHeader';

import { GetAllCVUsersService } from '../../ApiServices/ADMINService/getCVUsers';
import { XoaCVUserService } from '../../ApiServices/ADMINService/XoaCVUser';

const QuanLyAllCV = () => {

    const { GetAllCVUsersResponse, GetAllCVUsersRefetch } = GetAllCVUsersService();
    const { callXoaCVRefetch } = XoaCVUserService();

    const handleXoaCV = (id) => {
        callXoaCVRefetch(id);
        GetAllCVUsersRefetch();
    };


    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Username',
            key: '',
            render: (_,) => {
                if (_.user) {
                    return (<a >{_.user.userName}</a>)
                }
            }
        },
        {
            title: 'Họ',
            dataIndex: 'ho',
            key: 'ho',
        },
        {
            title: 'Tên',
            key: 'ten',
            dataIndex: 'ten',

        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Vị trí ứng tuyển',
            dataIndex: 'vitriUngTuyen',
            key: 'vitriUngTuyen',
        },
        {
            title: '',
            key: '',
            render: (_,) => (
                <Button danger onClick={() => (handleXoaCV(_.id))}>Khóa</Button>
            ),
        },
    ];


    return (
        <>
            <UserHeader />
            <Container>
                <h3 style={{ margin: '40px 0' }}>Quản lý CV người dùng</h3>
                {GetAllCVUsersResponse ? <TableCustom columns={columns} data={GetAllCVUsersResponse.data} /> : ''}
            </Container>
        </>
    )
};
export default QuanLyAllCV;