import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleSection from '../../Components/TitleSection/TitleSection';
//import './ConfectionerySolutions.scss';
import IceCreamFrozenDesserts from './IceCreamFrozenDesserts';
import ImitationCream from './ImitationCream';
import CoffeeCreamer from './CoffeeCreamer';
import ProcessedCheeseCheeseAnalogue from './ProcessedCheeseCheeseAnalogue';
import FurtherEnquiry from '../KeyAccountmanager/FurtherEnquiry'
import Bounce from 'react-reveal/Bounce';
import { bgImages } from '../../Util/data';
import { Helmet } from "react-helmet";

class DairyDairyAnalogue extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
          <meta charSet="utf-8" />
          <title>GSI - Dairy & Dairy Analogue</title> 
          <meta name="title" content=""/> 
          <meta name="description" content="Global Specialty Ingredients presents a wide range of solutions for the food & beverage sector including ice cream and frozen desserts."/> 
          <meta name="keywords" content="Global Specialty Ingredients,Dairy & Dairy Analogue,ice cream,frozen desserts,imitation cream,cheese"/> 
          <meta name="og:title" content="GSI - Dairy & Dairy Analogue"/>      
          <meta name="og:description" content="Global Specialty Ingredients presents a wide range of solutions for the food & beverage sector including ice cream and frozen desserts."/> 
              </Helmet>
                <TitleSection sliderImages={bgImages.diary} className="dairy-dairy-analogue" welcomeText="" titleName="Dairy & Dairy Analogue" />

                <section className="gsi-solutions py-5 p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} >
                                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Please find our product line.</h2>
                                <p className="text-left mt-3">Give the gift of guilt-free indulgence to your customers in the form of delightful ice cream, frozen desserts and dairy analogues. GSI with the leverage technology expertise is ready to deliver an exciting array solutions for you.</p>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} >
                                <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
                            </Col>
                        </Row>
                        <div className="mt-4">
                            <Bounce>
                                <IceCreamFrozenDesserts />
                                <ImitationCream />
                                {/* <CoffeeCreamer /> */}
                                <ProcessedCheeseCheeseAnalogue />
                            </Bounce>
                        </div>
                    </div>
                </section>

                <FurtherEnquiry />

            </React.Fragment >
        )
    }
}
export default withRouter(DairyDairyAnalogue)