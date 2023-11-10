import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faSearch, faGlobe } from "@fortawesome/free-solid-svg-icons"
import { Nav, Row, Col, Form, FormControl, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'


function Header() {
    const [navbar, setNavbar] = useState()



    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <div className={navbar ? 'nn active--navbar' : 'nn'}>
            <div>
                <Row className="containerh">
                    <Col className="col1">
                        <div className='faBars-icon'>
                            <FontAwesomeIcon icon={faBars} size="2x" color={'black'} id="barIcon" />
                        </div>
                        <div className="nm">
                            <Nav.Link as={Link} to="/" className='logoHome'>
                                <svg id='logoHome' width="89" height="100%" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#404145"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g></svg>
                            </Nav.Link>
                            <div className={navbar ? 'searchBar' : 'searchBar searchbarhide'}>
                                <Form inline='true'>
                                    <Row className='form-search' style={{ margin: 0 }}>
                                        <Col style={{ padding: 6 + 'px' }}>
                                            <FontAwesomeIcon icon={faSearch} size="1x" color="black" id="searchIcon" />
                                        </Col>
                                        <Col>
                                            <FormControl type="text" placeholder="Tìm kiếm công việc" className='mr-lg-0' />
                                        </Col>
                                        <Col>
                                            <Button className='btnn btn' style={{
                                                width: 100 + 'px'
                                            }}>Tìm kiếm</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Col>
                    <ul className='nvegation col'>
                        <li className='ll'>
                            <a href='/' className={navbar ? 'linkcolor' : 'disactivecolor'}>Việc làm</a>
                        </li>
                        <li className='sli'>
                            <a href='/' className={navbar ? 'linkcolor' : 'disactivecolor'}>Hồ sơ & CV</a>
                        </li>
                        <li className='sli'>
                            <a href='/' className={navbar ? 'linkcolor' : 'disactivecolor'}>
                                <FontAwesomeIcon className={navbar ? 'linkcolor' : 'disactivecolor'} icon={faGlobe} size="1x" color="black" id="globeIcon" />
                                <span>English</span>
                            </a>
                        </li>
                        <li className='tli'>
                            <a href='/' className={navbar ? 'linkcolor' : 'disactivecolor'}>Công ty</a>
                        </li>
                        <li className='tli'>
                            <a href='/' className={navbar ? 'linkcolor' : 'disactivecolor'}>Phát triển </a>
                        </li>
                        <li className={navbar ? 'signinli linkcolor' : 'signinli disactivecolor'}>
                            <Link to='/signin' className={navbar ? 'linkcolor' : 'disactivecolor'}>Đăng nhập</Link>
                        </li>
                        <li className='bli'>
                            <Link to='/join' className={navbar ? 'linkcolor' : 'disactivecolor'}>
                                <Button variant='outline-success'>Đăng ký</Button>
                            </Link>
                        </li>
                    </ul>
                </Row>
            </div>

        </div>
    )
}
export default Header
