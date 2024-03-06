import React from 'react'
import { Row, Form, Input, Col } from 'antd'
import tfd from '../photo/tfd.png'
import Group from '../photo/Group.png'
import Line16 from '../photo/Line16.png'
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


function Dispatcher() {

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
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };


  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const [clickedButton, setClickedButton] = useState(null);
  const handleClickButton = (clickedName) => {
    setClickedButton(clickedName);
  };
  const [clickedButton2, setClickedButton2] = useState(null);
  const handleClickButton2 = (clickedName) => {
    setClickedButton2(clickedName);
  };
  const [clickedButton3, setClickedButton3] = useState(null);
  const handleClickButton3 = (clickedName) => {
    setClickedButton3(clickedName);
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
      <div className='Dispatcher_Haderfrom'>
        <div className='dispatcher_text'>
          <p>Let’s create your profile</p>
        </div>
        <div className='dispatcher_from'>
          <Col className='dispatcher_hadercol' sm={18} >
            <div className='text_Dispatcher'>
              <p>Personal</p>
            </div>
            {/* <div className='brokerline'>
              <img src={Line16} alt="line2" />
            </div> */}
            <Row className='Dispatcher_Row1'>
              <Col className='Dispatcher_Col1' xs={24} sm={12} md={8} lg={8}  >
                <div className='dispatcher_colum1'>
                  <p className='Dispatcher_col_hading1'>Name</p>
                  <Form.Item  >
                    <Input className='dispatcher_Input1'
                      style={{
                        border: 'none',
                        color: '#FFFFFF',
                        backgroundColor: '#112535',
                      }}
                      placeholder="Your name"
                    />
                  </Form.Item>
                </div>
              </Col>
              <Col className='Dispatcher_Col2' xs={24} sm={12} md={8} lg={8}  >
                <div className='dispatcher_colum2'>
                  <p className='Dispatcher_col_hading2'>Do you have a TSA Card?</p>
                  <div className='dispatcher_buttoncol1'>
                    <button className={`Dispatcher_button1 ${clickedButton === "TSA_Yes" ? "clicked" : ""}`} onClick={() => handleClickButton("TSA_Yes")}>Yes</button>
                    <button className={`Dispatcher_button1 ${clickedButton === "TSA_No" ? "clicked" : ""}`} onClick={() => handleClickButton("TSA_No")}>No</button>
                  </div>
                </div>
              </Col>
              <Col className='Dispatcher_Col2' xs={24} sm={12} md={8} lg={8}  >
                <div className='dispatcher_colum2'>
                  <p className='Dispatcher_col_hading2'>Do you have TWIC?</p>
                  <div className='dispatcher_buttoncol1'>
                    <button className={`Dispatcher_button1 ${clickedButton2 === "TWIC_Yes" ? "clicked" : ""}`} onClick={() => handleClickButton2("TWIC_Yes")}>Yes</button>
                    <button className={`Dispatcher_button1 ${clickedButton2 === "TWIC_No" ? "clicked" : ""}`} onClick={() => handleClickButton2("TWIC_No")}>No</button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='Dispatcher_Col2' xs={24} sm={12} md={8} lg={8}  >
                <div className='dispatcher_colum2'>
                  <p className='Dispatcher_col_hading2'>Are you HAZMAT Certified?</p>
                  <div className='dispatcher_buttoncol1'>
                    <button className={`Dispatcher_button1 ${clickedButton3 === "HAZ_Yes" ? "clicked" : ""}`} onClick={() => handleClickButton3("HAZ_Yes")}>Yes</button>
                    <button className={`Dispatcher_button1 ${clickedButton3 === "HAZ_No" ? "clicked" : ""}`} onClick={() => handleClickButton3("HAZ_No")}>No</button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className='Dispatcher_Imagetext'>
              <p className='Dispatcher_Imagetexthad'>Upload your Driver’s  License</p>
            </Row>
            <Row className='Dispatcher_Imagerow'>
              <Col className='Dispatcher_ImageCol1' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Imagetext1'>Front</p>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (<img src={imageUrl} alt="avatar" style={{ width: '100%', }} />) : (uploadButton)}
                </Upload>
              </Col>
              <Col className='Dispatcher_ImageCol2' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Imagetext2'>Back</p>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (<img src={imageUrl} alt="avatar" style={{ width: '100%', }} />) : (uploadButton)}
                </Upload>
              </Col>
            </Row>
            <div className='text_Dispatcher1'>
              <p>Company</p>
            </div>
            {/* <div className='brokerline'>
              <img src={Line16} alt="line2" />
            </div> */}
            <Row className='Dispatcher_CompanyRow'>
              <Col className='Dispatcher_CompanyCol1' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Companytext'>Company MC#</p>
                <Form.Item  >
                  <Input className='dispatcher_Input2'
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
            <div className='text_Dispatcher2'>
              <p>Vehicle</p>
            </div>
            {/* <div className='brokerline'>
              <img src={Line16} alt="line2" />
            </div> */}
            <Row className='Dispatcher_VehicalRow'>
              <Col className='Dispatcher_VehicalCol1' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Vehicaltext1'>Truck Type</p>
                <Form.Item  >
                  <Input className='dispatcher_VehicalInput1'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Truck Type"
                  />
                </Form.Item>
              </Col>
              <Col className='Dispatcher_VehicalCol2' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Vehicaltext2'>Truck Size</p>
                <Form.Item  >
                  <Input className='dispatcher_VehicalInput2'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Enter size"
                  />
                  <span class="Vehical_weight_count">feet</span>
                </Form.Item>
              </Col>
              <Col className='Dispatcher_VehicalCol2' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Vehicaltext2'>Truck Height</p>
                <Form.Item  >
                  <Input className='dispatcher_VehicalInput2'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Enter height"
                  />
                  <span class="Vehical_weight_count">feet</span>
                </Form.Item>
              </Col>
              <Col className='Dispatcher_VehicalCol2' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Vehicaltext2'>Truck Width</p>
                <Form.Item  >
                  <Input className='dispatcher_VehicalInput2'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Enter weight"
                  />
                  <span class="Vehical_weight_count">feet</span>
                </Form.Item>
              </Col>
              <Col className='Dispatcher_VehicalCol2' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Vehicaltext2'>Door Height</p>
                <Form.Item  >
                  <Input className='dispatcher_VehicalInput2'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Enter height"
                  />
                  <span class="Vehical_weight_count">feet</span>
                </Form.Item>
              </Col>
              <Col className='Dispatcher_VehicalCol2' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Vehicaltext2'>Truck Max Capacity</p>
                <Form.Item  >
                  <Input className='dispatcher_VehicalInput2'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Enter capacity"
                  />
                  <span class="Vehical_weight_count">lbs</span>
                </Form.Item>
              </Col>
            </Row>


            <Row className='Dispatcher_AccessoriesRow'>
              <p className='Dispatcher_AccessoriesText1'>Accessories</p>
            </Row>
            <Row className='Dispatcher_Accessoriesbutton'>
              <Col className='Dispatcher_asButton1' xs={24} sm={12} md={8} lg={4} >
                <button className={`Dispatcher_Accessoriesbutton1 ${selectedButton === "Pallet Jack" ? "selected" : ""}`} onClick={() => handleButtonClick("Pallet Jack")} >Pallet Jack</button>
              </Col>
              <Col className='Dispatcher_asButton1' xs={24} sm={12} md={8} lg={4} >
                <button className={`Dispatcher_Accessoriesbutton1 ${selectedButton === "Lift Gate" ? "selected" : ""}`} onClick={() => handleButtonClick("Lift Gate")} >Lift Gate</button>
              </Col>
              <Col className='Dispatcher_asButton1' xs={24} sm={12} md={8} lg={4}>
                <button className={`Dispatcher_Accessoriesbutton1 ${selectedButton === "Straps" ? "selected" : ""}`} onClick={() => handleButtonClick("Straps")} >Straps</button>
              </Col>
              <Col className='Dispatcher_asButton1' xs={24} sm={12} md={8} lg={4}>
                <button className={`Dispatcher_Accessoriesbutton1 ${selectedButton === "Blankets/Pads" ? "selected" : ""}`} onClick={() => handleButtonClick("Blankets/Pads")} >Blankets/Pads</button>
              </Col>
              <Col className='Dispatcher_asButton1' xs={24} sm={12} md={8} lg={4} >
                <button className={`Dispatcher_Accessoriesbutton1 ${selectedButton === "Trucks" ? "selected" : ""}`} onClick={() => handleButtonClick("Trucks")} >Trucks</button>
              </Col>
              <Col className='Dispatcher_asButton1' xs={24} sm={12} md={8} lg={4}  >
                <button className={`Dispatcher_Accessoriesbutton1 ${selectedButton === "Other" ? "selected" : ""}`} onClick={() => handleButtonClick("Other")} >Other</button>
              </Col>
            </Row>
            <Row className='Dispatcher_button'>
              <button className='Dispatcher_Summitbutton' type="submit" >Create my account</button>
            </Row>
          </Col>
        </div>
      </div>
      <Container>
      <footer className='Broker_footer'>
        <Row className='Broker_footerRow'>
          <Col className='Broker_footercol1' xs={12} sm={12} md={10} lg={14}>
            <div>@2023 Truckifind. All Rights Reserved.</div>
          </Col>
          <Col className='Broker_footercol2' xs={6} sm={6} md={4} lg={2}>
            <div>Terms & conditions</div>
          </Col >
          <Col className='Broker_footercol3' xs={6} sm={6} md={4} lg={2}>
            <div>Privacy Policy</div>
          </Col>
        </Row>
      </footer>
      </Container>
    </>
  );
}
export default Dispatcher;