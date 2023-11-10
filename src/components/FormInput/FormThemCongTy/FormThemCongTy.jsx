import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"


//Call API Create Profile ,create Information
import { ThemCongTyService } from '../../../ApiServices/PostDataApi/ThemCongTy';
import { GetAllChiNhanhService } from '../../../ApiServices/GetDataApi/GetAllChiNhanh';

import './FormThemCongTy.css'
import UserHeader from '../../user/userHeader/userHeader';

const FormThemCongTy = ({ setToggle,GetCTYByHRRefetch }) => {

    const navigate = useNavigate()

    const { ThemCongTyResponse, ThemCongTyIsLoading, ThemCongTyError, callThemCongTyRefetch } = ThemCongTyService();
    const { GetAllChiNhanhResponse, GetAllChiNhanhIsLoading, GetAllChiNhanhError, GetAllChiNhanhRefetch } = GetAllChiNhanhService()

    const handleCancle = () => {
        setToggle(false);
    };




    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const iduser = localStorage.getItem('iduser');

        const addCTY =
        {
            congTy: {
                tenCTY: data.tenCTY,
                user: {
                    id: iduser
                }
            },
            chuyenNganh: {
                tenChuyenNganh: data.tenChuyenNganh
            },
            chiNhanh: {
                diachi: { id: data.tenDC }
            }
        }
        callThemCongTyRefetch(addCTY);
    };

    useEffect(() => {
        if(ThemCongTyResponse){
            setToggle(true);
            GetCTYByHRRefetch();
        }else if(ThemCongTyError){
            alert('Bạn chỉ được tạo 1 công ty')
        }
    },[ThemCongTyResponse,ThemCongTyError]);
    
    return (
        <>
            <UserHeader />
            <Container className='ContainerFormEdit'>
                <div className="headerForm"><h2>Tạo thông tin Công Ty</h2></div>
                <div className="ContentForm">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label htmlFor="">Tên Công Ty</label>
                        <input type='text'  {...register("tenCTY", { required: true })} />
                        {errors.tenCTY && <span>Tên Công Ty không được trống</span>}

                        
                                <label htmlFor="">Chi nhánh tuyển</label>
                                <select {...register("tenDC", { require: true })} >
                                    {GetAllChiNhanhResponse ? GetAllChiNhanhResponse.data.map((value) => {
                                        return (<option value={value.id}>{value.tenDC}</option>)
                                    }) :''}
                                </select>
                         


                        <label htmlFor="">Lĩnh vực kinh doanh</label>
                        <input type='text'  {...register("tenChuyenNganh", { required: true })} />
                        {errors.tenChuyenNganh && <div><span>Tên Chuyên Ngành không được trống</span></div>}




                        <Button onClick={handleCancle} className='BtnCancelInformation' > Hủy </Button>
                        <Button className='BtnSaveInformation' type="submit" > Xác nhận </Button>
                    </form>
                </div>

            </Container>

        </>
    )
}

export default FormThemCongTy