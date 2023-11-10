import React, { useEffect,useState } from 'react';
import { Space, Button, Tag, message, Select } from 'antd';
import { useNavigate } from "react-router-dom"
import { useParams } from 'react-router-dom';

import TableCustom from '../../../../../components/TableCustom/TableCustom';
import { Container } from 'react-bootstrap';
import UserHeader from '../../../../../components/user/userHeader/userHeader';
import { GetDSUngVienByCVIECService } from '../../../../../ApiServices/GetDataApi/GetDSUngVienByCViec';
import { GetDSUngVienDuGPAService } from '../../../../../ApiServices/GetDataApi/GetDSUngVienDuGPA';
import { GetDSUngVienDuToeicService } from '../../../../../ApiServices/GetDataApi/GetDSUngVienDuToeic';
import { GetDSUngVienDuToeicAndGPAService } from '../../../../../ApiServices/GetDataApi/GetDSUngVienDuToeicAndGPA';

import { ChuyenTrangThaiService } from '../../../../../ApiServices/UngTuyen/ChuyenTrangThai';


const DSUngVien = () => {
    const navigate = useNavigate()

    const { id } = useParams();

    const { GetDsUngVienDuToeicResponse, GetDsUngVienDuToeicIsLoading, GetDsUngVienDuToeicError, GetDsUngVienDuToeicRefetch } = GetDSUngVienDuToeicService();
    const { GetDsUngVienDuGPAResponse, GetDsUngVienDuGPAIsLoading, GetDsUngVienDuGPAError, GetDsUngVienDuGPARefetch } = GetDSUngVienDuGPAService();
    const { GetDsUngVienDuToeicAndGPAResponse, GetDsUngVienDuToeicAndGPAIsLoading, GetDsUngVienDuToeicAndGPAError, GetDsUngVienDuToeicAndGPARefetch } = GetDSUngVienDuToeicAndGPAService();

    const { GetDsUngVienResponse, GetDsUngVienIsLoading, GetDsUngVienError, GetDsUngVienRefetch } = GetDSUngVienByCVIECService(id);
    const { ChuyenTrangThaiResponse, ChuyenTrangThaiIsLoading, ChuyenTrangThaiError, callChuyenTrangThaiRefetch } = ChuyenTrangThaiService();
    
    const [dataUngVien,setDataUngVien] = useState();
    const [change,setChange] = useState();

    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Đã nhận ứng viên',
        });
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Đã từ chối ứng viên',
        });
    };

    useEffect(() => {
        if (ChuyenTrangThaiResponse) {
            if (change === '0') {
                GetDsUngVienDuGPARefetch(id);
            } else if (change === '1') {
                GetDsUngVienDuToeicRefetch(id);
            } else if (change === '2') {
                GetDsUngVienDuToeicAndGPARefetch(id)
            }else{
                GetDsUngVienRefetch();
            }
        }
    }, [ChuyenTrangThaiResponse])

    useEffect(() => {
        if (GetDsUngVienDuToeicResponse) {
            if (GetDsUngVienDuToeicResponse.success) {
                setDataUngVien(GetDsUngVienDuToeicResponse.data)
            }
        }
    }, [GetDsUngVienDuToeicResponse])
    useEffect(() => {
        if (GetDsUngVienDuGPAResponse) {
            if (GetDsUngVienDuGPAResponse.success) {
                setDataUngVien(GetDsUngVienDuGPAResponse.data)
            }
        }
    }, [GetDsUngVienDuGPAResponse])
    useEffect(() => {
        if(GetDsUngVienDuToeicAndGPAResponse){
            if(GetDsUngVienDuToeicAndGPAResponse.success){
            setDataUngVien(GetDsUngVienDuToeicAndGPAResponse.data)
        }
        }
    }, [GetDsUngVienDuToeicAndGPAResponse])
    

    const handleChapNhan = (id) => {
        callChuyenTrangThaiRefetch(id, {
            trangThai: "Đã nhận"
        })
        success();
    };

    const handleTuChoi = (id) => {
        callChuyenTrangThaiRefetch(id, {
            trangThai: "Từ Chối"
        })
        error();
    }

    const onClickRow = (record, rowIndex) => {
        return {
            onClick: (event) => {
                if (!(event.target.innerText === 'Chấp nhận' || event.target.innerText === 'Từ chối')) {
                    localStorage.setItem('iduser', record.cv.user.id)
                    navigate('/user/myCV')
                }
            }, // click row
        };
    };

    const onChange = (value) => {
        if (value === '0') {
            setChange(value);
            GetDsUngVienDuGPARefetch(id);
        } else if (value === '1') {
            setChange(value);
            GetDsUngVienDuToeicRefetch(id);
        } else if (value === '2') {
            setChange(value);
            GetDsUngVienDuToeicAndGPARefetch(id)
        }else{
            setChange(value);
        }
    };


    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Họ',
            render: (_,) => {
                if (_.cv) {
                    return (<a >{_.cv.ho}</a>)
                }
            },
            key: 'ho',
        },
        {
            title: 'Tên',
            key: 'ten',
            render: (_,) => {
                if (_.cv) {
                    return (<a >{_.cv.ten}</a>)
                }
            },

        },
        {
            title: 'Email',
            key: 'email',
            render: (_,) => {
                if (_.cv) {
                    return (<a >{_.cv.email}</a>)
                }
            },
        },
        {
            title: 'SĐT liên hệ',
            key: '',
            render: (_,) => {
                if (_.cv) {
                    return (<a >{_.cv.soDT}</a>)
                }
            }
        },
        {
            title: 'Vị trí ứng tuyển',
            key: 'vitriUngTuyen',
            render: (_,) => {
                if (_.cv) {
                    return (<a >{_.cv.vitriUngTuyen}</a>)
                }
            },
        },
        {
            title: 'Trạng thái',
            key: 'trangThai',
            dataIndex: 'trangThai',
            render: (_,) => (
                <Tag color={_ === 'Đã nộp' ? 'blue' : (_ === 'Đã nhận' ? 'green' : 'red')} key={_}>
                    {_ ? _.toUpperCase() : ''}
                </Tag>
            ),

        },
        {
            title: '',
            key: '',
            render: (_,) => (
                <Space size="middle">
                    <Button onClick={() => (handleChapNhan(_.id))}>Chấp nhận</Button>
                    <Button danger onClick={() => (handleTuChoi(_.id))}>Từ chối</Button>
                </Space>
            ),
        },
    ];


    return (
        <>
            {contextHolder}
            <UserHeader />
            <Container>
                <h3 style={{ margin: '40px 0' }}>Danh sách Ứng viên</h3>
                <div className="Sort_List_UngVien">
                    <b>Phân loại ứng viên :</b>
                    <Select
                        placeholder="Tất cả ứng viên"
                        onChange={onChange}
                        options={[
                            {
                                value: '',
                                label: 'Tất cả ứng viên',
                            },
                            {
                                value: '0',
                                label: 'Đủ điểm GPA',
                            },
                            {
                                value: '1',
                                label: 'Đủ chứng chỉ Toeic',
                            },
                            {
                                value: '2',
                                label: 'Đủ cả GPA và chứng chỉ Toeic',
                            },
                            
                        ]}
                    />
                </div>
                {GetDsUngVienResponse ? <TableCustom onClickRow={onClickRow} columns={columns} data={!change? GetDsUngVienResponse.data : dataUngVien} /> : ''}
            </Container>
        </>
    )
};
export default DSUngVien;