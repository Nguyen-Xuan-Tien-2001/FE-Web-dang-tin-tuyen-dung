import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"


//Call API Create Profile ,create Information
import { TaoCVService } from '../../../ApiServices/PostDataApi/TaoCV';

import './FormThemCV.css'
import UserHeader from '../../user/userHeader/userHeader';

const FormThemTTHR = () => {

    const navigate = useNavigate()

    const { TaoCVResponse, TaoCVError, callTaoCVRefetch } = TaoCVService();


    const handleCancle = () => {
        navigate('/user')
    };

    useEffect(() => {
        if (TaoCVResponse) {
            navigate('/user');
        } else if (TaoCVError) {
            alert('Tạo CV không thành công');
        }
    }, [TaoCVResponse, TaoCVError]);



    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const iduser = localStorage.getItem('iduser');

        const editCV =
        {
            image_url: data.image_url,
            ngaySinh: data.ngaySinh,
            email: data.email,
            ten: data.ten,
            ho: data.ho,
            soDT: data.soDT,
            diaChi: data.diaChi,
            cccd: data.cccd,
            
            user:{
                "id": iduser
            }
        }
        callTaoCVRefetch(editCV);

    };
    return (
        <>
            <UserHeader />
            <Container className='ContainerFormEdit'>
                <div className="headerForm"><h2>Thêm thông tin cho nhà tuyển dụng</h2></div>
                <div className="ContentForm">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label htmlFor="">Email</label>
                        <input type='text'  {...register("email", { required: true })} />
                        {errors.email && <span>Email không được trống</span>}

                        <label htmlFor="">Họ</label>
                        <input {...register("ho",{ required: true })} />
                        {errors.ho && <span>Họ không được để trống!</span>}

                        <label htmlFor="">Tên</label>
                        <input {...register("ten",{ required: true })} />
                        {errors.ten && <span>Tên không được để trống!</span>}


                        <label htmlFor="">Ngày sinh</label>
                        <input type='date' {...register("ngaySinh", { required: true })} />
                        {errors.ngaySinh && <span>Ngày sinh không được để trống!</span>}

                        <label htmlFor="">Địa chỉ</label>
                        <input {...register("diaChi",{ required: true })} />
                        {errors.diaChi && <span>Địa chỉ không được để trống!</span>}

                        <label htmlFor="">Số điện thoại:</label>
                        <input {...register("soDT",{ required: true })} />
                        {errors.soDT && <span>Số điện thoại không được để trống!</span>}

                        <label htmlFor="">Căn cước công dân</label>
                        <input {...register("cccd",{ required: true })} />
                        {errors.cccd && <div><span>CCCD/CMND không được để trống!</span></div>}



                        <Button onClick={handleCancle} className='BtnCancelInformation' type="cancel" > Hủy </Button>
                        <Button className='BtnSaveInformation' type="submit" > Xác nhận </Button>
                    </form>
                </div>

            </Container>

        </>
    )
}

export default FormThemTTHR