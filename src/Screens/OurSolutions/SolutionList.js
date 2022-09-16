import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col } from 'antd';
import { withRouter } from 'react-router-dom'; 
import Bounce from 'react-reveal/Bounce';
import './OurSolutions.scss';


class SolutionList extends Component {
    render() {
        return (
            <React.Fragment>
                <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }} >
                    <Bounce>
                        <Link to={`${this.props.solutionPageLink}`}>
                            <div class="solution-box">
                                <div class="details">
                                    <img src={`${this.props.solutionImg}`} className="animation-grow" alt={`${this.props.solutionTitle}`} />
                                    <div class="title">
                                        <h5>{this.props.solutionTitle}</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Bounce>
                </Col>
            </React.Fragment >
        );
    }
}

export default withRouter(SolutionList);
