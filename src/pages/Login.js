import React from 'react'
import { Input, Row, Form } from 'antd'
import { Col } from 'antd'
import tfd from '../photo/tfd.png'
import Group from '../photo/Group.png'
import Line3 from '../photo/Line3.png'
import Group5 from '../photo/Group5.png'
import Grouplp from '../photo/Grouplp.png'
import LoginFrame from '../photo/LoginFrame.png'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';
// import PhoneInput from 'react-phone-number-input'
// import { useState } from 'react'



function Login() {
  const navigate = useNavigate();
  const goToUsertypePage = () => {
    navigate('/Usertype');
  };
  // const [value, setValue] = useState()
  return (
    <>
      <div>
        <Row className='had'>
          <div className="tfd">
            <img src={tfd} alt="Logo" />
          </div>
          <div className='logohader'>
            <img src={Group} alt="Logo" />
          </div>
        </Row>
      </div>
      <div>
        <Row className='loginf'>
          <Col className='loginfm' sm={{span: 12}} md={{span: 8}} >
            <Box height={527} width={600} sx={{ borderRadius: 3, bgcolor: '#0B0F17' }}>
              <div style={{ background: `url(${LoginFrame})` }}>
                <div className='logintext'>
                  <h1>Login !</h1>
                  <Form.Item  >
                  <Input className='driInput'
                    style={{
                      width: '80%',
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Mobile number"
                  />
                  </Form.Item>
                  <button onClick={goToUsertypePage} className='loginbutton' type="submit" style={{ width: '80%' }}>Login</button>
                </div>
              </div>
            </Box>
          </Col>
          <Col sm={{span: 12}} md={{span: 8}} >
            <div >
              <img src={Grouplp} alt='loginpage' />
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <div className='endline'>
          <img src={Line3} alt="line3" />
        </div>
        <div className='group5'>
          <img src={Group5} alt="group5" />
        </div>
      </div>
    </>
  );
}
export default Login