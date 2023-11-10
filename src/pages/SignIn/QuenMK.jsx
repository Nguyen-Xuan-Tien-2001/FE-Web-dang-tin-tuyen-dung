import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { message } from 'antd';

import { QuenMatKhauService } from '../../ApiServices/AuthService/QuenMatKhau';

const QuenMK = () => {
    const { QuenMatKhauResponse, QuenMatKhauIsLoading, QuenMatKhauError, callQuenMatKhauRefetch } = QuenMatKhauService();

    const [formData, setFormData] = useState({
        Email: "",
    });

    const navigate = useNavigate();

    //Call API Login 
   

    useEffect(() => {
        if (QuenMatKhauResponse) {
            if (QuenMatKhauResponse.success) {
                alert(QuenMatKhauResponse.message);
                navigate('/signin');
            }
            else {
                alert('Không tìm thấy địa chỉ Email!');
            }
        }

    }, [QuenMatKhauResponse])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        callQuenMatKhauRefetch(formData.Email);

    }
    const handleChange = (e) => {
        setFormData(() => ({
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <div className='background-Login'>
            <div className='signin-layout'>
                <Form onSubmit={handleOnSubmit}>
                    <h3>Quên mật khẩu</h3>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email xác thực</Form.Label>
                        <Form.Control onChange={(e)=>handleChange(e)} name='Email' type="text" placeholder="Nhập Email xác thực" />
                    </Form.Group>
                    <Button type='submit' variant='success' className='SignIn--btn' size='md' block='true'>Gửi mail</Button>
                </Form>
            </div>
        </div>
    )
}

export default QuenMK;