import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';

import { DoiMatKhauService } from '../../../ApiServices/PostDataApi/DoiMatKhau';

export const FormDoiMatKhau = ({setToggleDoiPass}) => {
    const { DoiMatKhauResponse, DoiMatKhauIsLoading, DoiMatKhauError, callDoiMatKhauRefetch } = DoiMatKhauService();

    useEffect(() => {
        if (DoiMatKhauResponse) {
            if (DoiMatKhauResponse.success === true) {
                alert('Đổi thành công');
                setToggleDoiPass(false);
            }
        }
        if(DoiMatKhauError){
            alert('Mật khẩu không đúng');
        }
    }, [DoiMatKhauResponse,DoiMatKhauError])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const doiMatKhau = {
            oldPassword: data.oldPassword,
            newPassword: data.newPassword
        }
        callDoiMatKhauRefetch(doiMatKhau);
    };


    return (
        <div className='formThemEmail' onClick={(e) => e.stopPropagation()}>
            <h5 className="ThemEmail_title">
                Đổi mật khẩu
            </h5>
            <div className="ContentForm">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="">Mật khẩu cũ</label>
                    <input type='password' placeholder='nhập mật khẩu cũ'  {...register("oldPassword", { required: true })} />
                    {errors.oldPassword && <span>Không được để trống!</span>}

                    <label htmlFor="">Mật khẩu mới</label>
                    <input type='password' placeholder='nhập mật khẩu mới'  {...register("newPassword", { required: true })} />
                    {errors.newPassword && <span>Không được để trống!</span>}

                    <Button className='BtnSaveInformation' type="submit" > Xác nhận </Button>
                </form>
            </div>
        </div>
    )
}
