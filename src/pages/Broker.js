import React from 'react'
import { Row, Col, Input, Form } from 'antd'
import tfd from '../photo/tfd.png'
import Group from '../photo/Group.png'
import Line3 from '../photo/Line3.png'
import Group5 from '../photo/Group5.png'
import { Box } from '@mui/material'

import { useState } from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';


const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};


function Broker() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <button style={{ border: 0, background: 'none', }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8, }}>
        Upload
      </div>
    </button>
  );
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
          <Box height={889} width={1226} sx={{ borderRadius: 3, bgcolor: '#0B0F17' }}>
            <Row className='imgupload'>
              <div >
                <Upload 
                  name="avatar"
                  listType="picture-circle"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                  style={{backgroundColor:'#112535'}}
                >
                  {imageUrl ? (< img src={imageUrl} alt="avatar" style={{ width: '100%', }} />) : (uploadButton)}
                </Upload>
                <h3 className='ppbroker'>Profile Pic</h3>
              </div>
            </Row>
            <Row >
              <Col className='brokercol1' sm={8} >
                <h3 className='brokertext1'>Broker Name</h3>
                <Form.Item  >
                  <Input className='driInput'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Your broker name"
                  />
                </Form.Item>
              </Col>
              <Col className='brokercol2' sm={8}  >
                <h3 className='brokertext2'>Company Name</h3>
                <Form.Item  >
                  <Input className='driInput'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Your company name"
                  />
                </Form.Item>
              </Col>
              <Col className='brokercol3' sm={8}  >
                <h3 className='brokertext3'>Company Code</h3>
                <Form.Item  >
                  <Input className='driInput'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="220896MDC    Enter number"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row >
              <Col className='brokercol1' sm={8} > 
                <h3 className='brokertext1'>MC#</h3>
                <Form.Item  >
                  <Input className='driInput'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="MC#"
                  />
                </Form.Item>
              </Col>
              <Col className='brokercol2' sm={8}  >
                <h3 className='brokertext2'>Phone Number</h3>
                <Form.Item  >
                  <Input className='driInput'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Company phone#"
                  />
                </Form.Item>
              </Col>
              <Col className='brokercol3' sm={8}  >
                <h3 className='brokertext3'>Email</h3>
                <Form.Item  >
                  <Input className='driInput'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Broker email (work)"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row >
              <Col className='brokercol3' sm={8}  >
                <h3 className='brokertext3'>Carrier Setup Link</h3>
                <Form.Item  >
                  <Input className='driInput'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Link"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className='brokerbutt1'>
              <button className='brokerbuton1' type="submit" style={{ width: '40%' }}>Create my account</button>
            </Row>
          </Box>
        </Row>
      </div>
      <div>
        <div className='endlinedri'>
          <img src={Line3} alt="line3" />
        </div>
        <div className='group5'>
          <img src={Group5} alt="group5" />
        </div>
      </div>
    </>
  );
}
export default Broker;