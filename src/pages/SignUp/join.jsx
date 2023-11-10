import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"


import { RegisterService } from '../../ApiServices/AuthService/register';
import { ThemEmailUserService } from '../../ApiServices/PostDataApi/ThemEmailUser';

const JoinForm = () => {
    const navigate = useNavigate()
    const { RegisterResponse, callRegisterRefetch } = RegisterService();
    const { ThemEmailUserResponse, callThemEmailUserRefetch } = ThemEmailUserService();

    const [validateMatKhau,setValidateMatKhau] = useState(false);
    const [validated, setValidated] = useState(true);
    const [checkUsername, setCheckUsername] = useState(false);
    const [checkMatKhau, setCheckMatKhau] = useState(false);
    const [checkEmail, setCheckEmail] = useState(false);
    const [email, setEmail] = useState({
        email: ""
    });


    const [formData, setFormData] = useState({
        username: "",
        password: "",
        role: ""
    });

    useEffect(() => {
        if (formData.username === '') {
            setCheckUsername(true);
        }
        else {
            setCheckUsername(false);
        }
        if (formData.password === '') {
            setCheckMatKhau(true);
        }
        else {
            setCheckMatKhau(false);
            if (formData.password.length < 6) {
                setValidateMatKhau(true);
            }
            else {
                setValidateMatKhau(false);
            }
        }
        if (email.email === '') {
            setCheckEmail(true);
        }
        else {
            setCheckEmail(false);
        }
    }, [formData]);


    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!checkUsername && !checkMatKhau && !validated && !checkEmail) {
            console.log(formData);
            callRegisterRefetch(formData);
        }
    }
    const handleChangeEmail = (e) => {

        setEmail((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        if (RegisterResponse) {
            console.log(RegisterResponse);
            if (RegisterResponse.success) {
                localStorage.setItem('iduser',RegisterResponse.data.id);
                callThemEmailUserRefetch(email)
                
            } else {
                alert('Tài khoản đã tồn tại !');
            }

        }
    }, [RegisterResponse]);

    useEffect(() => {
        if(ThemEmailUserResponse){

            if(ThemEmailUserResponse.success === true){
                alert('Đăng ký thành công');
                // Chuyển hướng đến trang đăng nhập
                navigate('/signin')
            }
            else{
                alert('Email đã được sử dụng!');
            }
        }
    },[ThemEmailUserResponse])


    const handleChange = (e) => {
        // console.log(formData);
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleChangeRole = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            role: e.target.value,
        }));
    };

    const handleCheck = (e) => {
        if (e.target.value !== formData.password) {
            setValidated(true);
        } else {
            setValidated(false);
        }
    };

    return (
        <div className='background-DangKy'>
            <div className='signin-layout'>
                <Form onSubmit={handleOnSubmit}>
                    <h3 style={{ color: 'white' }}>Đăng ký Fiverr</h3>
                    <Form.Group className="mb-3" >
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={handleChange} name='username' type="text" placeholder="Nhập username" />
                        {checkUsername ? <span style={{ color: 'red' }} type="invalid">
                            Username không được để trống!
                        </span> : ''}
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Email Xác thực:</Form.Label>
                        <Form.Control onChange={handleChangeEmail} name='email' type="email" placeholder="Nhập email" />
                        {checkEmail ? <span style={{ color: 'red' }} type="invalid">
                            Email không được để trống!
                        </span> : ''}
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Bạn muốn trở thành</Form.Label>
                        
                        <Form.Select onChange={handleChangeRole} value={formData.role}>
                            <option value='USER'>Ứng viên</option>
                            <option value='HR'>Nhà tuyển dụng</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control onChange={handleChange} name='password' type="password" placeholder="Mật khẩu" />
                        {checkMatKhau ? <span style={{ color: 'red' }} type="invalid">
                            Mật khẩu không được để trống!
                        </span> : ''}
                        {validateMatKhau ? <span style={{color:'red'}} >Mật khẩu tối thiểu 6 ký tự !!!</ span> : ''}

                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Nhập lại mật khẩu</Form.Label>
                        <Form.Control onChange={handleCheck} name='password' type="password" placeholder="Nhập lại mật khẩu" />
                        {validated ? <span style={{ color: 'red' }} type="invalid">
                            Nhập lại mật khẩu chưa đúng.
                        </span> : ''}
                    </Form.Group>
                    <Button type='submit' variant='success' className='SignIn--btn' size='md' block='true'>Đăng ký</Button>
                </Form>
            </div>
        </div>

    )
}
export default JoinForm