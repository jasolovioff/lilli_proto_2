import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

import slider01 from "../static/images/slider01.png";
import slider02 from "../static/images/slider02.png";
import slider03 from "../static/images/slider03.png";

class Welcome extends Component{
    render() {
        if (this.props.currentStep !== 1){
            return null;
        }
        return(
                <Container>
                    <Row>
                        <Col xs={12} md={{span: 6, order: 2}} xl={6}>
                            <Carousel slide data-ride="carousel">
                                <Carousel.Item active="true">
                                    <img src={slider01} className="d-block w-100" alt="Tu Salud, Simple, Conmigo"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={slider02} className="d-block w-100" alt="Tu Salud, Simple, Conmigo"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={slider03} className="d-block w-100" alt="Tu Salud, Simple, Conmigo"/>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col xs={12} md={{span: 6, order: 1}} xl={6} className="align-self-center">
                                <h1 className="display-3 text-center text-md-left title-bold">
                                    Tu Salud <span className="text-primary">Simple</span>, <br/>
                                    Conmigo.
                                </h1>

                                <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
                                    Una nueva forma de ser Isapre. Médico de cabecera a tu servicio precio y cobertura a
                                    tu medida.
                                </p>

                                <div className="text-center text-md-left">
                                    {this.props.nextButton}
                                </div>
                        </Col>
                    </Row>
                </Container>
        )
    }
}
export default Welcome;