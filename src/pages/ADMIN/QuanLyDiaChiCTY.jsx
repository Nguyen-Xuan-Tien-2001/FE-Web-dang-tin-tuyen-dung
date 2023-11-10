import React, { useState, useEffect } from 'react';
import { Space, Button } from 'antd';
import TableCustom from '../../components/TableCustom/TableCustom';
import { Container } from 'react-bootstrap';
import UserHeader from '../../components/user/userHeader/userHeader';

import { GetAllChiNhanhService } from '../../ApiServices/GetDataApi/GetAllChiNhanh';
import { FormThemDiaChi } from '../../components/FormInput/FormThemDiaChi/FormThemDiaChi';
import { XoaDCService } from '../../ApiServices/PostDataApi/XoaDC';

const QuanLyDiaChiCTY = () => {
    const { GetAllChiNhanhResponse, GetAllChiNhanhIsLoading, GetAllChiNhanhError, GetAllChiNhanhRefetch } = GetAllChiNhanhService();
    const [toggle, setToggle] = useState();
    const { XoaDCResponse, XoaDCIsLoading, XoaDCError, callXoaDCRefetch } = XoaDCService();

    useEffect(() => {
        if(XoaDCResponse){
            GetAllChiNhanhRefetch();
        }
    },[XoaDCResponse]);
    const handleXoa = (id) => {
        callXoaDCRefetch(id);
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'tenDC',
            key: 'tenDC',
        },
        {
            title: '',
            key: '',
            render: (_,) => (
                <Button danger onClick={()=>handleXoa(_.id)}>Khóa</Button>
            ),
        },
    ];


    return (
        <>
            <UserHeader />
            <Container>
                <h3 style={{ margin: '40px 0' }}>Quản lý Ứng viên</h3>
                <Button onClick={() => setToggle(true)} style={{ margin: '0px 0 20px' }}>Thêm Địa chỉ</Button>
                {GetAllChiNhanhResponse ? <TableCustom columns={columns} data={GetAllChiNhanhResponse.data} /> : ''}
            </Container>
            {toggle ?
                (<div className='modalForm' onClick={() => setToggle(false)}>
                    <FormThemDiaChi GetAllChiNhanhRefetch={GetAllChiNhanhRefetch} setToggle={setToggle} />
                </div>) : ''
                }
        </>
    )
};
export default QuanLyDiaChiCTY;