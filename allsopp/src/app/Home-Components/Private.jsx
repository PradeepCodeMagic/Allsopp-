import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import './TileBlock.css'; // Place any additional styling here

const Private = () => {
  return (
    <section id='Private' >
      <Container fluid className=' ' >
        <Row  >
          <Col className='left d-flex justify-content-end order-2 order-md-1 ' >
            <div className="leftInnDiv ps-xs-3 small_heading text-secondary mb-3 text-white">
              <h5 className='text-secondary'>Allsoh4p & Allsopp Private Office</h5>
              <h3>
                Dubai’s first-ever homegrown private office for ultra-luxury property advisory
              </h3>
              <p className='pt-4'>
                Catering exclusively to high-net-worth individuals, ultra-high-net-worth individuals and family offices, offering exceptionally comprehensive advisory services with the utmost confidentiality and discretion.
              </p>
                <button className=' rounded-pill'>Discover more</button>

            </div>

          </Col>

          <Col className='right order-1 order-md-2'>
            <img src='https://www.allsoppandallsopp.com/_next/image?url=https%3A%2F%2Fstrapiallsopp.s3.eu-west-1.amazonaws.com%2Fpvt_off_tile_039a00d1a3.png&w=1920&q=75'  />
          </Col>

        </Row>
      </Container>
    </section>
    
  );
};

export default Private;
