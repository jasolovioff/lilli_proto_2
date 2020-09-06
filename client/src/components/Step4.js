import React, {Component, useState} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import DetalleCobro from "./DetalleCobro";
import Simulation from "../utils/Simulation";
import redes from "../utils/redes";

class Step4 extends Component{
    state = {};
    constructor(props) {
        super(props);
        this.state = {
            showDetalleCobro : false
        }
        this.toogleDetalleCobro = this.toogleDetalleCobro.bind(this);
        this.hideDetalleCobro = this.hideDetalleCobro.bind(this);
    }

    toogleDetalleCobro = () => {
        console.log("toggelin!")
        this.setState(prevState => ({
            showDetalleCobro : !prevState.showDetalleCobro
        }));
    }

    hideDetalleCobro(){
        this.setState({
            showDetalleCobro : false
        })
    }

    getRedDetail(redTag){
        for(let key in redes){
            if(redTag === redes[key].tag){
                return redes[key];
            }
        }
        return {
            name: "None",
            tag: "none",
            clinics: []
        }
    }

    render() {
        if (this.props.currentStep !== 4) {
            return null;
        }
        console.log(this.state);
        let formatter = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'});
        let floatFormat = new Intl.NumberFormat('es-CL');
        const UF = this.props.UF;
        const age = this.props.upperState.age;
        const preference = this.props.upperState.preference.split('-');
        const red = preference[0];
        const deductible = parseInt(preference[1]);
        const cargas = this.props.upperState.cargas;
        const simulation = new Simulation();
        simulation.calculatePlanDetail(age, red, deductible, cargas);
        const planDetail = simulation.getPlanDetail();
        const totalPrice = simulation.calculateTotalPrice(age, red, deductible, cargas);
        const redDetail = this.getRedDetail(red);
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
                                <h2 className="title mb-0">Tu resumen</h2>

                                <Form.Group>
                                    <Row>
                                        <Col xs={6} sm={6} className="text-center align-self-center">
                                                <span className="h4 text-col1">Tu pago mensual</span>
                                                <h2 className="font-weight-bold title text-col1 mb-0">UF {floatFormat.format(totalPrice.toFixed(2))}</h2>
                                                <h5 className="text-black-50">{formatter.format(totalPrice.toFixed(2)*UF)}</h5>
                                                <span className="h4 text-right text-col5 text-hv-col5"
                                                      data-toggle="collapse" role="button"
                                                      onClick={this.toogleDetalleCobro}
                                                      aria-controls="detallecobro"
                                                      aria-expanded={this.state.showDetalleCobro}>
                                                Ver el detalle aquí
                                                </span>
                                        </Col>
                                        <Col xs={6} sm={6} className="text-center border-left">
                                            <span className="h4 text-muted">Tu deducible</span>
                                            <h2 className="font-weight-bold title text-col4 mb-0">UF {deductible}</h2>
                                            <h5 className="text-black-50">{formatter.format(deductible.toFixed(2)*UF)}</h5>
                                        </Col>
                                    </Row>

                                </Form.Group>

                                    <Collapse in={this.state.showDetalleCobro}>
                                        <Form.Group id="detallecobro">
                                            <DetalleCobro planDetail={planDetail} totalPrice={totalPrice}/>
                                        </Form.Group>
                                    </Collapse>

                                <Form.Group>
                                    <Row className="mt-5">
                                        <Col xs={12}>
                                            <Tab.Container defaultActiveKey="antes-tab">
                                                <Nav variant="tabs" className="border-0 d-flex bd-highlight row">
                                                <span className="col-12 col-sm-auto flex-grow-1 bd-highlight">
                                                    <h4 className="title-bold text-col1 text-center text-sm-left pt-1" >Coberturas</h4>
                                                </span>
                                                    <Nav.Item className="col-6 col-sm-auto pr-md-0 bd-highlight" role="presentation">
                                                        <Nav.Link className="border-0 text-muted text-center text-sm-left position-relative" eventKey="antes-tab">Antes de deducible</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="col-6 col-sm-auto pr-md-0 bd-highlight">
                                                        <Nav.Link className="border-0 text-center text-sm-left position-relative text-muted" eventKey="despues-tab">Después de deducible</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                                <Tab.Content className="shadow rounded-lg border-top border-bottom bg-col1 mt-1 py-5">
                                                    <Tab.Pane className="px-3 fade" eventKey="antes-tab">
                                                        <ul className="list-unstyled">
                                                            <li className="media">
                                                            <span
                                                                className="title-bold text-col4 h3 mr-3 w-80px">100%</span>
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-1 text-white">
                                                                        <span className=" font-weight-bold">Médico de cabecera.</span><br/>
                                                                        Atención personalizada y sin costo de un médico de
                                                                        familia
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                            <li className="media my-4">
                                                            <span
                                                                className="title-bold text-col4 h3 mr-3 w-80px">20%</span>
                                                                <div className="media-body mt-2">
                                                                    <h5 className="mt-0 mb-1 text-white">
                                                                        Mínima legal para todas las prestaciones
                                                                        independiente de la Red
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </Tab.Pane>
                                                    <Tab.Pane className="px-3 fade" eventKey="despues-tab">
                                                        <ul className="list-unstyled">
                                                            <li className="media">
                                                                <span className="title-bold text-col4 h3 mr-3 w-80px">100%</span>
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-1 text-white">
                                                                        <span className="font-weight-bold">Médico de cabecera.</span><br/>
                                                                        Atención personalizada y sin costo de un médico de
                                                                        familia
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                            <li className="media my-4">
                                                            <span
                                                                className="title-bold text-col4 h3 mr-3 w-80px">80%</span>
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-1 text-white">
                                                                        <span className="font-weight-bold">Cobertura hospitalaria en {redDetail.name}</span><br/>
                                                                        + 20% cobertura adicional por derivaciones médico de
                                                                        cabecera
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                            <li className="media">
                                                            <span
                                                                className="title-bold text-col4 h3 mr-3 w-80px">70%</span>
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-1 text-white">
                                                                        <span className="font-weight-bold">Cobertura ambulatoria en {redDetail.name}</span><br/>
                                                                        +20% cobertura adicional por derivaciones médico de
                                                                        cabecera
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                            <li className="media mt-4">
                                                            <span
                                                                className="title-bold text-col4 h3 mr-3 w-80px">20%</span>
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-1 text-white">
                                                                        Mínima legal para todas las prestaciones realizadas
                                                                        fuera de la {redDetail.name}
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                            <li className="media mt-4">
                                                            <span
                                                                className="title-bold text-col4 h3 mr-3 w-80px">{redDetail.name}</span>
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-1 text-white">
                                                                        {redDetail.clinics.map((clinic, k)=>
                                                                            <span key={k}>{clinic}<br/></span>
                                                                        )}
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Tab.Container>
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <div className="form-group mt-5">
                                    <a href={"http://surveys-online.surveytaking.com/index.php/265219?lang=es&newtest=Y&owid=" + this.props.owid} className="btn bg-col1 text-white d-block mx-auto float-md-right my-2 py-3 px-4 shadow-lg mr-1 btn-bubble" onClick={this.props._next}>Continuar</a>
                                    <span className="btn float-md-right text-col1 text-hv-col1 d-block mx-auto mr-md-2 my-2 py-3 px-4 btn-bubble" onClick={(event)=> {this.props._prev(event); this.hideDetalleCobro()}}>Volver</span>
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