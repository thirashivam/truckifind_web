import React from 'react'
import { Row, Form, Input, Col, Button } from 'antd'
import tfd from '../photo/tfd.png'
import Group from '../photo/Group.png'
import Line3 from '../photo/Line3.png'
import Group5 from '../photo/Group5.png'
import { Box } from '@mui/material'
import Line16 from '../photo/Line16.png'

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


function Dispatcher() {

  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (value) => {
    if (selectedButtons.includes(value)) {
      setSelectedButtons(selectedButtons.filter(item => item !== value));
    } else {
      setSelectedButtons([...selectedButtons, value]);
    }
  };


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
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 25,
        }}
      >
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
          <Box height={1873} width={1226} sx={{ borderRadius: 3, bgcolor: '#0B0F17' }}>
            <div className='textDriver'>
              <h1>Personal</h1>
            </div>
            <div className='brokerline'>
              <img src={Line16} alt="line2" />
            </div>
            <Row className='driverrow1'>
              <Col className='brokercol3' sm={8}  >
                <h3 className='brokertext3'>Name</h3>
                <Form.Item  >
                  <Input className='driInput'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Your name"
                  />
                </Form.Item>
              </Col>
              <Col className='brokercol3' sm={8}  >
                <h3 className='brokertext3'>Do you have a TSA Card?</h3>
                <div className='buttonDis1'>
                  <Button
                    style={{ backgroundColor: '#112535', color: 'white' }}
                    type={selectedButtons.includes('1') ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('1')}
                  >
                    yes
                  </Button>
                  <Button
                    style={{ backgroundColor: '#112535', color: 'white' }}
                    type={selectedButtons.includes('2') ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('2')}
                  >
                    No
                  </Button>
                </div>
              </Col>
              <Col className='brokercol3' sm={8}  >
                <h3 className='brokertext3'>Do you have TWIC?</h3>
                <div className='buttonDis1'>
                  <Button
                    style={{ backgroundColor: '#112535', color: 'white' }}
                    type={selectedButtons.includes('3') ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('3')}
                  >
                    yes
                  </Button>
                  <Button
                    style={{ backgroundColor: '#112535', color: 'white' }}
                    type={selectedButtons.includes('4') ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('4')}
                  >
                    No
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className='driverrow2'>
              <Col className='brokercol3' sm={8}  >
                <h3 className='brokertext3'>Are you HAZMAT Certified?</h3>
                <div className='buttonDis1'>
                  <Button
                    style={{ backgroundColor: '#112535', color: 'white' }}
                    type={selectedButtons.includes('5') ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('5')}
                  >
                    yes
                  </Button>
                  <Button
                    style={{ backgroundColor: '#112535', color: 'white' }}
                    type={selectedButtons.includes('6') ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('6')}
                  >
                    No
                  </Button>
                </div>
              </Col>
            </Row>

            <Row className='driverrow8'>
              <Col className='brokercol3' sm={12}  >
                <h3 className='brokertext3'>Upload your Driver’s  License</h3><br />
                <h3 className='brokertext3'>Front</h3>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (<img src={imageUrl} alt="avatar" style={{ width: '400%', }} />) : (uploadButton)}
                </Upload>
              </Col>
              <Col className='brokercol3' sm={12}  >
                <h3 className='brokertext3'>...</h3><br />
                <h3 className='brokertext3'>Back</h3>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (<img src={imageUrl} alt="avatar" style={{ width: '400%', }} />) : (uploadButton)}
                </Upload>
              </Col>
            </Row>
            <div className='textDriver'>
              <h1>Company</h1>
            </div>
            <div className='brokerline'>
              <img src={Line16} alt="line2" />
            </div>
            <Row className='driverrow3'>
              <Col className='brokercol3' sm={8}  >
                <h3 className='brokertext3'>Company MC#</h3>
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
            </Row>
            <Row >
              <div className='textDriver'>
                <h1>Vehicle</h1>
              </div>
            </Row>
            <div className='brokerline'>
              <img src={Line16} alt="line2" />
            </div>
            <Row className='driverrow3'>
              <Col className='brokercol3' sm={8}  >
                <h3 className='brokertext3'>Truck Type</h3>
                <Form.Item  >
                  <Input className='driInput'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Truck Type"
                  />
                </Form.Item>
              </Col>
              <Col className='brokercol3' sm={8}  >
                <h3 className='brokertext3'>Truck Size</h3>
                <Form.Item  >
                  <Input className='driInput'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Enter size        feet"
                  />
                </Form.Item>
              </Col>
              <Col className='brokercol3' sm={8}  >
                <h3 className='brokertext3'>Truck Height</h3>
                <Form.Item  >
                  <Input className='driInput'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Enter height       feet"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className='driverrow3'>
              <Col className='brokercol3' sm={8}  >
                <h3 className='brokertext3'>Truck Width</h3>
                <Form.Item  >
                  <Input className='driInput'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Enter weight      feet"
                  />
                </Form.Item>
              </Col>
              <Col className='brokercol3' sm={8}  >
                <h3 className='brokertext3'>Door Height</h3>
                <Form.Item  >
                  <Input className='driInput'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Enter height       feet"
                  />
                </Form.Item>
              </Col>
              <Col className='brokercol3' sm={8}  >
                <h3 className='brokertext3'>Truck Max Capacity</h3>
                <Form.Item  >
                  <Input className='driInput'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Enter capacity       lbs"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className='driverrow2'>
              <Col className='brokercol3' sm={24}  >
                <h3 className='brokertext3'>Accessories</h3>
                <div className='buttondis1'>
                  <Button
                    style={{ backgroundColor: '#112535', color: 'white' }}
                    type={selectedButtons.includes('a') ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('a')}
                  >
                    Pallet Jack
                  </Button>
                  <Button
                    style={{ backgroundColor: '#112535', color: 'white' }}
                    type={selectedButtons.includes('b') ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('b')}
                  >
                    Lift Gate
                  </Button>
                  <Button
                    style={{ backgroundColor: '#112535', color: 'white' }}
                    type={selectedButtons.includes('c') ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('c')}
                  >
                    Straps
                  </Button>
                  <Button
                    style={{ backgroundColor: '#112535', color: 'white' }}
                    type={selectedButtons.includes('d') ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('d')}
                  >
                    Blankets/Pads
                  </Button>
                  <Button
                    style={{ backgroundColor: '#112535', color: 'white' }}
                    type={selectedButtons.includes('e') ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('e')}
                  >
                    Trucks
                  </Button>
                  <Button
                    style={{ backgroundColor: '#112535', color: 'white' }}
                    type={selectedButtons.includes('f') ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('f')}
                  >
                    Other
                  </Button>
                </div>
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
export default Dispatcher;