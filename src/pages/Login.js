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
          {/* <div className='logohader'>
            <img src={Group} alt="Logo" />
          </div> */}
        </Row>
      </div>
      <div>




        <Row className='login_from'>
          <Col className='login_fromcol' sm={12} md={12}  >
            <div style={{background: `url(${LoginFrame})`}}>
            <div className='login_textfrom1'>
                <div className='logintext'>
                  <p>Login !</p>
                  <Form.Item  >
                  <Input className='login_inputbox'
                    placeholder="Mobile number"
                  />
                  </Form.Item>
                  <button onClick={goToUsertypePage} className='login_button' type="submit">Login</button>
                </div>
                </div>
                </div>
          </Col>
          <Col lg={6}  >
            <div className='login_Imagebackground'>
              <img src={Grouplp} alt='loginpage' />
            </div>
          </Col>
        </Row>






      </div>
      {/* <div>
        <div className='endline'>
          <img src={Line3} alt="line3" />
        </div>
        <div className='group5'>
          <img src={Group5} alt="group5" />
        </div>
      </div> */}
    </>
  );
}
export default Login