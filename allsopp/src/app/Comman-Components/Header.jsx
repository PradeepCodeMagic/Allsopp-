import React from 'react'
import { Container } from 'react-bootstrap'
import './Header.css'
import { RxArrowTopRight } from "react-icons/rx";

export default function Header() {
  return (
    <>
        <Container fluid className='header-top '>
            <Container className=' py-2' >
                    <div className='HeadInner'>
                    The Allsopp & Allsopp Dubai Property Market Report for Q3 2024 is now available . <a href='' className='text-white' >Read the report</a>  <RxArrowTopRight />
                    </div>
            </Container>
        </Container>

        {/* ///////////////////////////// */}

        <Container fluid className=' header-bottom'>
            <Container className='border' >
                    hello
            </Container>
        </Container>
    </>
  )
}
