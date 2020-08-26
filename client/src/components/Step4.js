import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
//import Simulation from "../utils/Simulation";
import diamond from "../static/images/diamond.svg";
import DetalleCobro from "./DetalleCobro";
import Collapse from "react-bootstrap/cjs/Collapse";
import Simulation from "../utils/Simulation";
import ComparaConLili from "./ComparaConLili";

class Step4 extends Component{
    state = {}
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
    componentDidMount() {
        console.log("component did mount");
        window.scrollTo(0, 0);
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
        const income = this.props.upperState.income;
        const currentPayment = this.props.upperState.currentPayment;
        const simulation = new Simulation(age, red, deductible, cargas);
        const monthlyPayment = simulation.calculateTotalPrice(age,red, deductible, cargas);
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

                                <ComparaConLili monthlyPayment={monthlyPayment} income={income} currentPayment={currentPayment} UF={UF}/>

                                <Form.Group>
                                    <h4 className="font-weight-bold text-col1">Detalle</h4>
                                </Form.Group>
                                <div className="d-block w-100 pb-3 mb-3">
                                    <Row>
                                        <Col xs={12} className="text-col1"><span className="h5">Prima</span></Col>
                                        <Col xs={3}>
                                            <h3 className="font-weight-bold title text-col1 mb-0">UF {monthlyPayment.toFixed(2)}</h3>
                                            <h4 className="text-black-50">{formatter.format(monthlyPayment.toFixed(2)*UF)}</h4>
                                        </Col>
                                        <Col xs={9} className="divisor-right">
                                            <p className="text-muted">
                                                Pago que debes realizar todos los meses.
                                            </p>
                                        </Col>
                                        <Col xs={12} className="text-left">
                                            <a className="h6 text-right text-col5" data-toggle="collapse" role="button" aria-expanded="false"
                                               aria-controls="detallecobro" onClick={this.toogleDetalleCobro}>Ver
                                                detalle</a>
                                        </Col>
                                    </Row>
                                    <Collapse in={this.state.showDetalleCobro}>
                                        <div id="detallecobro">
                                            <DetalleCobro simulation={simulation} />
                                        </div>
                                    </Collapse>
                                </div>

                                <div className="d-block w-100 pb-3 mb-3">
                                    <Row>
                                        <Col xs={12} className="text-col1"><span className="h5">Deducible anual</span>
                                        </Col>
                                        <Col xs={3}>
                                            <h3 className="font-weight-bold title text-col1 mb-0">UF {this.props.upperState.deducible}</h3>
                                            <h4 className="text-black-50">{formatter.format(this.props.upperState.deducible*UF)} <small>(individual)</small></h4>
                                        </Col>
                                        <Col xs={9} className="divisor-right">
                                            <p className="text-muted">
                                                Monto de copago acumulado que tienes que pagar por persona antes de que
                                                se activen las coberturas.
                                            </p>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="d-block w-100 pb-3 mb-3">
                                    <Row>
                                        <Col xs={12} className="text-col1"><span className="h5">Tope anual</span></Col>
                                        <Col xs={3}>
                                            <h3 className="font-weight-bold title text-col1 mb-0">UF 200</h3>
                                            <h4 className="text-black-50">{formatter.format(200*UF)} <small>(individual)</small></h4>
                                        </Col>
                                        <Col xs={9} className="divisor-right">
                                            <p className="text-muted">
                                                Monto máximo de copago anual por persona. Una vez alcanzado el tope, la
                                                cobertura será del 100%, solo en la Red seleccionada.
                                            </p>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="border-top border rounded p-4 bg-light">

                                    <Form.Group className="border-bottom">
                                        <h4 className="font-weight-bold text-col1">Tus coberturas podrían ser:</h4>
                                    </Form.Group>

                                    <div className="d-block w-100 mb-3">
                                        <Row>
                                            <Col xs={3}><h3
                                                className="font-weight-bold title text-col1 mb-0">100%</h3></Col>
                                            <Col xs={9} className="divisor-right">
                                                <p className="text-secondary">
                                                    Médico de cabecera.<br/>
                                                    Atención personalizada y sin costo de un médico de familia (antes y
                                                    después del deducible).
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="d-block w-100 mb-3">
                                        <Row>
                                            <Col xs={3}><h3
                                                className="font-weight-bold title text-col1 mb-0">80%</h3></Col>
                                            <Col xs={9} className="divisor-right">
                                                <p className="text-secondary">
                                                    Hospitalizaciones.<br/>
                                                    Después de deducible y en Red seleccionada.
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>


                                    <div className="d-block w-100 mb-3">
                                        <Row>
                                            <Col xs={3}><h3
                                                className="font-weight-bold title text-col1 mb-0">70%</h3></Col>
                                            <Col xs={9} className="divisor-right">
                                                <p className="text-secondary">
                                                    Consultas, exámenes y procedimientos ambulatorios.<br/>
                                                    Después de deducible y en Red seleccionada.
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="d-block w-100 mb-3">
                                        <Row>
                                            <Col xs={3}><h3
                                                className="font-weight-bold title text-col1 mb-0">20%</h3></Col>
                                            <Col xs={9} className="divisor-right">
                                                <p className="text-secondary">
                                                    Derivaciones médico de cabecera.<br/>
                                                    Cobertura adicional después de deducible.
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>

                                <div className="form-group mt-5">
                                    <a className="btn bg-col1 text-white d-block mx-auto float-md-right my-2 mr-1 py-3 px-4 shadow-lg btn-bubble"
                                       data-toggle="modal" data-target="#siLoQuieroModal" onClick={() => this.handleShowLoQuiero()}>Sí, lo quiero</a>
                                    <a className="btn border-col1 float-md-right text-col1 text-hv-col1 d-block mx-auto my-2 mr-lg-3 py-3 px-4 btn-bubble"
                                       data-toggle="modal" data-target="#noLoQuieroModal" onClick={() => this.handleShowNoLoQuiero()}>No me interesa</a>
                                    <a className="btn float-md-right text-col1 text-hv-col1 d-block mx-auto mr-md-2 my-2 py-3 px-4 btn-bubble" onClick={this.props._prev}>Volver</a>
                                </div>


                                {/*!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                Modal - Lo quiero
                                    ************************************************************** --*/}
                                   
                                <Modal className="fade" id="siLoQuieroModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" show={this.state.showModalLoQuiero} onHide={() => this.handleHideLoQuiero()}>
                                    <Modal.Dialog className="modal-dialog">
                                        <div className="modal-content">
                                            <Modal.Header className="modal-header border-0">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.handleHideLoQuiero()}>
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </Modal.Header>
                                            <Modal.Body className="modal-body">

