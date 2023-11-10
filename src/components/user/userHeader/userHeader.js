import { useEffect, useState } from 'react'
import { Row, Col, NavDropdown, Nav } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"


import './userHeader.css'
import userImg from '../../../accets/img_form/user.jpg'
import { FormThemEmail } from '../../FormInput/FormThemEmail/FormThemEmail'
import { FormDoiMatKhau } from '../../FormInput/FormDoiMatKhau/FormDoiMatKhau'

//Call API Information User
import { GetCVByIDService } from '../../../ApiServices/AuthService/getCVByID'

const UserHeader = () => {
    const [toggleThemEmail, setToggleThemEmail] = useState(false);
    const [toggleDoiPass, setToggleDoiPass] = useState(false);
    const role = localStorage.getItem('role');


    const { getCVByIDResponse, getCVByIDIsLoading, getCVByIDError, getCVByIDRefetch } = GetCVByIDService();

    //Kiểm tra nếu chưa đăng nhập thì trở về trang chủ
    const navigate = useNavigate()
    const [user, setUser] = useState(localStorage.getItem('token'))
    useEffect(() => {
        if (!user) {
            navigate('/signin')
        }
    }, [user])

    useEffect(() => {
        if (getCVByIDResponse) {
            if (getCVByIDResponse.data) {
                localStorage.setItem('idCV', getCVByIDResponse.data[0].id);
            }
        }
    }, [getCVByIDResponse])
    const handleLogout = () => {
        localStorage.removeItem('admin');
        localStorage.removeItem('email');
        localStorage.removeItem('iduser');
        localStorage.removeItem('userName');
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        localStorage.removeItem('idChiNhanh');
        setUser(localStorage.getItem('token'));
    }

    return (
        <div className='userMenu'>
            <Row>
                <Col sm='9'>
                    {role === 'USER' ?
                        <ul>
                            <li>
                                <Link to='/user'>
                                    <svg id='logoHome' width="89" height="100%" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#404145"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g></svg>
                                </Link>
                            </li>
                            <li>
                                <Link to="/user/message">Tin nhắn</Link>
                            </li>

                            <li>
                                <Link to="/user/myCV">Quản lý CV</Link>
                            </li>
                            <li>
                                <Link to="/user/myJob">Việc làm đã ứng tuyển</Link>
                            </li>


                        </ul>
                        :
                        (
                            role === 'ADMIN' ?
                                <ul>
                                    <li>
                                        <Link to='/user/QuanLyUser'>
                                            <svg id='logoHome' width="89" height="100%" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#404145"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g></svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/user/QuanLyUser">Quản lý ứng viên</Link>
                                    </li>
                                    <li>
                                        <Link to="/user/QuanLyCVUsers">Quản lý CV ứng viên</Link>
                                    </li>
                                    <li>
                                        <Link to="/user/QuanLyCongTy">Quản lý Nhà tuyển dụng</Link>
                                    </li>
                                    <li>
                                        <Link to="/user/QuanLyBaiDang">Quản lý bài đăng tuyển</Link>
                                    </li>
                                    <li>
                                        <Link to="/user/QuanLyDiaChi">Quản lý Địa chỉ CTY</Link>
                                    </li>
                                </ul>
                                :
                                <ul>
                                    <li>
                                        <Link to='/user'>
                                            <svg id='logoHome' width="89" height="100%" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#404145"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g></svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/user/message">Tin nhắn</Link>
                                    </li>
                                    <li>
                                        <Link to="/user/myCongTy">Công ty</Link>
                                    </li>
                                    <li>
                                        <Link to="/user/postRequest">Tạo bài đăng</Link>
                                    </li>
                                    <li>
                                        <Link to="/user/myPost">Quản lý bài đăng</Link>
                                    </li>

                                </ul>
                        )
                    }
                </Col>
                <Col sm='3'>
                    <ul className='user-navbar'>
                        <li>
                            <img className='userImg' src={userImg} width='35px' height='35px' alt='userImg' />
                        </li>
                        <li style={{ minWidth: " 120px" }}>
                            <span className='userName'>
                                {getCVByIDResponse ? (getCVByIDResponse.success ? getCVByIDResponse.data[0].ho : '') : ''} {getCVByIDResponse ? (getCVByIDResponse.success ? getCVByIDResponse.data[0].ten : '') : ''}
                            </span>
                        </li>
                        <NavDropdown title=' ' id='username'>
                            <Nav.Link as={Link} onClick={() => setToggleThemEmail(true)}>
                                Đổi địa chỉ email
                            </Nav.Link>
                            <Nav.Link as={Link} onClick={() => setToggleDoiPass(true)}>
                                Đổi mật khẩu
                            </Nav.Link>
                            <Nav.Link as={Link} onClick={handleLogout} >
                                Đăng xuất
                            </Nav.Link>
                        </NavDropdown>
                    </ul>
                </Col>
            </Row>
            {
                toggleThemEmail ?
                    <div className='modalForm' onClick={() => setToggleThemEmail(false)}>
                        <FormThemEmail setToggleThemEmail={setToggleThemEmail} />
                    </div>
                    : ''
            }
            {
                toggleDoiPass ?
                    <div className='modalForm' onClick={() => setToggleDoiPass(false)}>
                        <FormDoiMatKhau setToggleDoiPass={setToggleDoiPass} />
                    </div>
                    : ''
            }
        </div >
    )
}

export default UserHeader