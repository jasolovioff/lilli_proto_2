import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import LiliCarousel from "./LiliCarousel";
import slider01 from "../static/images/slider01.png";
import whatif03 from "../static/images/whatif03.png";
import phoneMovile from "../static/images/phone-movile.png";
import time from "../static/images/time.svg";
import searchmedical from "../static/images/searchmedical.svg";
import secure from "../static/images/secure.svg";

class Step0 extends Component{
    render() {
        if (this.props.currentStep !== 0){
            return null;
        }
        return(
            <React.Fragment>
                {/* Sección 1*/}
                <Container fluid as="section">
                    <Container className="py-5">
                        <Row>
                            <Col xs={12} md={{span: 6, order: 2}} xl={6}>
                                <img src={slider01} className="d-block w-100" alt="Tu Salud, Simple, Conmigo"/>
                            </Col>
                            <Col xs={12} md={{span: 6, order: 1}} xl={6} className="align-self-center">
                                <h1 className="display-4 text-center text-md-left title-bold">
                                    Tu Salud <span className="text-col1">Simple</span>, <br/>
                                    Conmigo.
                                </h1>
                                <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
                                    La nueva forma de ser Isapre.<br/>
                                    Médico de cabecera a tu servicio.<br/>
                                    Precio y cobertura a tu medida.
                                </p>
                                <a href="#explora"
                                   className="col-12 col-md-6 btn shadow-lg bg-col1 text-white mt-2 py-3 font-weight-bold btn-bubble anchoranim">
                                    Conoce Lili
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                {/* Sección 2*/}
                <Container fluid as="section" className="bg-col1">

                    <div className="shape-before">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path fill="#FFFFFF"
                                  d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                        </svg>
                    </div>


                    <Container id="explora" className="px-0 px-mb-1">

                        <Row className="pt-4">
                            <Col className="col-12">
                                <h2 className="title-bold display-5 text-center text-col4">Tu <span className="">Médico</span> de
                                    cabecera</h2>
                            </Col>
                        </Row>

                        <Row className="pb-5 mb-5">
                            <Col xs={12}>
                                <LiliCarousel/>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                {/* Sección 3*/}

                <Container fluid as="section">

                    <div className="shape-after">
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "200px", width: "100%"}}>
                            <path fill="#00dda2"
                                  d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
                                  style={{stroke: "none"}}></path>
                        </svg>
                    </div>

                    <Row>
                        <Col xs={12}>
                            <h2 className="title-bold text-center">¿Qué <span className="text-col1">beneficios</span> tiene Lili para ti?</h2>
                        </Col>
                    </Row>

                    <Container>
                        <Row className="py-5 my-4">
                            <Col xs={12} md={{span:6, order:2}} xl={5}>
                                <iframe className="rounded shadow-lg playvideo"
                                        src="https://www.youtube.com/embed/XnULQGhDbRU" frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </Col>
                            <Col xs={12} md={{span:6, order:1}} xl={7} className="text-center text-md-left align-self-center">
                                <h2 className="title wave2"><span className="title-bold text-col1">Precios y coberturas</span><br/> a tu medida</h2>
                                <span className="h4 text-secondary">
                                    <b>Lili es más conveniente porque usa deducible. Mientras más alto sea, más bajo será el valor mensual del plan. ¡Tú eliges!</b>
                                      <br/><br/>
                                      El deducible es el monto que tienes que pagar en el año, antes de que se activen las coberturas adicionales.
                                      <br/><br/>
                                      Tu financias tus gastos médicos (después de la cobertura mínima legal) hasta completar el deducible; después, nosotros nos hacemos cargo de hasta el 100%, según donde te atiendas y si fuiste derivado por tu médico de cabecera.
                                     </span>
                            </Col>
                        </Row>

                        <Row className="py-4">
                            <Col xs={12} md={6} xl={5}>
                                <img src={whatif03} className="d-block w-100" alt="Usa tu Red para mayor cobertura"/>
                            </Col>
                            <Col xs={12} md={6} xl={7} className="text-center text-md-left align-self-center">
                                <h2 className="title wave2">Usa tu <span className="title-bold text-col1">Red</span><br/> para mayor cobertura</h2>
                                <span className="h4 text-secondary">
                                <b>Elige la Red de Clínicas en la que te quieres atender.</b>
                                  <br/><br/>
                                  Si te atiendes en esta Red, las hospitalizaciones tienen 80% de cobertura después del deducible, que se transforma en un 100% si te deriva tu médico de cabecera.
                                  <br/><br/>
                                  En consultas, exámenes y procedimientos ambulatorios, tienes un 70% de cobertura en la Red después del deducible, que será un 90% si te deriva tu médico de cabecera.
                                </span>
                            </Col>
                        </Row>

                    </Container>
                </Container>

                {/* Sección 4*/}

                <Container as="section" fluid className="bg-col3">
                    <Container>

                        <Row className="mt-4">
                            <Col xs={12} md={{span: 6, order: 2}} xl={6}>
                                <img src={phoneMovile} className="d-block w-100" alt="Precios y coberturas a tu medida"/>
                            </Col>
                            <Col xs={12} md={{span: 6, order: 1}} xl={6} className="text-center text-md-left align-self-center">
                                <h2 className="title-bold">Lili, <span className="text-col1">todo más simple</span><br/> y claro.</h2>

                                <ul className="list-unstyled mt-md-5">
                                    <li className="media">
                                        <img src={time} className="mh-buleticon  mr-3" alt="..."/>
                                            <div className="media-body text-secondary">
                                                Lili es simple, todos los trámites se realizan en pocos pasos y usando nuestra plataforma. Nunca tendrás que ir a una sucursal.
                                            </div>
                                    </li>
                                    <li className="media my-4">
                                        <img src={searchmedical} className="mh-buleticon mr-3" alt="..."/>
                                            <div className="media-body text-secondary">
                                                Lili es claro, nuestro plan está diseñado para que lo entiendas y sepas como usarlo. Sin letra chica.
                                            </div>
                                    </li>
                                    <li className="media">
                                        <img src={secure} className="mh-buleticon mr-3" alt="..."/>
                                            <div className="media-body text-secondary">
                                                Al igual que tú, queremos que estés sano y no gastes de más en lograrlo. Lili es claro, escucha a tu médico de cabecera y usa tu Red cuando la necesites.
                                            </div>
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                    </Container>
                </Container>

                {/* Sección Footer*/}

                <Container fluid as="section" className="bg-col1">

                    <div className="shape-before">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path fill="#eff3f9"
                                  d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                        </svg>
                    </div>

                    <Container className="position-relative py-5">
                        <Row className="justify-content-md-center">
                            <Col md={7} className="text-center text-md-left">
                                <span className="title-bold h2 text-white m-0 d-block">Me interesa</span>
                                <span className="title-bold display-4 text-white m-0 d-block">¡Lo quiero ahora!</span>
                            </Col>
                            <Col md={3} className="align-self-center">
                                <button className="btn bg-col5 text-white d-block mx-auto h3 float-md-left my-2 py-3 px-4 shadow-lg mr-1 btn-bubble" onClick={this.props._next}>
                                    Continuar
                                </button>
                            </Col>
                        </Row>

                        <a className="rounded-circle position-absolute shadow bg-white text-primary text-white text-center dynamicanchor-footer h3 anchoranim"  href="#top"><i className="ic ic-arrowright rotate-m90"></i></a>

                    </Container>

                </Container>

            </React.Fragment>
        )
    }
}

export default Step0;