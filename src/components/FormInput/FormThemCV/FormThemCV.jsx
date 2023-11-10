import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"


//Call API Create Profile ,create Information
import { TaoCVService } from '../../../ApiServices/PostDataApi/TaoCV';

import './FormThemCV.css'
import UserHeader from '../../user/userHeader/userHeader';

const FormThemCV = () => {

    const navigate = useNavigate()

    const { TaoCVResponse, TaoCVError, callTaoCVRefetch } = TaoCVService();


    const handleCancle = () => {
        navigate('/user')
    };

    useEffect(() => {
        if (TaoCVResponse) {
            navigate('/user/myCV');
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
            chuyenMon: data.chuyenMon,
            kyNangMem: data.kyNangMem,
            soDT: data.soDT,
            diaChi: data.diaChi,
            moTa: data.moTa,
            cccd: data.cccd,
            hocVan: data.hocVan,
            ten: data.ten,
            ho: data.ho,
            ngaySinh: data.ngaySinh,
            email: data.email,
            cccd: data.cccd,
            vitriUngTuyen:data.vitriUngTuyen,
            chungChi: data.chungChi, 
            project: data.project, 
            kinhNghiem: data.kinhNghiem, 
            diemGPA:data.diemGPA,
            diemTOEIC:data.diemTOEIC,
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
                <div className="headerForm"><h2>Tạo CV</h2></div>
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
                        {errors.cccd && <span>CCCD/CMND không được để trống!</span>}


                        <label htmlFor="">Học vấn</label>
                        <input {...register("hocVan", { required: true })} />
                        {errors.hocVan && <span>Học vấn không được để trống</span>}

                        <label htmlFor="">Kỹ năng mềm</label>
                        <input {...register("kyNangMem", { required: true })} />
                        {errors.kyNangMem && <span>Kỹ năng mềm không được để trống</span>}

                        <label htmlFor="">Kỹ năng chuyên môn</label>
                        <input {...register("chuyenMon", { required: true })} />
                        {errors.chuyenMon && <span>Vui lòng điền kỹ năng chuyên môn</span>}

                        <label htmlFor="">Điểm GPA</label>
                        <input {...register("diemGPA", { required: true })} />
                        {errors.diemGPA && <span>Vui lòng điền điểm GPA</span>}

                        <label htmlFor="">Vị trí ứng tuyển</label>
                        <input {...register("vitriUngTuyen", { required: true })} />
                        {errors.vitriUngTuyen && <span>Vui lòng nhập vị trí ứng tuyển</span>}

                        <label htmlFor="">Mô tả</label>
                        <input type='textarea' {...register("moTa", { required: true })} />
                        {errors.moTa && <span>Vui lòng nhập vị trí ứng tuyển</span>}

                        <label htmlFor="">Chứng chỉ đạt được</label>
                        <input type='textarea' {...register("chungChi", { required: true })} />
                        {errors.chungChi && <span>Vui lòng nhập chứng chỉ đạt được</span>}

                        <label htmlFor="">Điểm TOEIC</label>
                        <input {...register("diemTOEIC", { required: true })} />
                        {errors.diemTOEIC && <span>Vui lòng điền điểm TOEIC</span>}

                        <label htmlFor="">Dự án thực tế</label>
                        <input type='textarea' {...register("project", { required: true })} />
                        {errors.project && <span>Vui lòng nhập Dự án thực tế</span>}

                        <label htmlFor="">Kinh nghiệm</label>
                        <input type='textarea' {...register("kinhNghiem", { required: true })} />
                        {errors.kinhNghiem && <div><span>Vui lòng nhập kinh nghiệm thực chiến</span></div>}


                        <Button onClick={handleCancle} className='BtnCancelInformation' type="cancel" > Hủy </Button>
                        <Button className='BtnSaveInformation' type="submit" > Xác nhận </Button>
                    </form>
                </div>

            </Container>

        </>
    )
}

export default FormThemCV