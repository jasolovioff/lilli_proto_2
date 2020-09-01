import React, {Component} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import whatif05 from "../static/images/whatif05.png";
import whatif06 from "../static/images/whatif06.png";
import whatif07 from "../static/images/whatif07.png";

class LiliCarousel extends Component{
    render() {
        return(
            <Carousel className="h-carrusel">
                <Carousel.Item className="px-5">
                    <Row className="px-5">
                        <Col xs={12} sm={{span: 6, order: 1}} lg={5}>
                            <img src={whatif05} className="d-block w-100" alt="Tu Salud, Simple, Conmigo"/>
                        </Col>
                        <Col xs={12} sm={{span:6, order: 2}} lg={7} className="text-center text-md-left align-self-center text-white">
                            <span className="d-block pb-4 h2 title">¿En qué consiste?</span>
                            <ul className="h4">
                                <li>Lili te ofrece sin costo la guía personalizada de un médico de familia que cuidará tu
                                    salud y la de tu familia con un enfoque de atención integral.
                                </li>
                                <li>Este médico de cabecera podrá ayudarte a resolver la mayoría de tus consultas
                                    ambulatorias y a orientarte para promover una vida sana y prevenir enfermedades.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item className="px-5">
                    <Row className="px-5">
                        <Col xs={12} sm={{span: 6, order: 1}} lg={5}>
                            <img src={whatif06} className="d-block w-100" alt="Tu Salud, Simple, Conmigo"/>
                        </Col>
                        <Col xs={12} sm={{span: 6, order: 2}} lg={7} className="text-center text-md-left align-self-center text-white">
                            <span className="d-block pb-4 h2 title">A través de tu cuenta podrás:</span>
                            <ul className="h4">
                                <li>Agendar las consultas con tu médico de cabecera en modo
                                    presencial o telemedicina.
                                </li>
                                <li>Preguntar o solicitar orientación a nuestro equipo de
                                    médicos que te darán respuesta por teléfono o mensaje en
                                    menos de 20 minutos.
                                </li>
                                <li>Crear tu ficha clínica, en donde podrás revisar todo tu
                                    historial médico en un solo lugar.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item className="px-5">
                    <Row className="px-5">
                        <Col xs={12} sm={{span:6, order:1}} lg={5}>
                            <img src={whatif07} className="d-block w-100" alt="Tu Salud, Simple, Conmigo"/>
                        </Col>
                        <Col xs={12} sm={{span:6, order:2}} lg={7} className="text-center text-md-left align-self-center text-white">
                            <span className="d-block pb-4 h2 title">Beneficios especiales</span>
                            <ul className="h4">
                                <li>Siempre podrás consultar a tu médico de cabecera sin
                                    costo.
                                </li>
                                <li>Las prestaciones indicadas por tu médico de cabecera tienen
                                    un 20% de cobertura adicional, después de tu deducible.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        )
    }
}
export default LiliCarousel;