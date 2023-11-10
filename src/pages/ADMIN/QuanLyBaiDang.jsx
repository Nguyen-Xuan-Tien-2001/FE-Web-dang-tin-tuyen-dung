import React, { useEffect } from 'react';
import { message, Tag, Button } from 'antd';
import TableCustom from '../../components/TableCustom/TableCustom';
import { Container } from 'react-bootstrap';
import UserHeader from '../../components/user/userHeader/userHeader';
import { useNavigate } from 'react-router';

import { GetAllBaiDangService } from '../../ApiServices/ADMINService/getAllBaiDang';
import { XoaBaiDangService } from '../../ApiServices/ADMINService/XoaBaiDang';

const QuanLyALLBaiDang = () => {
    const { GetAllBaiDangResponse, GetAllBaiDangRefetch } = GetAllBaiDangService();
    const { XoaBaiDangError, callXoaBaiDangRefetch } = XoaBaiDangService();
    const navigate = useNavigate();


    const handleXoaBD = (id) => {
        callXoaBaiDangRefetch(id);
    };
    const handleChiTiet = (id) => {
        navigate(`/user/JobDetail/ ${id}`);
    };

    const [messageApi, contextHolder] = message.useMessage();

    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Công việc đã có người ứng tuyển!',
        });
    };

    useEffect(() => {
        if (XoaBaiDangError) {
            error();
        }
    }, [XoaBaiDangError]);


    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Tên công việc',
            dataIndex: 'tenCViec',
            key: 'tenCViec',
        },
        {
            title: 'Tên Công Ty',
            key: '',
            dataIndex: 'chinhanh',
            render: (_,) => (
                <>{_.congty.tenCTY}</>
            )
        },
        {
            title: 'Chi Nhánh',
            key: '',
            dataIndex: 'chinhanh',
            render: (_,) => (
                <>{_.diachi.tenDC}</>
            )
        },
        {
            title: 'Hạn Ứng tuyển',
            key: 'hanUngTuyen',
            dataIndex: 'hanUngTuyen',

        },
        {
            title: 'Số lượng',
            key: 'soluong',
            dataIndex: 'soluong',

        },
        {
            title: 'Trạng thái',
            key: 'trangThai',
            dataIndex: 'trangThai',
            render: (_,) => (
                <Tag color={_ === 'Còn hạn' ? 'green' : 'red'} key={_}>
                    {_ ? _.toUpperCase() : ''}
                </Tag>
            ),

        },
        {
            title: '',
            key: '',
            dataIndex: 'id',
            render: (_, value) => {
                return (
                    <>
                        <Button onClick={() => handleChiTiet(value.id)} style={{ marginRight: '10px' }}> Chi tiết</Button >
                        <Button danger onClick={() => handleXoaBD(value.id)}>Khóa</Button>
                    </>
                )
            },
        },
    ];


    return (
        <>
            {contextHolder}
            <UserHeader />
            <Container>
                <h3 style={{ margin: '40px 0' }}>Quản lý tất cả bài đăng tuyển</h3>
                {GetAllBaiDangResponse ? <TableCustom columns={columns} data={GetAllBaiDangResponse.data} /> : ''}
            </Container>
        </>
    )
};
export default QuanLyALLBaiDang;