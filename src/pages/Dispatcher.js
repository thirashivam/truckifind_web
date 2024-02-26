import React from 'react'
import { Row, Form, Input } from 'antd'
import tfd from '../photo/tfd.png'
import Group from '../photo/Group.png'
import Line3 from '../photo/Line3.png'
import Group5 from '../photo/Group5.png'
import { Box } from '@mui/material'
import Line16 from '../photo/Line16.png'


function Dispatcher() {
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
        <div className='line3'>
          <h1>Let’s create your profile</h1>
        </div>
        <Row className='dispatcherfrom'>
          <Box height={1873} width={1226} sx={{ borderRadius: 3, bgcolor: '#0B0F17' }}>
            <div className='textbroker'>
              <h3>Personal</h3>
            </div>
            <div className='brokerline'>
              <img src={Line16} alt="line2" />
            </div>
            <Row>
              <Form.Item name="name" label="Name">
                <Input />
              </Form.Item>
            </Row>
          </Box>
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
export default Dispatcher;