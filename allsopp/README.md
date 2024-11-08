<header>
        <Container fluid className="header_container">
          <Container className="d-flex justify-content-between align-items-center py-3">
            <div >
              {/* Logo */}
              <Navbar.Brand href="https://www.allsoppandallsopp.com/" className="logo">
                <Image src={logo} alt="Allsopp & Allsopp Logo" />
              </Navbar.Brand>
            </div>

            <div className=''>
              
              <Nav className="d-none d-md-flex align-items-center  ">
                <Nav.Link href="/dubai/properties/residential/sales">Buy</Nav.Link>
                <Nav.Link href="/dubai/properties/residential/lettings">Rent</Nav.Link>
                <Nav.Link href="/private-office">Private Office</Nav.Link>
                <Nav.Link href="/dubai/properties/mortgages">Mortgages</Nav.Link>
                <Nav.Link href="/dubai/about-us/careers-at-allsopp-and-allsopp">Careers</Nav.Link>
                <div className="vertical-line mx-3" />
                <Nav.Link className="bold-text" href="/dubai/book-valuation">List your property</Nav.Link>
              </Nav>

              
              <div className="header-icons d-flex align-items-center">
                <Nav.Link href="/dubai/properties/residential/sales" aria-label="Search Icon">
                  <TfiSearch />
                </Nav.Link>
                <Nav.Link role="button" aria-label="User Login">
                  <BiUser />
                </Nav.Link>
                <Button variant="link" onClick={handleShow} aria-label="Burger menu Icon">
                  <HiOutlineBars3 />
                </Button>
              </div>
            </div>
          </Container>

         
          {/* <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Buy</Accordion.Header>
                  <Accordion.Body>
                    <Nav.Link href="/dubai/properties/residential/sales">Properties for Sale</Nav.Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Rent</Accordion.Header>
                  <Accordion.Body>
                    <Nav.Link href="/dubai/properties/residential/lettings">Properties for Rent</Nav.Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Private Office</Accordion.Header>
                  <Accordion.Body>
                    <Nav.Link href="/private-office">Private Office</Nav.Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Mortgages</Accordion.Header>
                  <Accordion.Body>
                    <Nav.Link href="/dubai/properties/mortgages">Mortgage Calculator</Nav.Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Careers</Accordion.Header>
                  <Accordion.Body>
                    <Nav.Link href="/dubai/about-us/careers-at-allsopp-and-allsopp">Join Our Team</Nav.Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Offcanvas.Body>
          </Offcanvas> */}
        </Container>
      </header>