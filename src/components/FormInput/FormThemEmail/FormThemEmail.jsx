import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { ThemEmailUserService } from '../../../ApiServices/PostDataApi/ThemEmailUser';

import './FormThemEmail.css'

export const FormThemEmail = ({setToggleThemEmail}) => {

    const { ThemEmailUserResponse, ThemEmailUserIsLoading, ThemEmailUserError, callThemEmailUserRefetch } = ThemEmailUserService();

    useEffect(() => {
        if(ThemEmailUserResponse){

            if(ThemEmailUserResponse.success === true){
                alert('Thêm thành công');
                setToggleThemEmail(false);
            }
            else{
                alert('Email đã được sử dụng!');
            }
        }
    },[ThemEmailUserResponse])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const themEmail = {
            email: data.email
        }
        callThemEmailUserRefetch(themEmail)
    };


    return (
        <div className='formThemEmail' onClick={(e)=> e.stopPropagation()}>
            <h5 className="ThemEmail_title">
                Đổi Email xác thực
            </h5>
            <div className="ContentForm">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="">Email</label>
                    <input type='email' placeholder='nhập email'  {...register("email" , { required: true })} />
                    {errors.email && <span>Email không được để trống!</span>}

                    <Button className='BtnSaveInformation' type="submit" > Xác nhận </Button>
                </form>
            </div>
        </div>
    )
}
