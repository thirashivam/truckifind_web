import React from 'react'
import Navbar from '../components/Navbar'
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
import Line3 from '../photo/Line3.png'
import Group5 from '../photo/Group5.png'
import { Box } from '@mui/material'
import { useNavigate } from'react-router-dom';




const Home = () => {

  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate('/login');
  };
  return (
    <div>
      <div>
        <Row className='had'>
          <div className='navbar'><Navbar /></div>
          <div className="tfd">
            <img src={tfd} alt="Logo" />
          </div>
          <div className='logohader'>
            <img src={Group} alt="Logo" />
          </div>
        </Row>
      </div>
      <Row className='had1'>
        <Col sm={{span: 12}} md={{span: 6}}>
          <div className='text1'>
            <p className='text12'>Streamlining Freight Connections for Brokers, Dispatchers & Drivers!
              Partner with us</p>
          </div>
          <div className='bnt12'>
          <button className='bnt1' onClick={goToLoginPage}>Partner with us</button>
          </div>
        </Col>
        <Col sm={{span: 12}} md={{span: 6}}>
          <div className='img1'>
            <img src={Group1} alt="vidoe" />
          </div>
        </Col>
      </Row>
      <div>
        <Row className='midline'>
          <img src={Line2} alt="line2" />
        
          <div className='texthader2'>
            <p className='texthader21'>
            <b>Welcome to TruckiFind</b>, Your Ultimate solution for efficient and streamlined trucking operations.Enjoy our
            simplified Job posting and Job Searching process, seamless in-App communication, Document management
            features such as scanning, signing and storage. Efficiently Manage Multiple Jobs, while you track
            progress at each and every point.<b> Join our growing network and experience the future of trucking.</b>
            </p>
          </div>
        </Row>
      </div>
      <div>
        <div className='line3'>
          <h1>Brokers</h1>
        </div>
        <Row>
          <div className='img2'>
            <img src={Group2} alt="img2" />
          </div>
        </Row>
        <div>
          <Row className='hed3'>
            <Col className='col1' sm={{span: 12}} md={{span: 8}}>
              <Box height={300} width={350} sx={{ borderRadius: 3, bgcolor: '#0B0F17' }}>
                <img src={Frame} alt="frm1" />
                <h2>Mobile App & Web Portal</h2>
                <p>Enjoy the flexibility that comes with having access to an advanced Web portal as well as a mobile
                  App. Post your Jobs from wherever you want. Home, Office, Car, you name it!...</p>
              </Box>
            </Col>
            <Col className='col2' sm={{span: 12}} md={{span: 8}}>
              <Box height={300} width={350} sx={{ borderRadius: 3, bgcolor: '#0B0F17' }}>
                <img src={Frame2} alt="frm2" />
                <h2>Easily Post Jobs Loads</h2>
                <p>Our user-friendly interface and advanced features make it simple
                  for you to post jobs, stay organized and enhance productivity</p>
              </Box>
            </Col>
            <Col className='col3' sm={{span: 12}} md={{span: 8}}>
              <Box height={300} width={350} sx={{ borderRadius: 3, bgcolor: '#0B0F17' }}>
                <img src={Frame3} alt="frm3" />
                <h2>Pin Point Carrier Search</h2>
                <p>We are taking the guesswork out of brokerage! Our advanced search features will help you find
                  available carriers with the highest level of precision imaginable, to ensure timely delivery...</p>
              </Box>
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
        <Row>
          <div className='img3'>
            <img src={Group3} alt="img3" />
          </div>
        </Row>
        <div >
          <Row className='hed4'>
            <Col className='col4' sm={{span: 12}} md={{span: 8}}>
              <Box height={300} width={350} sx={{ borderRadius: 3, bgcolor: '#0B0F17' }}>
                <img src={Frame4} alt="frm4" />
                <h2>Easily Search Profitable Loads</h2>
                <p>With our growing network of brokers all over the nation, the opportunities are endless. Our highly
                  customizable job searching features will land you the right jobs by just a few clicks.</p>
              </Box>
            </Col>
            <Col className='col5' sm={{span: 12}} md={{span: 8}}>
              <Box height={300} width={350} sx={{ borderRadius: 3, bgcolor: '#0B0F17' }}>
                <img src={Frame5} alt="frm5" />
                <h2>Efficiently Manage Multiple Drivers</h2>
                <p>Managing multiple drivers has never been easier, One interface, several
                  drivers! Our driver management features will help you become more
                  efficient with handling multiple drivers at the same time...</p>
              </Box>
            </Col>
            <Col className='col6' sm={{span: 12}} md={{span: 8}}>
              <Box height={300} width={350} sx={{ borderRadius: 3, bgcolor: '#0B0F17' }}>
                <img src={Frame6} alt="frm6" />
                <h2>Efficiently Manage Loads</h2>
                <p>Experience the power of our load management features that will enable you to
                  easily acquire loads from brokers,sign necessary contracts and pass them on to your drivers by just a click.</p>
              </Box>
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
        <Row>
          <div className='img4'>
            <img src={Group4} alt="img4" />
          </div>
        </Row>
        <div>
          <Row className='hed5'>
            <Col className='col7' sm={{span: 12}} md={{span: 8}}>
              <Box height={300} width={350} sx={{ borderRadius: 3, bgcolor: '#0B0F17' }}>
                <img src={Frame7} alt="frm7" />
                <h2>See and be Seen!</h2>
                <p>Our advanced GPS based driver locator features will always show brokers in our
                  network, where you are, and you will never miss a job! All you need to do is to turn your availability button on...</p>
              </Box>
            </Col>
            <Col className='col8' sm={{span: 12}} md={{span: 8}}>
              <Box height={300} width={350} sx={{ borderRadius: 3, bgcolor: '#0B0F17' }}>
                <img src={Frame8} alt="frm8" />
                <h2>Search for Jobs</h2>
                <p>Take Control of your routes!  don't be stuck in the middle of nowhere, waiting and
                  hoping for your dispatcher to search through thousands of jobs, until they find you a gig. Search for jobs...</p>
              </Box>
            </Col>
            <Col className='col9' sm={{span: 12}} md={{span: 8}}>
              <Box height={300} width={350} sx={{ borderRadius: 3, bgcolor: '#0B0F17' }}>
                <img src={Frame9} alt="frm9" />
                <h2>Scan, Sign and Store Documents</h2>
                <p>Forget the old days of running to the print shop to scan and sign important documents.
                  Now you can save your valuable time with our document management features. Scan...</p>
              </Box>
            </Col>
          </Row>
          <Row className='butt3'>
            <button className='bnt4' onClick={goToLoginPage}>Partner with us</button>
          </Row>
        </div>
      </div>
      <div>
        <div className='endline'>
          <img src={Line3} alt="line3" />
        </div>
        <div className='group5'>
          <img src={Group5} alt="group5" />
        </div>
      </div>
    </div>
  )
}

export default Home;