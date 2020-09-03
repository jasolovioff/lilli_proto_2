import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import DetalleCobro from "./DetalleCobro";
import Collapse from "react-bootstrap/cjs/Collapse";
import Simulation from "../utils/Simulation";

class Step4 extends Component{
    state = {};
    owid = "testOWID";
    constructor(props) {
        super(props);
        this.state = {
            showModalLoQuiero : false,
            showModalNoLoQuiero : false,
            showDetalleCobro : false
        }
        this.toogleDetalleCobro = this.toogleDetalleCobro.bind(this);
    }

    handleShowLoQuiero() {
        this.setState({
            showModalLoQuiero : true
        });
    }
    handleHideLoQuiero() {
        this.setState({
            showModalLoQuiero : false
        });
    }

    handleShowNoLoQuiero() {
        this.setState({
            showModalNoLoQuiero : true
        });
    }
    handleHideNoLoQuiero() {
        this.setState({
            showModalNoLoQuiero : false
        });
    }

    toogleDetalleCobro = () => {
        this.setState(prevState => ({
            showDetalleCobro : !prevState.showDetalleCobro
        }));
    }

    render() {
        if (this.props.currentStep !== 4) {
            return null;
        }
        var formatter = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'});
        const UF = 28674.82;
        const age = this.props.upperState.age;
        const red = this.props.upperState.eligered;
        const deductible = this.props.upperState.deducible;
        const cargas = this.props.upperState.cargas;
        const simulation = new Simulation(age, red, deductible, cargas);
        //const monthlyPayment = simulation.calculateTotalPrice(age,red, deductible, cargas);
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
                                        <Col xs={12} sm={5} className="text-center text-sm-left align-self-center">
                                            <span>
                                                <span className="h5 text-col1">Prima</span>
                                                <h2 className="font-weight-bold title text-col1 mb-0">UF 6,87</h2>
                                                <h5 className="text-black-50">$197.169</h5>
                                            </span>
                                        </Col>
                                        <Col xs={12} sm={7} className="text-center align-self-center">
                                            <span className="end-msg d-block mb-0 title-bold text-col4">
                                                Tu pago mensual
                                            </span>
                                            <a className="h3 text-right text-col5 text-hv-col5" data-toggle="collapse" href="#detallecobro" role="button" aria-expanded="false" aria-controls="detallecobro">
                                             Ver el detalle aquí
                                            </a>
                                        </Col>
                                    </Row>

                                    <Row className="bg-light collapse" id="detallecobro">
                                        <div className="b-block w-100 pt-3 px-3 h6 ">
                                            <Row className="row border-bottom py-1 px-2">
                                                <Col xs={5} className="font-weight-bold text-left text-muted"></Col>
                                                <Col xs={1} className="font-weight-bold text-left text-muted">Precio Base</Col>
                                                <Col xs={1} className="text-right text-muted"></Col>
                                                <Col xs={1} className="font-weight-bold text-center text-muted">Factor etario</Col>
                                                <Col xs={1} className="text-right text-muted"></Col>
                                                <Col xs={1} className="font-weight-bold text-center text-muted">Valor <br/>GES</Col>
                                                <Col xs={1} className="text-right text-muted"></Col>
                                                <Col xs={1} className="font-weight-bold text-center text-muted">Valor final</Col>
                                            </Row>
                                            <Row className="row border-bottom py-1 px-2">
                                                <Col xs={5} className="text-left text-muted">Titular</Col>
                                                <Col xs={1} className="text-center text-muted">2,03</Col>
                                                <Col xs={1} className="text-center text-muted">X</Col>
                                                <Col xs={1} className="text-center text-muted">1,3</Col>
                                                <Col xs={1} className="text-center text-muted">+</Col>
                                                <Col xs={1} className="text-center text-muted">0,66</Col>
                                                <Col xs={1} className="text-center text-muted">=</Col>
                                                <Col xs={1} className="text-center text-muted">3,30</Col>
                                            </Row>
                                            <Row className="row border-bottom py-1 px-2">
                                                <Col xs={5} className="text-left text-muted">Carga 9 Años</Col>
                                                <Col xs={1} className="text-center text-muted">2,03</Col>
                                                <Col xs={1} className="text-center text-muted">X</Col>
                                                <Col xs={1} className="text-center text-muted">1,3</Col>
                                                <Col xs={1} className="text-center text-muted">+</Col>
                                                <Col xs={1} className="text-center text-muted">0,66</Col>
                                                <Col xs={1} className="text-center text-muted">=</Col>
                                                <Col xs={1} className="text-center text-muted">3,30</Col>
                                            </Row>
                                            <Row className="row pt-3">
                                                <Col className="col-12 text-right font-weight-bold px-0">
                                                    Total: 6,87
                                                </Col>
                                            </Row>
                                            <Row className="py-3">
                                                <Col xs={11}>
                                                    <h5 className="text-muted font-italic">
                                                        *Todos los valores estan expresados en UF
                                                    </h5>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Row>



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