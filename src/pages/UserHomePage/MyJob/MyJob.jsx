import React from "react"
import { Tag, Space } from "antd"

import Footer from "../../../components/Footer/footer"
import UserHeader from "../../../components/user/userHeader/userHeader"
import './MyJob.css'
import TableCustom from "../../../components/TableCustom/TableCustom"

import { GetCViecDaUTService } from "../../../ApiServices/GetDataApi/GetDsCongViecDaUT"
import { Container } from "react-bootstrap"

//Call API get List Orders

const MyJob = () => {
    const idCV = localStorage.getItem('idCV')

    const { GetCViecDaUTResponse, GetCViecDaUTIsLoading, GetCViecDaUTError, GetCViecDaUTRefetch } = GetCViecDaUTService(idCV);

    const handleXoaBD = (id) => {
        console.log(id);
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Tên công việc',
            render: (_, value) => (
                <>{value.congviec.tenCViec}</>
            ),
            key: 'tenCViec',
        },
        {
            title: 'Tên Công Ty',
            key: '',
            dataIndex: 'chinhanh',
            render: (_, value) => (
                <>{value.congviec.chinhanh.congty.tenCTY}</>
            )
        },
        {
            title: 'Chi Nhánh',
            key: '',
            dataIndex: 'chinhanh',
            render: (_, value) => (
                <>{value.congviec.chinhanh.diachi.tenDC}</>
            )
        },
        {
            title: 'Hạn Ứng tuyển',
            key: 'hanUngTuyen',
            dataIndex: 'hanUngTuyen',
            render: (_, value) => (
                <Tag color={value.congviec.trangThai === 'Còn hạn' ? 'green' : 'red'} key={value}>
                    {value.congviec.trangThai ? value.congviec.trangThai.toUpperCase() : ''}
                </Tag>
            ),
        },
        {
            title: 'Số lượng',
            key: 'soluong',
            render: (_, value) => (
                <>{value.congviec.soluong}</>
            )

        },
        {
            title: 'Trạng thái',
            key: 'trangThai',
            dataIndex: 'trangThai',
            render: (_, value) => (
                <Tag color={_ === 'Đã nộp' ? 'blue' : (_ === 'Đã nhận' ? 'green' : 'red')} key={value}>
                    {value ? _.toUpperCase() : ''}
                </Tag>
            ),

        },
    ];


    return (
        <>
            <UserHeader />
            <Container >
                <h3 style={{ margin: '40px 0' }}>Viiệc làm đã ứng tuyển</h3>
                {GetCViecDaUTResponse ? <TableCustom columns={columns} data={GetCViecDaUTResponse.data} /> : ''}
            </Container>
            <Footer />
        </>
    )
}
export default MyJob