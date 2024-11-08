
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import giff from '../../../public/images/Banner_window_175664269e.gif'
import Image from 'next/image'
// import { Tabs, Tab } from 'react-bootstrap';
// import Dropdown from 'react-bootstrap/Dropdown';
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export default function FindPlace() {
 
  const [activeTab, setActiveTab] = useState('Buy');
  const [filterHoverDivState, setfilterHoverDivState] = useState(false);


  return (
    <section id='FindPlace' >
      <Container fluid>
        <Row  >
          <Col className='left d-flex justify-content-end  ' >
            <div className='leftInnDiv'>
              <h1 className='py-5 fs-1 fw-bold'>Find your place.</h1>
              <div className='tabs'>
                <div className='allNBtn'>
                  <button
                    className={` ${activeTab === 'Buy' ? 'btnActive' : ''}`}
                    onClick={() => setActiveTab('Buy')}>
                    <span  className={` ${activeTab === 'Buy' ? 'spanActive' : ''}`} >Buy</span>
                  </button>

                  <button
                    className={` ${activeTab === 'Rent' ? 'btnActive' : ''}`}
                    onClick={() => setActiveTab('Rent')}>
                    <span  className={` ${activeTab === 'Rent' ? 'spanActive' : ''}`} >Rent</span>
                  </button>

                  <button
                    className={` ${activeTab === 'Commercial' ? 'btnActive' : ''}`}
                    onClick={() => setActiveTab('Commercial')}>
                    <span  className={` ${activeTab === 'Commercial' ? 'spanActive' : ''}`} >Commercial</span>
                  </button>

                  <button
                    className={` ${activeTab === 'Off Plan' ? 'btnActive' : ''}`}
                    onClick={() => setActiveTab('Off Plan')}>
                    <span  className={` ${activeTab === 'Off Plan' ? 'spanActive' : ''}`} >Off Plan</span>
                  </button>

                  
                </div>

                <div className='tabDown   '>
                  <form>
                    <CiSearch /> <input type='text' className='border-0' placeholder="Community or building" />
                  </form>
                  <button className='Filters' onClick={()=>setfilterHoverDivState(!filterHoverDivState)} >Filters  <IoIosArrowDown />
                    <div  className={` ${filterHoverDivState === true ? 'filterHoverDiv d-block ' : 'filterHoverDiv d-none '}`} >
                        <Row xs={2} >
                            <Col className='filterHoverDivBox'> 
                              <label className='w-100 ' >Minimum Price</label>
                              <select>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                              </select>
                            </Col>

                            <Col className='filterHoverDivBox'> 
                              <label className='w-100 ' >Maximum Price</label>
                              <select>
                                  <option>Maximum Price</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                              </select>
                            </Col>

                            <Col className='filterHoverDivBox'> 
                              <label className='w-100 ' >Property Type</label>
                              <select>
                                  <option>Price Min</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                              </select>
                            </Col>

                            <Col className='filterHoverDivBox'> 
                              <label className='w-100 ' >Size</label>
                              <select>
                                  <option>Price Min</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                                  <option>ADED 75,0000 PA</option>
                              </select>
                            </Col>
                        </Row>

                        <div className='text-end my-2'><button id="no-close" class="button button-primary  ">Search</button></div>
                    </div>
                  </button>
                  <button className='CiSearch'><CiSearch className='iCon' /></button>

                </div>
                

              </div>

            </div>
          </Col>
          <Col className='right'>
            <Image src={giff} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}



