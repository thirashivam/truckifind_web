import React from 'react'
import { Row, Col, Input, Form } from 'antd'
import tfd from '../photo/tfd.png'
import Group from '../photo/Group.png'

import { useState } from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material'


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

  const navigate = useNavigate();
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
        <div className='Broker_hadertext'>
          <p>Let’s create your profile</p>
        </div>
        <div className='Broker_haderrow'>
        <Col className='Broker_from' sm={18}>
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
                <p className='ppbroker'>Profile Pic</p>
              </div>
            </Row>
            <Row  className='broker_row1'>
              <Col className='brokercol1' xs={24} sm={12} md={8} lg={8} >
                <p className='brokertext1'>Broker Name</p>
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
              <Col className='brokercol2' xs={24} sm={12} md={8} lg={8}  >
                <p className='brokertext2'>Company Name</p>
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
              <Col className='brokercol3' xs={24} sm={12} md={8} lg={8}  >
                <p className='brokertext3'>Company Code</p>
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
            <Row className='broker_row2'>
              <Col className='brokercol1' xs={24} sm={12} md={8} lg={8} > 
                <p className='brokertext1'>MC#</p>
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
              <Col className='brokercol2' xs={24} sm={12} md={8} lg={8}  >
                <p className='brokertext2'>Phone Number</p>
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
              <Col className='brokercol3' xs={24} sm={12} md={8} lg={8}  >
                <p className='brokertext3'>Email</p>
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
              <Col className='brokercol3' xs={24} sm={12} md={8} lg={8}  >
                <p className='brokertext3'>Carrier Setup Link</p>
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
              <button className='brokerbuton1' type="submit" >Create my account</button>
            </Row>
        </Col>
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
export default Broker;