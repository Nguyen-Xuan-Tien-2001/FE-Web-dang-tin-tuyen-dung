import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useForm } from "react-hook-form";

import { useEffect } from 'react'
import { useState } from 'react'

import './PostARequest.css'
import Footer from '../../../../components/Footer/footer'
import img_postARequest from '../../../../accets/img_form/img_postRequest.jpg'
import UserHeader from '../../../../components/user/userHeader/userHeader'
import { GetCTYByHRService } from '../../../../ApiServices/GetDataApi/getMyCongTy'
import { TaoBaiDangService } from '../../../../ApiServices/PostDataApi/TaoBaiDang'

const PostARequest = () => {
    const navigate = useNavigate();
    const [idChiNhanh, setIdChiNhanh] = useState(0);
    const { GetCTYByHRResponse, GetCTYByHRIsLoading, GetCTYByHRError, GetCTYByHRRefetch } = GetCTYByHRService();
    const { TaoBaiDangResponse, TaoBaiDangIsLoading, TaoBaiDangError, callTaoBaiDangRefetch } = TaoBaiDangService();

    useEffect(() => {
        if (GetCTYByHRResponse) {
            setIdChiNhanh(GetCTYByHRResponse.data[0].id);
        }
        if (TaoBaiDangResponse) {
            navigate('/user/myPost')
        } else if (TaoBaiDangError) {
            alert('Đăng tuyển không thành công')
        }
    }, [GetCTYByHRResponse, TaoBaiDangResponse, TaoBaiDangError])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const [hidden, setHidden] = useState(true);
    const handleClickNext = () => {
        setHidden(!hidden);

    }

    const onSubmit = (data) => {
        let formData = {
            ...data,
            chinhanh: {
                id: idChiNhanh
            },
            trangThai: "Còn hạn",
        }
        callTaoBaiDangRefetch(formData);
    }


    return (
        <>
            <UserHeader />
            <div className="container">
                <div className="step">
                    <div className="step_detail active">
                        <span className="step_number">
                            1
                        </span>
                        <span className="step_description">
                            Mô tả ngắn gọn
                        </span>
                    </div>
                    <div className={hidden ? "step_detail color-gray" : "step_detail color-gray active"}>
                        <span className={hidden ? "step_number step_number2" : "step_number "}>
                            2
                        </span>
                        <span className="step_description">
                            Mô tả chi tiết
                        </span>
                    </div>
                </div>

                <div className="content">
                    <div className="title">
                        <h1>Bước đầu tạo bài đăng...</h1>
                        <p className="content_description">
                            Let's gooooooo!!!
                        </p>
                        <img src={img_postARequest} alt="Img" />
                    </div>
                    <div className="form">
                        <div className="form_header">
                            <span>Bạn có phải là ứng viên ? </span>
                            <Link to="/user">Trở thành ứng viên</Link>
                        </div>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            {hidden ? <>

                                <Form.Group className="mb-3" controlId="formSelect_Category">
                                    <h5>Công ty tuyển:</h5>
                                    <Form.Label>Công ty của bạn tuyển nhân lực.</Form.Label>

                                    <Form.Control style={{'border-bottom': '3px solid #1dbf73'}} readOnly type="text" defaultValue={GetCTYByHRResponse ? GetCTYByHRResponse.data[0].tenCty : ''} />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formSelect_Category">
                                    <h5>Chi nhánh :</h5>
                                    <Form.Label>Chi nhánh công ty.</Form.Label>
                                    <Form.Control style={{'border-bottom': '3px solid #1dbf73'}}readOnly type="text" defaultValue={GetCTYByHRResponse ? GetCTYByHRResponse.data[0].tenDC : ''} />

                                </Form.Group>

                                <Button style={{ float: 'right' }} variant="success" onClick={handleClickNext}>
                                    Tiếp tục
                                </Button>
                            </> : ''}

                            {hidden ? '' : <>

                                <Form.Group className="mb-3" controlId="formTitle">
                                    <Form.Label><h5>Tên công việc</h5></Form.Label>
                                    <Form.Label>Giữ cho nó ngắn gọn và đơn giản - điều này sẽ giúp chúng tôi kết hợp bạn với danh mục phù hợp.</Form.Label>
                                    <Form.Control {...register("tenCViec", { required: true })} style={{'border-bottom': '3px solid #1dbf73'}} type="text" placeholder="Ví dụ: Phân tích nghiệp vụ (BA)" />
                                    {errors.tenCViec && <span style={{ "color": "red" }}>Tên công việc không được để trống</span>}

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label><h5>Lương [$]</h5></Form.Label>
                                    <Form.Control {...register("luong", { required: true })} style={{'border-bottom': '3px solid #1dbf73'}} type="number" placeholder="1000" min={10} />
                                    {errors.luong && <span style={{ "color": "red" }}>Lương công việc không được để trống</span>}
                                    
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label><h5>Mô tả công việc</h5></Form.Label>
                                    <Form.Control style={{'border-bottom': '3px solid #1dbf73'}} {...register("moTa", { required: true })} as="textarea" rows={3} placeholder="Mô tả công việc của bạn" />
                                    {errors.moTa && <span style={{ "color": "red" }}>Mô tả công việc không được để trống</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label><h5>Yêu cầu Ứng viên</h5></Form.Label>
                                    <Form.Control style={{'border-bottom': '3px solid #1dbf73'}} {...register("yeuCau", { required: true })} as="textarea" rows={3} placeholder="Yêu cầu..." />
                                    {errors.yeuCau && <span style={{ "color": "red" }}>Yêu cầu ứng viên không được để trống</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label><h5>Số lượng tuyển</h5></Form.Label>
                                    <Form.Control style={{'border-bottom': '3px solid #1dbf73'}} {...register("soluong", { required: true })} type="number" placeholder="Ví dụ: 5 người" />
                                    {errors.soluong && <span style={{ "color": "red" }}>Số lượng tuyển không được để trống</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label><h5>Yêu cầu điểm GPA (hệ 4)</h5></Form.Label>
                                    <Form.Control {...register("diemGPA", { required: true })} style={{'border-bottom': '3px solid #1dbf73'}} type="number" placeholder="3.0/4" min={0} step={0.1} max={4} />
                                    {errors.diemGPA && <span style={{ "color": "red" }}>Điểm GPA không được để trống</span>}
                                    
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label><h5>Yêu cầu chứng chỉ TOEIC</h5></Form.Label>
                                    <Form.Control {...register("diemTOEIC", { required: true })} style={{'border-bottom': '3px solid #1dbf73'}} type="number" placeholder="100" min={100} step={10} max={1000} />
                                    {errors.diemTOEIC && <span style={{ "color": "red" }}>Điểm TOEIC không được để trống</span>}
                                    
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label><h5>Hạn nộp hồ sơ</h5></Form.Label>
                                    <Form.Control style={{'border-bottom': '3px solid #1dbf73'}} {...register("hanUngTuyen", { required: true })} type="date" />
                                    {errors.hanUngTuyen && <span style={{ "color": "red" }}>Hạn ứng tuyển không được để trống!</span>}
                                </Form.Group>
                                <Button variant="warning" onClick={handleClickNext}>
                                    Quay lại
                                </Button>
                                <Button type="submit" style={{ float: 'right' }} variant="success">
                                    Xác nhận
                                </Button>
                            </>}
                        </Form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PostARequest
