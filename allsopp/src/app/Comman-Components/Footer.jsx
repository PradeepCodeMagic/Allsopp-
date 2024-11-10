import React from 'react';
import './Footer.css'
import { FiArrowRightCircle } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";   
import { TfiInstagram } from "react-icons/tfi";
import { AiOutlineYoutube } from "react-icons/ai";
// import { FaLinkedin } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Accordion from 'react-bootstrap/Accordion';

const Footer = () => {
    return (
        <footer class="">
            <div class="container">
                <div class="row">
                    <div class="order-xl-1 order-2 col-xl-5">

                        <div className="footer-menu-accordion d-md-none d-block">
                            <Accordion defaultActiveKey="0" >
                                {/* Services Accordion Item */}
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Services</Accordion.Header>
                                    <Accordion.Body >
                                        <div className="link-wrap">Residential</div>
                                        <div className="link-wrap">Commercial</div>
                                        <div className="link-wrap">Off Plan Developments</div>
                                        <div className="link-wrap">Holiday Homes</div>
                                        <div className="link-wrap">Mortgage Services</div>
                                        <div className="link-wrap">Property Management</div>
                                        <div className="link-wrap">Home Maintenance</div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* About Accordion Item */}
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>About</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="link-wrap">Meet The Team</div>
                                        <div className="link-wrap">Careers</div>
                                        <div className="link-wrap">Latest News</div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* Our Offices Accordion Item */}
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Our Offices</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="link-wrap">Head Office</div>
                                        <div className="link-wrap">Jumeirah Golf Estates</div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        <div class="title">Stay in the loop</div>
                        <p class="text">Sign up to our weekly newsletter for market updates</p>
                        <form class="form-wrapper d-flex" id="">
                            <input class="input-group rounded px-3 py-2 py-md-0 border border-0  " name="Email" type="email" required="" inputMode="email" placeholder="Email Address *" value="" />
                          
                            <input type="hidden" name="recaptcha" id="recaptcha" /><FiArrowRightCircle className='fs-1 mt-1 text-white ms-2' /> </form>
                    </div>
                    <div class="order-xl-1 order-2 col-xl-1"></div>
                    <div class="order-xl-2 order-1 col-xl-6">
                        <div class="footer-links d-md-flex d-none">
                            <div class="item">
                                <div class="title">Services</div>
                                <ul className='p-0'>
                                    <li>Residential</li>
                                    <li>Commercial</li>
                                    <li>Off Plan Developments</li>
                                    <li>Holiday Homes</li>
                                    <li>Mortgage Services</li>
                                    <li>Property Management</li>
                                    <li>Home Maintenance</li>
                                </ul>
                            </div>
                            <div class="item">
                                <div class="title">About</div>
                                <ul className='p-0'>
                                    <li>Meet The Team</li>
                                    <li>Careers</li>
                                    <li>Latest News</li>
                                </ul>
                            </div>
                            <div class="item">
                                <div class="title">Our Offices</div>
                                <ul className='p-0'>
                                    <li>Head Office</li>
                                    <li>Jumeirah
                                        Golf Estates</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="footer-bottom-wrapper">
                        <div class="footer-bottom-top d-flex justify-content-between align-items-center">
                            <div class="logo"><img src="/images/A_A_footer_logo.svg" alt="Allsopp &amp; Allsopp - Logo" /></div>
                            <div class="social-icons">
                                <FaFacebookF  className='text-white fs-2' />
                                <TfiInstagram  className='text-white fs-2' />
                                <AiOutlineYoutube   className='text-white fs-1' />
                                <FaLinkedin className='text-white fs-2' />
                            </div>
                        </div>
                        <div class="footer-copyright">
                            <div class="links text-white ">Complaints Procedure  |
                                Terms &amp; Conditions |  Privacy &amp; Cookies</div>
                            <p>Copyright © Allsopp &amp; Allsopp</p>
                        </div>
                        <div class="footer-bottom-text ">
                            <p className='text-white-50'>Allsopp &amp; Allsopp Real Estate Broker is a company registered in Dubai, United Arab Emirates
                                (License No. 613873), 26th Floor, Vision Tower, Business Bay, Dubai, PO Box 55720. We are regulated by
                                the Real Estate Regulatory Agency under office number 1815.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
