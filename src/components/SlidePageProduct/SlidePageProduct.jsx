import React from 'react'
import { Button,Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import slideProduct1 from '../../accets/products/slide_Products/slide_product1.jpg'
import slideProduct2 from '../../accets/products/slide_Products/slide_product2.jpg'
import slideProduct3 from '../../accets/products/slide_Products/slide_product3.jpg'
import slideProduct4 from '../../accets/products/slide_Products/slide_product4.jpg'

import './SlidePageProduct.css'
import { Link } from 'react-router-dom';

export const SlidePageProduct = () => {
  return (
    <>
        <Container className='container_SlidePage'>
            <div className="welcome_section">
                <h4>Chào mừng bạn đến với Fiverr</h4>
                <p className="description">
                    Hãy chọn một công việc trong mơ của bạn...
                </p>
                <Link to='/user/myCV'>
                    <Button variant="success">Bắt đầu tạo CV</Button>
                </Link>
            </div>
            <div className="Slick_Slider">
            <Carousel pause="none"  showControls fade indicators={false}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slideProduct1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slideProduct2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slideProduct3}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slideProduct4}
                    alt="fourth slide"
                    />
                </Carousel.Item>
                
            </Carousel>
            </div>
        </Container>
    </>
  )
}
