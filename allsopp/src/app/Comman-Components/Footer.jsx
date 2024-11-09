import React from 'react';
import './Footer.css'
import { FiArrowRightCircle } from "react-icons/fi";

const Footer = () => {
  return (
    <footer class="">
      <div class="container">
        <div class="row">
          <div class="order-xl-1 order-2 col-xl-5">
            <div class="footer-menu-accordion d-md-none d-block accordion">
              <div class="accordion-item">
                <h2 class="accordion-header"><button type="button" aria-expanded="false"
                    class="accordion-button collapsed">Services</button></h2>
                <div class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <div class="link-wrap">Residential</div>
                    <div class="link-wrap">ommercial</div>
                    <div class="link-wrap">lopments</div>
                    <div class="link-wrap">Holiday Homes</div>
                    <div class="link-wrap"> Services</div>
                    <div class="link-wrap">Property
                        Management</div>
                    <div class="link-wrap">Home
                        Maintenance</div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header"><button type="button" aria-expanded="false"
                    class="accordion-button collapsed">About</button></h2>
                <div class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <div class="link-wrap">Meet The Team</div>
                    <div class="link-wrap">Careers</div>
                    <div class="link-wrap">Latest News</div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header"><button type="button" aria-expanded="false"
                    class="accordion-button collapsed">Our Offices</button></h2>
                <div class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <div class="link-wrap">Head Office</div>
                    <div class="link-wrap">Jumeirah
                        Golf Estates</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="title">Stay in the loop</div>
            <p class="text">Sign up to our weekly newsletter for market updates</p>
            <form class="form-wrapper d-flex" id="">
            <input class="input-group rounded px-3 border border-0  " name="Email" type="email" required="" inputMode="email" placeholder="Email Address *" value="" />
            <input type="hidden" name="gclid" id="gclid" value="" />
            <input type="hidden" name="fbclid" id="fbclid" value="" />
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
              <div class="social-icons"><a href="https://www.facebook.com/AllsoppAndAllsopp/" target="_blank"
                  aria-label="Facebook Icon"><i class="icon icon-fb"></i></a><a
                  href="https://www.instagram.com/allsoppandallsopp/" target="_blank" aria-label="Instagram Icon"><i
                    class="icon icon-insta"></i></a><a href="https://www.youtube.com/c/AllsoppAllsopp" target="_blank"
                  aria-label="Youtube Icon"><i class="icon icon-youtube"></i></a><a
                  href="https://www.linkedin.com/company/allsopp-&amp;-allsopp" target="_blank"
                  aria-label="Linkedin Icon"><i class="icon icon-linkedin"></i></a></div>
            </div>
            <div class="footer-copyright">
              <div class="links">Complaints Procedure  |
                Terms &amp; Conditions |  Privacy &amp; Cookies</div>
              <p>Copyright © Allsopp &amp; Allsopp</p>
            </div>
            <div class="footer-bottom-text">
              <p>Allsopp &amp; Allsopp Real Estate Broker is a company registered in Dubai, United Arab Emirates
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
