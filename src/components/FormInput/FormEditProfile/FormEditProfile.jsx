import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"


//Call API Create Profile ,create Information
import { EditCVService } from '../../../ApiServices/PostDataApi/SuaCV';

import './FormEditProfile.css'

const FormEditProfile = ({ getCVByIDRefetch, getCVByIDResponse, editProfile }) => {

    const navigate = useNavigate()

    const { EditCVResponse, callEditCVRefetch } = EditCVService();


    useEffect(() => {
        if (EditCVResponse) {
            if (EditCVResponse.success === false) {
                alert('Sửa thông tin CV thất bại')
            }
            getCVByIDRefetch();
            editProfile();
        }
    }, [EditCVResponse]);

    // useEffect(() => {
    //     if (createInforResponse) {
    //         console.log(createInforResponse);
    //         alert('Edit Success!!!');
    //         navigate('/user')

    //     } else if (createInforError) {
    //         console.log(createInforError);
    //     }
    // }, [createInforResponse, createInforError])


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const editCV =
        {
            image_url: '',
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
            chungChi:data.chungChi,
            vitriUngTuyen:data.vitriUngTuyen,
            project:data.project,
            kinhNghiem:data.kinhNghiem,
            diemGPA:data.diemGPA,
            diemTOEIC:data.diemTOEIC
        }
        callEditCVRefetch(editCV);

    };

    const onErrors = errors => {
        console.error(errors);
    };

    return (
        <>
            <Container className='ContainerFormEdit'>
                <div className="headerForm"><h2>SỬA THÔNG TIN CV</h2></div>
                <div className="ContentForm">

                    <form onSubmit={handleSubmit(onSubmit,onErrors)}>

                        <label htmlFor="">Email</label>
                        <input type='text' readOnly defaultValue={getCVByIDResponse.email}  {...register("email", { required: true })} />
                        {errors.email && <span>Email không được trống!</span>}

                        <label htmlFor="">Họ</label>
                        <input defaultValue={getCVByIDResponse.ho} {...register("ho",{ required: true })} />
                        {errors.ho && <span>Họ không được để trống!</span>}

                        <label htmlFor="">Tên</label>
                        <input defaultValue={getCVByIDResponse.ten} {...register("ten",{ required: true })} />
                        {errors.ten && <span>Tên không được để trống!</span>}


                        <label htmlFor="">Ngày sinh</label>
                        <input type='date' defaultValue={getCVByIDResponse.ngaySinh} {...register("ngaySinh", { required: true })} />
                        {errors.ngaySinh && <span>Ngày sinh không được để trống!</span>}

                        <label htmlFor="">Địa chỉ</label>
                        <input defaultValue={getCVByIDResponse.diaChi} {...register("diaChi",{ required: true })} />
                        {errors.diaChi && <span>Địa chỉ không được để trống!</span>}

                        <label htmlFor="">Số điện thoại:</label>
                        <input defaultValue={getCVByIDResponse.soDT} {...register("soDT",{ required: true })} />
                        {errors.soDT && <span>Số điện thoại không được để trống!</span>}

                        <label htmlFor="">Căn cước công dân</label>
                        <input defaultValue={getCVByIDResponse.cccd} {...register("cccd",{ required: true })} />
                        {errors.cccd && <span>CCCD/CMND không được để trống!</span>}

                        <label htmlFor="">Học vấn</label>
                        <input defaultValue={getCVByIDResponse.hocVan} {...register("hocVan", { required: true })} />
                        {errors.hocVan && <span>Học vấn không được để trống!</span>}

                        <label htmlFor="">Kỹ năng mềm</label>
                        <input defaultValue={getCVByIDResponse.kyNangMem} {...register("kyNangMem", { required: true })} />
                        {errors.kyNangMem && <span>Kỹ năng mềm không được để trống!</span>}

                        <label htmlFor="">Kỹ năng chuyên môn</label>
                        <input defaultValue={getCVByIDResponse.chuyenMon} {...register("chuyenMon", { required: true })} />
                        {errors.chuyenMon && <span>Vui lòng điền kỹ năng chuyên môn</span>}

                        <label htmlFor="">Điểm GPA</label>
                        <input defaultValue={getCVByIDResponse.diemGPA} {...register("diemGPA", { required: true })} />
                        {errors.diemGPA && <span>Vui lòng điền điểm GPA</span>}


                        <label htmlFor="">Vị trí ứng tuyển</label>
                        <input defaultValue={getCVByIDResponse.vitriUngTuyen} {...register("vitriUngTuyen", { required: true })} />
                        {errors.vitriUngTuyen && <span>Vui lòng nhập vị trí ứng tuyển</span>}

                        <label htmlFor="">Mô tả</label>
                        <input type='textarea' defaultValue={getCVByIDResponse.moTa} {...register("moTa", { required: true })} />
                        {errors.moTa && <span>Vui lòng nhập mô tả khả năng bản thân</span>}

                        <label htmlFor="">Kinh nghiệm làm việc</label>
                        <input defaultValue={getCVByIDResponse.kinhNghiem} {...register("kinhNghiem", { required: true })} />
                        {errors.kinhNghiem && <span>Vui lòng nhập Kinh nghiệm</span>}

                        <label htmlFor="">Chứng chỉ đạt được</label>
                        <input defaultValue={getCVByIDResponse.chungChi} {...register("chungChi", { required: true })} />
                        {errors.chungChi && <span>Vui lòng nhập Chứng chỉ đạt được</span>}

                        <label htmlFor="">Điểm TOEIC</label>
                        <input defaultValue={getCVByIDResponse.diemTOEIC} {...register("diemTOEIC", { required: true })} />
                        {errors.diemTOEIC && <span>Vui lòng điền điểm TOEIC</span>}

                        <label htmlFor="">Dự án thực tế</label>
                        <input defaultValue={getCVByIDResponse.project} {...register("project", { required: true })} />
                        {errors.project && <span>Vui lòng nhập dự án thực tế</span>}


                        <Button onClick={editProfile} className='BtnCancelInformation' type="cancel" > Hủy </Button>
                        <Button className='BtnSaveInformation' type="submit" > Xác nhận </Button>
                    </form>
                </div>

            </Container>

        </>
    )
}

export default FormEditProfile