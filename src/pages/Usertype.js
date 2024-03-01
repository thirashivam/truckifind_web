import React from 'react'
import { Row, Space } from 'antd'
import tfd from '../photo/tfd.png'
import Group from '../photo/Group.png'
import Line3 from '../photo/Line3.png'
import Group5 from '../photo/Group5.png'
import LoginFrame from '../photo/LoginFrame.png'
import { Box } from '@mui/material'
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
        <Row className='usertype'>
          <Box alignItems={'center'} height={590} width={530} sx={{ borderRadius: 3, bgcolor: '#0B0F17' }}>
            <div style={{ background: `url(${LoginFrame})` }}>
              <div className='User_text'>
                <p>Select your role !</p>
                <Space direction="vertical" className='radio1' style={{ width: '55%' }}>
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
                <Space direction="vertical" className='radio1' style={{ width: '55%' }}>
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
                <Space direction="vertical" className='radio1' style={{ width: '55%' }} >
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
export default Usertype;