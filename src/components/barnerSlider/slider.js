import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Form, FormControl, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";


const Slider = () => {

    return (
        <div className="slider">
            <Carousel pause="none">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/slider1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/slider2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/slider3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/slider4.jpg"
                        alt="fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/slider5.jpg"
                        alt="fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/slider6.jpg"
                        alt="sixth slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="hn">
                <p>
                    <i>
                        Khám Phá Nghề Nghiệp Mơ Ước
                    </i>
                </p>
                <Form inline="true">
                    <FontAwesomeIcon icon={faSearch} size="1x" color="black" id="searchIcon2" />
                    <div className="FormSearch2" >
                        <FormControl type="text" placeholder='Tìm kiếm công việc...' className='mr-lg-0' />
                        <Link to='/Products' style={{ marginTop: -22 + 'px' }}>
                            <Button className='btnn btn'>Tìm kiếm</Button>
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Slider;