                                                <div className="d-block w-100">
                                                    <h2 className="title text-center ">¡Listo!</h2>
                                                    <h5 className="text-center text-secondary">Por favor, ingresa tu email para continuar con el proceso.</h5>
                                                </div>

                                                <div className="px-4 mt-5">
                                                    <div className="d-block w-100 my-5">
                                                        <div className="label-hv-animate col-8 mx-auto p-0">
                                                            <Form.Control type="email"
                                                                   className="form-control rounded-0 text-center w-100 border-0 bg-light"
                                                                   aria-describedby="mail"
                                                                   placeholder="(Ejm.) minombre@ejemplo.com"/>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Modal.Body>

                                            <Modal.Footer className="modal-footer border-0">
                                                <a href="#"
                                                   className="btn bg-col1 text-white d-block mx-auto my-2 py-2 px-4 btn-bubble"
                                                   data-dismiss="modal"  onClick={() => this.handleHideLoQuiero()}>Enviar</a>
                                            </Modal.Footer>
                                        </div>
                                    </Modal.Dialog>
                                </Modal>


                                {/*!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                Modal - No me interesa
                                    ************************************************************** --*/}
                                <Modal className="fade" id="noLoQuieroModal" tabIndex="-1" aria-hidden="true" show={this.state.showModalNoLoQuiero}  onHide={() => this.handleHideNoLoQuiero()}>
                                    <Modal.Dialog>
                                        <div className="modal-content">

                                            <Modal.Header className="border-0">
                                                <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close" onClick={() => this.handleHideNoLoQuiero()}>
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </Modal.Header>
                                            <Modal.Body>

                                                <div className="d-block w-100">
                                                    <h2 className="title text-center m-0">Gracias</h2>
                                                    <Modal.Footer className="modal-footer border-0">
                                                        <a href="#"
                                                           className="btn bg-col1 text-white d-block mx-auto my-2 py-2 px-4 btn-bubble"
                                                           data-dismiss="modal" onHide={() => this.handleHideNoLoQuiero()}>Salir</a>
                                                    </Modal.Footer>
                                                </div>
                                            </Modal.Body>
                                        </div>
                                    </Modal.Dialog>
                                </Modal>

                            </Col>
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}

export default Step4;