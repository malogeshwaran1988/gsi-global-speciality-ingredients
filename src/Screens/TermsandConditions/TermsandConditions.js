import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';
import TitleSection from '../../Components/TitleSection/TitleSection';
import { bgImages } from '../../Util/data';
import { Helmet } from "react-helmet"; 

class TermsandConditions extends React.Component {
    render() {
        return (
            <React.Fragment>
             <Helmet>
          <meta charSet="utf-8" />
          <title>Global Specialty Ingredients Terms and Conditions</title> 
          <meta name="title" content=""/> 
          <meta name="description" content="The GSI Terms & conditions for fair use and practice are published on this website to provide transparency to those who use GSI's website."/> 
          <meta name="keywords" content="Global Specialty Ingredients,GSI,Confectionary,Bakery,ShelfLife,Oil&Fats,Anti-Clouding Agents,Crystal Promoter,Dairy Analogue,Colour,Nutrition,Adsorbent,Flavour"/> 
          <meta name="og:title" content="The GSI Terms & conditions for fair use and practice are published on this website to provide transparency to those who use GSI's website."/>      
          <meta name="og:description" content=""/> 
              </Helmet>

                <TitleSection sliderImages={bgImages.tnc} className="terms-and-conditions" welcomeText="" titleName="Terms and Conditions" />

                <section className="gsi-solutions py-5 p-mob">
                    <div className="container mx-auto">
                        <Row gutter={[20, 20]} align="center" className="mb-4">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 25 }} lg={{ span: 24 }} >
                                <h2 className="border-left-3 text-blue  border-danger pl-3 mb-3">Terms and Conditions</h2>
                             </Col>
                         </Row>
                        <div className="mt-4"> 
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </section>

            </React.Fragment >
        )
    }
}
export default withRouter(TermsandConditions)