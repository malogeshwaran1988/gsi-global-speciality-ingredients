import React from 'react';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import { Row, Col } from 'antd';
//import './ConfectionerySolutions.scss'
import slide1 from '../../assets/images/chocolate-solutions/chocolate-products/1.jpg';
import slide2 from '../../assets/images/chocolate-solutions/chocolate-products/2.jpg';

const bakeStableGallery = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
};

class ChocolateProducts extends React.Component {
    constructor() {
        super();
        this.state = {
            showMoreinfo: false
        };
    }
    render() {
        return (
            <React.Fragment>
                <div className="solutions-grids card mb-3">
                    <Row align="center">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} >
                            <Slider {...bakeStableGallery} className="border-radius-left">
                                <div className="item">
                                    <img src={slide1} alt="Chocolate Products" />
                                </div>
                                <div className="item">
                                    <img src={slide2} alt="Chocolate Products" />
                                </div>
                            </Slider>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} className="p-3 p-sm-4 p-md-4 p-lg-4 " >
                            <h3 className="text-blue">Chocolate Products</h3>
                            <Row gutter={[20, 20]} className={this.state.showMoreinfo ? "showmoreinfo" : "showlessinfo"}>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Products</h5>
                                        <ul>
                                            <li>GLORICH 5052</li>
                                            <li>GLOMUL PGPR 50</li>
                                            <li>Soy Lecithin</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} className="border-right">
                                    <div className="details">
                                        <h5 className="text-red">Primary Applications</h5>
                                        <ul>
                                            <li>Chocolate Compounds</li>
                                            <li>Chocolate bars</li>
                                            <li>Enrobed confectionery &amp; bakery pieces</li>
                                            <li>“Easy” &amp; “difficult” chocolate moulds</li>
                                            <li>Spinning confectionery products</li>
                                            <li>Panning confectionery products</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }}>
                                    <div className="details">
                                        <h5 className="text-red">Key Benefits</h5>
                                        <ul>
                                            <li>Prevents fat blooming on surface of chocolate compound/bar</li>
                                            <li>Improved glossiness</li>
                                            <li>Smooth texture</li>
                                            <li>Optimization cocoa butter content</li>
                                            <li>Optimization coating thickness</li>
                                            <li>Simplifying processing and handling</li>
                                            <li>Reduction of plastic viscosity</li>
                                            <li>Improved flowing properties of chocolate through yield value reduction</li>
                                            <li>Ideal chocolate flow properties needed to fill the mould without creating air bubbles</li>
                                            <li>Possible to reduce fat content</li>
                                            <li>Fast-melting form with good snap</li>
                                            <li>Melts in the mouth temperature at 35℃</li>
                                            <li>Excellent eating characteristics for ultimate indulgence</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <button className={this.state.showMoreinfo ? "btn ant-btn-primary visible" : "btn ant-btn-primary not-visible"} onClick={() => this.setState({ showMoreinfo: !this.state.showMoreinfo })}>
                        {this.state.showMoreinfo ? "Show Less" : "Show More"}
                    </button>
                </div>
            </React.Fragment >
        )
    }
}
export default withRouter(ChocolateProducts)