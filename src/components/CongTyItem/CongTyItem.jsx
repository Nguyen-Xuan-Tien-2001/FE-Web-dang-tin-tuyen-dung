import React from 'react'
import { ListGroup, Row, Col, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan, faEdit } from '@fortawesome/free-solid-svg-icons'


export const CongTyItem = ({ dataCongty }) => {
console.log('====================================');
console.log(dataCongty);
console.log('====================================');
    return (

        <ListGroup.Item>
            <Row>
                
                {
                    dataCongty.map((value, index) => {
                        return(
                            <Row>
                                <Col sm='1'>{index + 1}</Col>
                                <Col sm='2'>{value.id}</Col>
                                <Col sm='3'>{value.tenCty}</Col>
                                <Col sm='4'>{value.tenDC}</Col>
                                <Col sm='2'>
                                    <Button className='btnEdit_Update' type='updateJob'>
                                        <FontAwesomeIcon icon={faEdit} size="1x" color="#198754"></FontAwesomeIcon>
                                    </Button>
                                    <Button className='btnEdit_Update' type='deleteJob'>
                                        <FontAwesomeIcon icon={faTrashCan} size="1x" color="red"></FontAwesomeIcon>
                                    </Button>
                                </Col>
                            </Row>
                        )
                    })
                }


            </Row>
        </ListGroup.Item>

    )
}
