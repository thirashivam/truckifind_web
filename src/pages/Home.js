import React from 'react'
import Group from '../photo/Group.png'
import Group1 from '../photo/Group1.png'
import Line2 from '../photo/Line2.png'
import Group2 from '../photo/Group2.png'
import tfd from '../photo/tfd.png'
import { Row } from 'antd'
import { Col } from 'antd'
import Frame from '../photo/Frame.png'
import Frame2 from '../photo/Frame2.png'
import Frame3 from '../photo/Frame3.png'
import Group3 from '../photo/Group3.png'
import Frame4 from '../photo/Frame4.png'
import Frame5 from '../photo/Frame5.png'
import Frame6 from '../photo/Frame6.png'
import Group4 from '../photo/Group4.png'
import Frame7 from '../photo/Frame7.png'
import Frame8 from '../photo/Frame8.png'
import Frame9 from '../photo/Frame9.png'
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material'




const Home = () => {

  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate('/login');
  };
  return (
    <div>
      <div className='hader_Image_logo'>
        <Container>
          <Row className='had_logo'>
            <div className="hader_logo_img">
              <img className='hader_logo_img1' src={tfd} alt="Logo" />
            </div>
          </Row>
        </Container>
      </div>
      <div></div>
      <Row className='hader_Row1'>
        <Col className='had1_text' sm={12} md={10} >
          <div className='text1'>
            <p className='text12'>Streamlining Freight Connections for Brokers, Dispatchers & Drivers!</p>
            <button className='bnt1' onClick={goToLoginPage}>Partner with us</button>
          </div>
          {/* <div className='bnt12'>
            
          </div> */}
        </Col>
        <Col className='img_hader_video1' sm={12} md={10} >
          <div className='img_hader_video2'>
            <img className='img_hader_video' src={Group1} alt="vidoe" />
          </div>
        </Col>
      </Row>
      <Row className='hader_Row1'>
        <Col sm={20} >
          <div className='texthader2'>
            <p className='texthader21'>
              <b>Welcome to TruckiFind</b>, Your Ultimate solution for efficient and streamlined trucking operations.Enjoy our
              simplified Job posting and Job Searching process, seamless in-App communication, Document management
              features such as scanning, signing and storage. Efficiently Manage Multiple Jobs, while you track
              progress at each and every point.<b> Join our growing network and experience the future of trucking.</b>
            </p>
          </div>
        </Col>
      </Row>
      <div>
        <div className='dis1'>
          <h1>Brokers</h1>
        </div>
        <Row className='heder_img'>
          <Col xs={24} sm={12} md={8} lg={9}>
            <div className='img2'>
              <img className='heder_img2' src={Group2} alt="img2" />
            </div>
          </Col>
        </Row>
        <div>
          <Row className='home_box'>
            <Col className='home_Col1' xs={24} sm={12} md={8} lg={6}>
              <div className='home_Col1_frame'>
                <img src={Frame} alt="frm1" width={58} height={78} />
              </div>
              <div className='home_Col1_hading'>
                <p>Mobile App & Web Portal</p>
              </div>
              <div className='home_Col1_paragraph'>
                <p>Enjoy the flexibility that comes with having access to an advanced Web portal as well as a mobile
                  App. Post your Jobs from wherever you want. Home, Office, Car, you name it!...</p>
              </div>
            </Col>
            <Col className='home_Col2' xs={24} sm={12} md={8} lg={6}>
              <div className='home_Col2_frame'>
                <img src={Frame2} alt="frm2" width={58} height={78} />
              </div>
              <div className='home_Col2_hading'>
                <p>Easily Post Jobs Loads</p>
              </div>
              <div className='home_Col2_paragraph'>
                <p>Our user-friendly interface and advanced features make it simple
                  for you to post jobs, stay organized and enhance productivity</p>
              </div>
            </Col>
            <Col className='home_Col3' xs={24} sm={12} md={8} lg={6}>
              <div className='home_Col3_frame'>
                <img src={Frame3} alt="frm3" width={58} height={78} />
              </div>
              <div className='home_Col3_hading'>
                <p>Pin Point Carrier Search</p>
              </div>
              <div className='home_Col3_paragraph'>
                <p>We are taking the guesswork out of brokerage! Our advanced search features will help you find
                  available carriers with the highest level of precision imaginable, to ensure timely delivery...</p>
              </div>
            </Col>
          </Row>
          <Row className='butt2'>
            <button className='bnt2' onClick={goToLoginPage}>Partner with us</button>
          </Row>
        </div>
      </div>
      <div>
        <div className='dis1'>
          <h1>Dispatchers</h1>
        </div>
        <Row className='heder_img'>
          <Col xs={24} sm={12} md={9} lg={9}>
            <div className='img2'>
              <img className='heder_img2' src={Group3} alt="img3" />
            </div>
          </Col>
        </Row>
        <div >
          <Row className='home_box2'>
            <Col className='home_Col4' xs={24} sm={12} md={9} lg={6}>
              <div className='home_Col4_frame'>
                <img src={Frame4} alt="frm4" width={58} height={78} />
              </div>
              <div className='home_Col4_hading'>
                <p>Easily Search Profitable Loads</p>
              </div>
              <div className='home_Col4_paragraph'>
                <p>With our growing network of brokers all over the nation, the opportunities are endless. Our highly
                  customizable job searching features will land you the right jobs by just a few clicks.</p>
              </div>
            </Col>
            <Col className='home_Col5' xs={24} sm={12} md={9} lg={6}>
              <div className='home_Col5_frame'>
                <img src={Frame5} alt="frm5" width={58} height={78} />
              </div>
              <div className='home_Col5_hading'>
                <p>Efficiently Manage Multiple Drivers</p>
              </div>
              <div className='home_Col5_paragraph'>
                <p>Managing multiple drivers has never been easier, One interface, several drivers! Our driver management features will help you become more
                  efficient with handling multiple drivers at the same time...</p>
              </div>
            </Col>
            <Col className='home_Col6' xs={24} sm={12} md={9} lg={6}>
              <div className='home_Col6_frame'>
                <img src={Frame6} alt="frm6" width={58} height={78} />
              </div>
              <div className='home_Col6_hading'>
                <p>Efficiently Manage Loads</p>
              </div>
              <div className='home_Col6_paragraph'>
                <p>Experience the power of our load management features that will enable you to
                  easily acquire loads from brokers,sign necessary contracts and pass them on to your drivers by just a click.</p>
              </div>
            </Col>
          </Row>
          <Row className='butt3'>
            <button className='bnt3' onClick={goToLoginPage}>Partner with us</button>
          </Row>
        </div>
      </div>
      <div>
        <div className='dri1'>
          <h1>Drivers</h1>
        </div>
        <Row className='heder_img'>
          <Col xs={24} sm={12} md={9} lg={9}>
            <div className='img2'>
              <img className='heder_img2' src={Group4} alt="img4" />
            </div>
          </Col>
        </Row>
        <div>
          <Row className='home_box3'>
            <Col className='home_Col7' xs={24} sm={12} md={9} lg={6}>
              <div className='home_Col7_frame'>
                <img src={Frame7} alt="frm7" width={58} height={78} />
              </div>
              <div className='home_Col7_hading'>
                <p>See and be Seen!</p>
              </div>
              <div className='home_Col7_paragraph'>
                <p>Our advanced GPS based driver locator features will always show brokers in our
                  network, where you are, and you will never miss a job! All you need to do is to turn your availability button on...</p>
              </div>
            </Col>
            <Col className='home_Col8' xs={24} sm={12} md={9} lg={6}>
              <div className='home_Col8_frame'>
                <img src={Frame8} alt="frm8" width={58} height={78} />
              </div>
              <div className='home_Col8_hading'>
                <p>Search for Jobs</p>
              </div>
              <div className='home_Col8_paragraph'>
                <p>Take Control of your routes!  don't be stuck in the middle of nowhere, waiting and
                  hoping for your dispatcher to search through thousands of jobs, until they find you a gig. Search for jobs...</p>
              </div>
            </Col>
            <Col className='home_Col9' xs={24} sm={12} md={9} lg={6}>
              <div className='home_Col9_frame'>
                <img src={Frame9} alt="frm9" width={58} height={78} />
              </div>
              <div className='home_Col9_hading'>
                <p>Scan, Sign and Store Documents</p>
              </div>
              <div className='home_Col9_paragraph'>
                <p>Forget the old days of running to the print shop to scan and sign important documents.
                  Now you can save your valuable time with our document management features. Scan...</p>
              </div>
            </Col>
          </Row>
          <Row className='butt3'>
            <button className='bnt4' onClick={goToLoginPage}>Partner with us</button>
          </Row>
        </div>
      </div>
      <Row className='hader_Row1'>
        <Col sm={20} >
          <footer className='Broker_footerHome'>
            <Row className='Broker_footerRow'>
              <Col className='Broker_footercol1' xs={12} sm={12} md={10} lg={20}>
                <div>@2023 Truckifind. All Rights Reserved.</div>
              </Col>
              <Col className='Broker_footercol2' xs={6} sm={6} md={4} lg={3}>
                <div>Terms & conditions</div>
              </Col >
              <Col className='Broker_footercol3' xs={6} sm={6} md={4} lg={2}>
                <div>Privacy Policy</div>
              </Col>
            </Row>
          </footer>
        </Col>
        </Row>
    </div>
  )
}

export default Home;