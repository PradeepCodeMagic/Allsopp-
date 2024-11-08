import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { RxArrowTopRight } from "react-icons/rx";

export default function ThreeBox() {
    return (
        <section id='ThreeBox'  >
            <Container className='py-5 '>
                <Row xs={1} md={3} className='px-0' >
                    <Col className='d-flex d-md-block' >
                        <div className='order-2 top '>
                            <div className='d-flex'>
                                <div className='heading fs-4 py-0 py-md-1 fw-bold '>How much is your property worth?</div>
                                <div className='arrow ps-1 '><RxArrowTopRight /></div>
                            </div>
                            <p className='pt-0 pt-md-4 pb-2 text-black '>
                                Navigate the property market with confidence with the latest Dubai Land Department sales and lettings data at your fingertips.
                            </p>
                        </div>

                        <div className='order-1 rounded  img '>
                            <Image src='https://www.allsoppandallsopp.com/_next/image?url=https%3A%2F%2Fstrapiallsopp.s3.eu-west-1.amazonaws.com%2Flifestyle_image_1_82a52d969e.jpg&w=1920&q=75' className='w rounded' />
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}
