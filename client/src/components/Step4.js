import React, {Component, useState} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import DetalleCobro from "./DetalleCobro";
import Simulation from "../utils/Simulation";

class Step4 extends Component{
    state = {};
    owid = "testOWID";
    constructor(props) {
        super(props);
        this.state = {
            showDetalleCobro : false
        }
        this.toogleDetalleCobro = this.toogleDetalleCobro.bind(this);
    }

    toogleDetalleCobro = () => {
        console.log("toggelin!")
        this.setState(prevState => ({
            showDetalleCobro : !prevState.showDetalleCobro
        }));
    }

    render() {
        if (this.props.currentStep !== 4) {
            return null;
        }
        console.log(this.state);
        var formatter = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'});
        const UF = 28674.82;
        const age = this.props.upperState.age;
        const preference = this.props.upperState.preference.split('-');
        const red = preference[0];
        const deductible = preference[1];
        const cargas = this.props.upperState.cargas;
        const simulation = new Simulation();
        simulation.calculatePlanDetail(age, red, deductible, cargas);
        const planDetail = simulation.getPlanDetail();
        return (
            <React.Fragment>
                <Container fluid as="section">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs={12} lg={6} className="rounded shadow-lg bg-white overflow-hidden p-4 mb-5">

                                <Row className="progress position-relative"
                                     style={{height: "6px", top: "-25px", margin: "0 -26px"}}>
                                    <div className="progress-bar stretchRight bg-col6" role="progressbar"
                                         style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </Row>

                                <span className="h6 text-black-50 m-0">Paso {this.props.currentStep}</span>
                                <h2 className="title mb-5">Tu resumen</h2>


                                <Form.Group>
                                    <Row>
                                        <Col xs={6} sm={6} className="text-center align-self-center">
                                                <span className="h5 text-col1">Tu pago mensual</span>
                                                <h2 className="font-weight-bold title text-col1 mb-0">UF 6,87</h2>
                                                <h5 className="text-black-50">$197.169</h5>
                                                <span className="h4 text-right text-col5 text-hv-col5"
                                                      data-toggle="collapse" role="button"
                                                      onClick={this.toogleDetalleCobro}
                                                      aria-controls="detallecobro"
                                                      aria-expanded={this.state.showDetalleCobro} >
                                                Ver el detalle aquí
                                                </span>
                                        </Col>
                                        <Col xs={6} sm={6} className="text-center border-left">
                                            <span className="h4 text-muted">Tu deducible</span>
                                            <h2 className="font-weight-bold title text-col4 mb-0">UF 10</h2>
                                            <h5 className="text-black-50">$286.813</h5>
                                        </Col>
                                    </Row>
                                    <Collapse in={this.state.showDetalleCobro}>
                                        <div id="detallecobro">
                                            <DetalleCobro planDetail={planDetail}/>
                                        </div>
                                    </Collapse>

                                <Row className="mt-5">
                                    <Col xs={12}>
                                        <ul className="nav nav-tabs border-0 d-flex bd-highlight" role="tablist">
                                            <li className="flex-grow-1 bd-highlight">
                                                <h4 className="title-bold text-col1 pt-1">Deducible</h4>
                                            </li>
                                            <li className="nav-item bd-highlight" role="presentation">
                                                <a className="nav-link border-0 text-muted active" id="home-tab" data-toggle="tab" href="#dedusibleantes" role="tab" aria-controls="dedusibleantes" aria-selected="true">Antes</a>
                                            </li>
                                            <li className="nav-item bd-highlight" role="presentation">
                                                <a className="nav-link border-0 text-muted" id="profile-tab" data-toggle="tab" href="#dedusibledespues" role="tab" aria-controls="dedusibledespues" aria-selected="false">Después</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content shadow rounded-lg border-top border-bottom bg-col1 mt-1 py-3 " id="myTabContent">
                                            <div className="tab-pane px-3 fade show active" id="dedusibleantes" role="tabpanel" aria-labelledby="home-tab">
                                                <ul className="list-unstyled">
                                                    <li className="media">
                                                        <span className="title-bold text-col4 h3 mr-3 w-80px" >100%</span>
                                                        <div className="media-body">
                                                            <h5 className="mt-0 mb-1 text-white">
                                                                <span className=" font-weight-bold">Médico de cabecera.</span><br/>
                                                                Atención personalizada y sin costo de un médico de familia
                                                            </h5>
                                                        </div>
                                                    </li>
                                                    <li className="media my-4">
                                                        <span className="title-bold text-col4 h5 mr-3 w-80px">Sin cobertura </span>
                                                        <div className="media-body">
                                                            <h5 className="mt-0 mb-1 text-white">
                                                                Solo mínima legal para prestaciones hospitalarias y ambulatorias
                                                            </h5>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="tab-pane px-3 fade" id="dedusibledespues" role="tabpanel" aria-labelledby="profile-tab">
                                                <ul className="list-unstyled">
                                                    <li className="media">
                                                        <span className="title-bold text-col4 h3 mr-3 w-80px" >100%</span>
                                                        <div className="media-body">
                                                            <h5 className="mt-0 mb-1 text-white">
                                                                <span className="font-weight-bold">Médico de cabecera.</span><br/>
                                                                Atención personalizada y sin costo de un médico de familia
                                                            </h5>
                                                        </div>
                                                    </li>
                                                    <li className="media my-4">
                                                        <span className="title-bold text-col4 h3 mr-3 w-80px">80%</span>
                                                        <div className="media-body">
                                                            <h5 className="mt-0 mb-1 text-white">
                                                                <span className="font-weight-bold">Cobertura hospitalaria en Red 1</span><br/>
                                                                + 20% cobertura adicional por derivaciones médico de cabecera
                                                            </h5>
                                                        </div>
                                                    </li>
                                                    <li className="media">
                                                        <span className="title-bold text-col4 h3 mr-3 w-80px">70%</span>
                                                        <div className="media-body">
                                                            <h5 className="mt-0 mb-1 text-white">
                                                                <span className="font-weight-bold">Cobertura ambulatoria en Red 1</span><br/>
                                                                +20% cobertura adicionalpor derivaciones médico de cabecera
                                                            </h5>
                                                        </div>
                                                    </li>
                                                    <li className="media mt-4">
                                                        <span className="title-bold text-col4 h3 mr-3 w-80px">Red 1</span>
                                                        <div className="media-body">
                                                            <h5 className="mt-0 mb-1 text-white">
                                                                Red Salud Stgo. y Providencia<br/>
                                                                Clínica Dávila<br/>
                                                                Clínica Vespucio<br/>
                                                            </h5>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </Form.Group>


                                <div className="form-group mt-5">
                                    <a href={"http://surveys-online.surveytaking.com/index.php/265219?lang=es&newtest=Y&owid=" + this.props.owid} className="btn bg-col1 text-white d-block mx-auto float-md-right my-2 py-3 px-4 shadow-lg mr-1 btn-bubble" onClick={this.props._next}>Continuar</a>
                                    <button className="btn float-md-right text-col1 text-hv-col1 d-block mx-auto mr-md-2 my-2 py-3 px-4 btn-bubble" onClick={this.props._prev}>Volver</button>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}

export default Step4;