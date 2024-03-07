import React from 'react'
import { Row, Space,Col } from 'antd'
import tfd from '../photo/tfd.png'
import Group from '../photo/Group.png'
import LoginFrame from '../photo/LoginFrame.png'
import { Box, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

function Usertype() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleContinue = () => {
    if (selectedOption === 'broker') {
      navigate('/broker');
    } else if (selectedOption === 'dispatcher') {
      navigate('/dispatcher');
    } else if (selectedOption === 'driver') {
      navigate('/driver');
    } else {
      alert('Please select an option');
    }
  };
  const handleClick = () => {
    navigate('/');
  };


  return (
    <>
      <div>
        <Row className='had'>
          <div className="tfd" onClick={handleClick}>
            <img src={tfd} alt="Logo" />
          </div>
          {/* <div className='logohader'>
            <img src={Group} alt="Logo" />
          </div> */}
        </Row>
      </div>
      <div>
        <Row className='usertype'>
          <Box alignItems={'center'} height={590} width={530} sx={{ borderRadius: 3, bgcolor: '#0B0F17' }}>
            <div style={{ background: `url(${LoginFrame})` }}>
              <div className='User_text'>
                <p>Select your role</p>
                <Space direction="vertical" className='radio1' style={{ width: '63%' }}>
                  <label>
                    Broker
                    <input
                      type="radio"
                      name="userType"
                      value="broker"
                      checked={selectedOption === 'broker'}
                      onChange={handleRadioChange}
                    />
                  </label>
                </Space><br /> <br />
                <Space direction="vertical" className='radio1' style={{ width: '63%' }}>
                  <label>
                    Dispatcher
                    <input
                      type="radio"
                      name="userType"
                      value="dispatcher"
                      checked={selectedOption === 'dispatcher'}
                      onChange={handleRadioChange}
                    />
                  </label>
                </Space><br /> <br />
                <Space direction="vertical" className='radio1' style={{ width: '63%' }} >
                  <label>
                    Driver
                    <input
                      type="radio"
                      name="userType"
                      value="driver"
                      checked={selectedOption === 'driver'}
                      onChange={handleRadioChange}
                    />
                  </label>
                </Space><br /> <br />
                <button className='user_button' type="submit" style={{ width: '75%' }} onClick={handleContinue}>Continue</button>
              </div>
            </div>
          </Box>
        </Row>
      </div>
      <Row className='hader_Row1'>
        <Col sm={16} >
      <footer className='Broker_footer'>
        <Row className='Broker_footerRow'>
          <Col className='Broker_footercol1' xs={12} sm={12} md={10} lg={18}>
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
    </>
  );
}
export default Usertype;