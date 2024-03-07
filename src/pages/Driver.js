import React from 'react'
import { Row, Form, Input, Col, Button } from 'antd'
import tfd from '../photo/tfd.png'
import Group from '../photo/Group.png'
import Line16 from '../photo/Line16.png'
import { useState } from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material'


import { FileUploader } from 'react-drag-drop-files';
import { Spin } from 'antd';
import UploadIcon from '../components/UploadIcon'

const fileTypes = ['image/jpeg', 'image/png'];

const DragDrop = (props) => {
  const { handleChange, comp, disabled } = props;

  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      types={fileTypes}
      children={comp}
      disabled={disabled}
    />
  );
};

const Box = (props) => {
  const { image, imageLoading } = props;

  return (
    <div className="image_box_container">
      {!imageLoading ? (
        <div>
          {image ? (
            <>
              <img src={image} alt="profileimage" loading="lazy" />
            </>
          ) : (
            <UploadIcon />
          )}
        </div>
      ) : (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}
    </div>
  );
};


function Driver() {

  const [image, setImage] = useState({ image: undefined, imageLoading: false });
  const [imageError, setImageError] = useState(false);

  const handleChange = () => {

  };


  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
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
  const [clickedButton4, setClickedButton4] = useState(null);
  const handleClickButton4 = (clickedName) => {
    setClickedButton4(clickedName);
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
            <div className='text_Dispatcher1'>
              <p>Company</p>
            </div>
            {/* <div className='brokerline'>
              <img src={Line16} alt="line2" />
            </div> */}
            <Row className='Dispatcher_CompanyRow'>
              <Col className='Dispatcher_CompanyCol1' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Companytext'>Company Name</p>
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
            <Row className='Dispatcher_CompanyRow'>
              <Col className='Dispatcher_CompanyCol1' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Companytext'>Company Address</p>
              </Col>
            </Row>
            <Row className='Dispatcher_CompanyRow'>
              <Col className='Dispatcher_CompanyCol1' xs={24} sm={12} md={8} lg={8}  >
                <Form.Item  >
                  <Input className='dispatcher_Input2'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Address line 1"
                  />
                </Form.Item>
              </Col>
              <Col className='Dispatcher_CompanyCol1' xs={24} sm={12} md={8} lg={8}  >
                <Form.Item  >
                  <Input className='dispatcher_Input2'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Address line 2"
                  />
                </Form.Item>
              </Col>
              <Col className='Dispatcher_CompanyCol1' xs={24} sm={12} md={8} lg={8}  >
                <Form.Item  >
                  <Input className='dispatcher_Input2'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="City"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className='Dispatcher_CompanyRow'>
              <Col className='Dispatcher_CompanyCol1' xs={24} sm={12} md={8} lg={8}  >
                <Form.Item  >
                  <Input className='dispatcher_Input2'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="State / Province"
                  />
                </Form.Item>
              </Col>
              <Col className='Dispatcher_CompanyCol1' xs={24} sm={12} md={8} lg={8}  >
                <Form.Item  >
                  <Input className='dispatcher_Input2'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Postal code"
                  />
                </Form.Item>
              </Col>
              <Col className='Dispatcher_CompanyCol1' xs={24} sm={12} md={8} lg={8}  >
                <Form.Item  >
                  <Input className='dispatcher_Input2'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Country"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className='Dispatcher_CompanyRow'>
              <Col className='Dispatcher_CompanyCol1' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Companytext'>MC#</p>
                <Form.Item  >
                  <Input className='dispatcher_Input2'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="MC#"
                  />
                </Form.Item>
              </Col>
              <Col className='Dispatcher_CompanyCol1' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Companytext'>DOT#</p>
                <Form.Item  >
                  <Input className='dispatcher_Input2'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="DOT#"
                  />
                </Form.Item>
              </Col>
              <Col className='Dispatcher_CompanyCol1' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Companytext'>Email</p>
                <Form.Item  >
                  <Input className='dispatcher_Input2'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Company email"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className='Dispatcher_CompanyRow'>
              <Col className='Dispatcher_CompanyCol1' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Companytext'>Phone#</p>
                <Form.Item  >
                  <Input className='dispatcher_Input2'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Company phone#"
                  />
                </Form.Item>
              </Col>
              <Col className='Dispatcher_CompanyCol1' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Companytext'>Dispatcher Phone#</p>
                <Form.Item  >
                  <Input className='dispatcher_Input2'
                    style={{
                      border: 'none',
                      color: '#FFFFFF',
                      backgroundColor: '#112535',
                    }}
                    placeholder="Dispatcher phone#"
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
            <Row>
              <Col className='Dispatcher_Col2' xs={24} sm={12} md={8} lg={8}  >
                <div className='dispatcher_colum2'>
                  <p className='Dispatcher_col_hading2'>Do you want to register yourself as a Driver too?</p>
                  <div className='dispatcher_buttoncol1'>
                    <button className={`Dispatcher_button1 ${clickedButton4 === "DRI_Yes" ? "clicked" : ""}`} onClick={() => handleClickButton4("DRI_Yes")}>Yes</button>
                    <button className={`Dispatcher_button1 ${clickedButton4 === "DRI_No" ? "clicked" : ""}`} onClick={() => handleClickButton4("DRI_No")}>No</button>
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
                <div className='Image_Box1'>
                    <DragDrop comp={<Box image={image.image} imageLoading={image.imageLoading} />} handleChange={handleChange} disabled={!!image.image} />
                    {imageError ? <div className="form_errors">Required</div> : null}
                </div>
              </Col>
              <Col className='Dispatcher_ImageCol2' xs={24} sm={12} md={8} lg={8}  >
                <p className='Dispatcher_Imagetext2'>Back</p>
                <div className='Image_Box1'>
                    <DragDrop comp={<Box image={image.image} imageLoading={image.imageLoading} />} handleChange={handleChange} disabled={!!image.image} />
                    {imageError ? <div className="form_errors">Required</div> : null}
                </div>
              </Col>
            </Row>
            <Row className='Dispatcher_button'>
              <button className='Dispatcher_Summitbutton' type="submit" >Create my account</button>
            </Row>
          </Col>
        </div>
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
export default Driver