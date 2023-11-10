import React from 'react'
import { Button } from 'antd'
import './FormXacNhan.css'

export const FormXacNhan = ({ message, setToggle, action }) => {
    return (
        <>
            <div className='modalXacNhan'>

                <div className='formXacNhan'>
                    <h4>{message}</h4>
                    <hr />
                    <div className='BtnXacNhan'>
                        <Button danger onClick={()=>{setToggle(false)}}> Hủy</Button>
                        <Button style={{color:'#1dbf73'}} onClick={()=> action() } > Xác Nhận</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
