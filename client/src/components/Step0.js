import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//import Carousel from "react-bootstrap/Carousel";

import slider01 from "../static/images/slider01.png";
//import slider02 from "../static/images/slider02.png";
//import slider03 from "../static/images/slider03.png";
//import whatif01 from "../static/images/whatif01.png";
//import whatif02 from "../static/images/whatif02.png";
import whatif03 from "../static/images/whatif03.png";
import whatif04 from "../static/images/whatif04.png";
import whatif05 from "../static/images/whatif05.png";
import whatif06 from "../static/images/whatif06.png";
import whatif07 from "../static/images/whatif07.png";

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
                                <h1 className="display-3 text-center text-md-left title-bold">
                                    Tu Salud <span className="text-col5">Simple</span>, <br/>
                                    Conmigo.
                                </h1>
                                <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
                                    Una nueva forma de ser Isapre.<br/>
                                    Médico de cabecera a tu servicio.<br/>
                                    Precio y cobertura a tu medida.
                                </p>
                                <a href="#explora"
                                   className="col-12 col-md-6 btn shadow-lg bg-col5 text-white mt-2 py-3  btn-bubble">
                                    Conoce a Lili
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                {/* Sección 2*/}
                <Container fluid as="section" className="bg-col2">


                    <div className="shape-before">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path fill="#FFFFFF"
                                  d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                        </svg>
                    </div>


                    <Container id="explora">

                        <Row className="pt-4">
                            <Col className="col-12">
                                <h2 className="title-bold text-center">Tu <span className="">Médico</span> de cabecera
                                </h2>
                            </Col>
                        </Row>

                        <Row className="pb-5 mb-5">
                            <Col xs={12}>
                                <div className="carousel slide px-5" data-ride="carousel">

                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleCaptions" data-slide-to="0"
                                            className="active"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">

                                        <div className="carousel-item active">
                                            <Row>
                                                <Col xs={12} sm={{span: 6, order: 1}} lg={5}>
                                                    <img src={whatif05} className="d-block w-100" alt="Tu Salud, Simple, Conmigo"/>
                                                </Col>
                                                <Col xs={12} sm={{span:6, order: 2}} lg={7} className="text-center text-md-left align-self-center">
                                                    <span className="h2 title">Lili una guía personalizada</span>
                                                    <p>Lili te ofrece la guía personalizada de un médico que te encamina
                                                        hacia un pronto diagnóstico, derivación y tratamiento.</p>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="carousel-item">
                                            <Row>
                                                <Col xs={12} sm={{span:6, order:2}} lg={5}>
                                                    <img src={whatif06} className="d-block w-100" alt="Tu Salud, Simple, Conmigo"/>
                                                </Col>
                                                <div
                                                    className="col-12 col-sm-6 order-sm-1 col-lg-7 text-center text-md-left align-self-center">
                                                    <span className="h2 title">Consultar a tu medico</span>
                                                    <p>Podrás consultar a tu medico Lili, sin costo, cada vez que
                                                        necesitas orientación.</p>
                                                </div>
                                            </Row>
                                        </div>

                                        <div className="carousel-item">
                                            <Row>
                                                <Col xs={12} sm={{span:6, order:1}} lg={5}>
                                                    <img src={whatif07} className="d-block w-100" alt="Tu Salud, Simple, Conmigo"/>
                                                </Col>
                                                <Col xs={12} sm={{span:6, order:2}} lg={7} className="text-center text-md-left align-self-center">
                                                    <span className="h2 title">20% de cobertura adicional.</span>
                                                    <p>¡Ojo! Las prestaciones indicadas por tu medico Lili siempre tiene
                                                        un 20% de cobertura adicional.</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                {/* Sección 3*/}

                <Container fluid as="section">

                    <div className="shape-after">
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "200px", width: "100%"}}>
                            <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
                                  style={{stroke: "none", fill:"rgb(255 205 57)"}}></path>
                        </svg>
                    </div>

                    <Row>
                        <Col xs={12}>
                            <h2 className="title-bold text-center">¿Qué <span className="text-col5">beneficios</span> tiene Lili para ti?</h2>
                        </Col>
                    </Row>

                    <Container>
                        <Row className="py-5 my-4">
                            <Col xs={12} md={{span:6, order:2}} xl={5}>
                                <img src={whatif04} className="d-block w-100" alt="Foto Precios y coberturas a tu medida"/>
                            </Col>
                            <Col xs={12} md={{span:6, order:1}} xl={7} className="text-center text-md-left align-self-center">
                                <h3 className="title">Precios y <span className="text-col5">coberturas</span> a tu
                                    medida</h3>
                                <p className="text-secondary">
                                    Lili es más conveniente porque usa deducible. Mientras más alto sea, más bajo será
                                    el valor mensual del plan. ¡Tú elijes¡
                                    <br/><br/>
                                        El deducible es monto de copago acumulado que tienes que pagar en el año (grupal
                                        o individual), antes de que se activen las coberturas adicionales.
                                        <br/><br/>
                                            Tu financias tus gastos médicos* hasta completar el deducible; después,
                                            nosotros nos haremos cargo de hasta el 100%, según donde te atiendas y si
                                            fuiste derivado por tu médico lili.
                                </p>
                                <span className="p text-col5 font-italic">¡Ojo! Siempre podrás consultar a tu médico Lili sin costo.</span>
                            </Col>
                        </Row>

                        <Row className="py-4">
                            <Col xs={12} md={6} xl={5}>
                                <img src={whatif03} className="d-block w-100" alt="Foto Usa tu Red para mayor cobertura"/>
                            </Col>
                            <Col xs={12} md={6} xl={7} className="text-center text-md-left align-self-center">
                                <h3 className="title">Usa tu <span className="text-col5">Red</span> para mayor cobertura
                                </h3>
                                <p className="text-secondary">
                                    Elige la Red de Clínicas en la que te quieras atender.
                                    <br/><br/>
                                        Si te atiendes en esta Red, las hospitalizaciones tienen 80% de cobertura
                                        después del deducible, que se transforma en un 100% si te deriva tu médico Lili.
                                        <br/><br/>
                                            En consultas, exámenes y procedimientos ambulatorios, tienes un 70% de
                                            cobertura en la Red después del deducible, que será un 90% si te deriva tu
                                            médico Lili.
                                </p>
                                <span className="p text-col5 font-italic">¡Ojo! Siempre podrás consultar a tu médico Lili sin costo.</span>
                            </Col>
                        </Row>

                        <Row className="py-5 my-4">
                            <Col xs={12} md={{span:6, order:2}} xl={5}>
                                <img src={whatif05} className="d-block w-100" alt="Foto Precios y coberturas a tu medida"/>
                            </Col>
                            <Col xs={12} md={{span:6, order:1}} xl={7} className="text-center text-md-left align-self-center">
                                <h3 className="title">Loremipsum <span className="text-col5">Lorm ipsum</span> Lorem
                                    ipsum in dore</h3>
                                <p className="text-secondary">
                                    Lorem ipsum in dore emme porrro noque sere ipsum in dore emme porrro noque sereipsum
                                    in dore emme porrro noque sere
                                    Lorem ipsum in dore emme porrro noque sere ipsum in dore emme porrro noque sereipsum
                                    in dore emme porrro noque sere
                                    <br/><br/>
                                        Lorem ipsum in dore emme porrro noque sere ipsum in dore emme porrro noque
                                        sereipsum in dore emme porrro noque sere

                                        <br/><br/>
                                            Lorem ipsum in dore emme porrro noque sere ipsum in dore emme porrro noque
                                            sereipsum in dore emme porrro noque sere
                                            Tu financias tus gastos médicos* hasta completar el deducible, después,
                                            nosotros nos hacemos cargo de hasta el 100%, según donde te atiendas y si
                                            fuiste derivado por tu medico lili.
                                </p>
                            </Col>
                        </Row>

                    </Container>
                </Container>

                {/* Sección 4*/}

                <Container fluid as="section" className="bg-primary">

                    <div className="shape-before">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path fill="#FFFFFF"
                                  d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                        </svg>
                    </div>

                    <Container className="position-relative py-5">
                        <Row className="justify-content-md-center">
                            <Col md={7} className="text-center text-md-left">
                                <span className="title-bold h3 text-white m-0 d-block">Me interesa</span>
                                <span className="title-bold h1 text-white m-0 d-block">¡Lo quiero ahora!</span>
                            </Col>
                            <Col md={3} className="align-self-center">
                                <a href="configura-1.html" className="btn bg-col5 text-white d-block mx-auto float-md-left my-2 py-3 px-4 shadow-lg mr-1 btn-bubble">
                                    Comienza ahora
                                </a>
                            </Col>
                        </Row>

                        <a className="rounded-circle position-absolute shadow bg-white text-primary text-white text-center dynamicanchor-footer h3"  href="#top"><i className="ic ic-arrowright rotate-m90"></i></a>

                    </Container>

                </Container>

            </React.Fragment>
        )
    }
}

export default Step0;