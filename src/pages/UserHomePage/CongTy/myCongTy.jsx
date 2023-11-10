import React, { useState } from "react"
import { Card, ListGroup, Row, Col, Button } from "react-bootstrap"

import Footer from "../../../components/Footer/footer"
import UserHeader from "../../../components/user/userHeader/userHeader"
import './myCongTy.css'
import { CongTyItem } from "../../../components/CongTyItem/CongTyItem"

//Call API get List Orders
import { GetCTYByHRService } from "../../../ApiServices/GetDataApi/getMyCongTy"
import { useEffect } from "react"
import FormThemCongTy from "../../../components/FormInput/FormThemCongTy/FormThemCongTy"

const MyCTY = () => {
    const { GetCTYByHRResponse, GetCTYByHRIsLoading, GetCTYByHRError, GetCTYByHRRefetch } = GetCTYByHRService();

    const [toggle, setToggle] = useState(false);

    return (
        <div className="gigs">
            {toggle ?
                <FormThemCongTy GetCTYByHRRefetch={GetCTYByHRRefetch} setToggle={setToggle} />
                :
                <><UserHeader />
                    <div className="container">
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h4 style={{ margin: '20px 0' }} className="font">Thông tin công ty</h4>
                                    <Button onClick={() => setToggle(true)}> Tạo thông tin Công Ty</Button>
                                </ListGroup.Item>
                                <ListGroup.Item >
                                    <Row>

                                        <Col sm='1'><b>STT</b></Col>
                                        <Col sm='2'><b>Mã Chi Nhánh Công Ty</b></Col>
                                        <Col sm='3'><b>Tên Công Ty</b></Col>
                                        <Col sm='4'><b>Địa Chỉ</b></Col>
                                    </Row>
                                </ListGroup.Item>
                                <div className="table_gigs">
                                    {GetCTYByHRResponse ? <CongTyItem dataCongty={GetCTYByHRResponse.data} /> : <Col sm='12' style={{ padding: 20 + 'px' }} > <i>Bạn chưa thêm thông tin công ty !!!</i> </Col>
                                    }
                                </div>
                            </ListGroup>
                        </Card>
                    </div>
                </>

            }
            <Footer />
        </div>
    )
}
export default MyCTY