import React, { useState } from 'react';
import { Input, Row, Form } from 'antd';
import { Col } from 'antd';
import tfd from '../photo/tfd.png';
import Group from '../photo/Group.png';
import Grouplp from '../photo/Grouplp.png';
import LoginFrame from '../photo/LoginFrame.png';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';

function Login() {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');

  const goToUsertypePage = () => {
    if (mobileNumber.trim() !== '') {
      navigate('/Usertype');
    } else {
      alert('Please fill in your mobile number');
    }
  };

  const handleClick = () => {
    navigate('/');
  };

  const handleInputChange = (e) => {
    setMobileNumber(e.target.value);
  };

  return (
    <>
      <div>
        <Row className='had'>
          <div className="tfd" onClick={handleClick}>
            <img src={tfd} alt="Logo" />
          </div>
        </Row>
      </div>
      <div>
        <Row className='login_from'>
          <Col className='login_fromcol' sm={12} md={8} lg={8}  >
            <div style={{ background: `url(${LoginFrame})` }}>
              <div className='login_textfrom1'>
                <div className='logintext'>
                  <p>Login</p>
                  <Form.Item  >
                    <Input
                      className='login_inputbox'
                      style={{
                        border: 'none',
                        color: '#FFFFFF',
                        backgroundColor: '#112535',
                      }}
                      placeholder="Mobile number"
                      value={mobileNumber}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                  <button onClick={goToUsertypePage} className='login_button' type="submit">Login</button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8}  >
            <div className='login_Imagebackground'>
              <img className='login_Imagepage' src={Grouplp} alt='loginpage' />
            </div>
          </Col>
        </Row>
      </div>
      <Row className='hader_Row1'>
        <Col sm={20} >
      <footer className='Broker_footer'>
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
    </>
  );
}

export default Login;
