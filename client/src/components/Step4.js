import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
//import Simulation from "../utils/Simulation";

class Step4 extends Component{
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            showModalSiLoQuiero : false,
            showModalNoLoQuiero : false
        }
    }

    handleShow() {
        this.setState({
            showModalSiLoQuiero : true
        });
    }
    handleHide() {
        this.setState({
            showModalSiLoQuiero : false
        });
    }

    render() {
        if (this.props.currentStep !== 4) {
            return null;
        }
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

                                <span className="h6 text-muted m-0">Paso 3</span>
                                <h2 className="title mb-5">Tu resumen</h2>

                                <Form.Group>
                                    <h4 className="font-weight-bold text-col5">Tu plan podría ser:</h4>
                                </Form.Group>
                                <div className="d-block w-100 pb-3 mb-3">
                                    <Row>
                                        <Col xs={12} className="text-col5"><span className="h5">Prima</span></Col>
                                        <Col xs={3}>
                                            <h3 className="font-weight-bold title text-col5 mb-0">UF 6,87</h3>
                                            <h4 className="text-black-50">$197.169</h4>
                                        </Col>
                                        <Col xs={9} className="divisor-right">
                                            <p className="text-muted">
                                                Pago que debes realizar todos los meses.
                                            </p>
                                        </Col>
                                        <Col xs={12} className="text-left">
                                            <a className="h6 text-right text-col5" data-toggle="collapse"
                                               href="#detallecobro" role="button" aria-expanded="false"
                                               aria-controls="detallecobro">Ver
                                                detalle</a>
                                        </Col>
                                    </Row>
                                    <div className="collapse" id="detallecobro">

                                        <div className="d-block w-100 pt-2 px-4 h6 bg-light ">
                                            <Row className="row border-bottom py-1">
                                                <Col xs={4} className="font-weight-bold text-left text-muted"></Col>
                                                <Col xs={2} className="font-weight-bold text-left text-muted">Base</Col>
                                                <Col xs={2} className="font-weight-bold text-left text-muted">Factor</Col>
                                                <Col xs={2} className="font-weight-bold text-left text-muted">GES</Col>
                                                <Col xs={2} className="font-weight-bold text-right text-muted">Valor final</Col>
                                            </Row>
                                            <Row className="border-bottom py-1">
                                                <Col xs={4} className="text-left text-muted">Titular</Col>
                                                <Col xs={2} className="text-left text-muted">2,03</Col>
                                                <Col xs={2} className="text-left text-muted">1,3</Col>
                                                <Col xs={2} className="text-left text-muted">0,66</Col>
                                                <Col xs={2} className="text-right text-muted">3,30</Col>
                                            </Row>
                                            <Row className="border-bottom py-1">
                                                <Col xs={4} className="text-left text-muted">Carga 9 Años</Col>
                                                <Col xs={2} className="text-left text-muted">2,03</Col>
                                                <Col xs={2} className="text-left text-muted">1,3</Col>
                                                <Col xs={2} className="text-left text-muted">0,66</Col>
                                                <Col xs={2} className="text-right text-muted">3,30</Col>
                                            </Row>
                                            <Row className="border-bottom py-1">
                                                <Col xs={4} className="text-left text-muted">Carga 4 Años</Col>
                                                <Col xs={2} className="text-left text-muted">2,03</Col>
                                                <Col xs={2} className="text-left text-muted">0,6</Col>
                                                <Col xs={2} className="text-left text-muted">0,66</Col>
                                                <Col xs={2} className="text-right text-muted">1,88</Col>
                                            </Row>
                                            <Row className="py-3">
                                                <Col xs={12}>
                                                    <h5 className="text-muted font-italic">*Todos los valores estan
                                                        expresados en UF</h5>
                                                </Col>
                                            </Row>
                                        </div>

                                    </div>
                                </div>

                                <div className="d-block w-100 pb-3 mb-3">
                                    <Row>
                                        <Col xs={12} className="text-col5"><span className="h5">Deducible anual</span>
                                        </Col>
                                        <Col xs={3}>
                                            <h3 className="font-weight-bold title text-col5 mb-0">UF 10</h3>
                                            <h4 className="text-black-50">$287.000 <small>(individual)</small></h4>
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
                                        <Col xs={12} className="text-col5"><span className="h5">Tope anual</span></Col>
                                        <Col xs={3}>
                                            <h3 className="font-weight-bold title text-col5 mb-0">UF 200</h3>
                                            <h4 className="text-black-50">$5.740.000 <small>(individual)</small></h4>
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
                                        <h4 className="font-weight-bold text-col5">Tus coberturas podrían ser:</h4>
                                    </Form.Group>

                                    <div className="d-block w-100 mb-3">
                                        <Row>
                                            <Col xs={3}><h3
                                                className="font-weight-bold title text-col5 mb-0">100%</h3></Col>
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
                                                className="font-weight-bold title text-col5 mb-0">70%</h3></Col>
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
                                                className="font-weight-bold title text-col5 mb-0">80%</h3></Col>
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
                                                className="font-weight-bold title text-col5 mb-0">20%</h3></Col>
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
                                    <Button as="a"
                                       className="bg-col5 text-white d-block mx-auto float-md-right my-2 mr-1 py-3 px-4 shadow-lg btn-bubble"
                                       data-toggle="modal" data-target="#siLoQuieroModal" onClick={() => this.handleShow()}>Sí, lo quiero</Button>
                                    <a href="#"
                                       className="btn border-col5 float-md-right text-col5 text-hv-col5 d-block mx-auto my-2 mr-lg-3 py-3 px-4 btn-bubble"
                                       data-toggle="modal" data-target="#nointeresa">No me interesa</a>
                                    <a href="configura-2.html"
                                       className="btn float-md-right text-col5 text-hv-col5 d-block mx-auto mr-md-2 my-2 py-3 px-4 btn-bubble">Volver</a>
                                </div>


                                {/*!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                Modal - Lo quiero
                                    ************************************************************** --*/}
                                   
                                <Modal className="fade" id="siLoQuieroModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" show={this.state.showModalSiLoQuiero} >
                                    <Modal.Dialog className="modal-dialog">
                                        <div className="modal-content">

                                            <Modal.Header className="modal-header border-0">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.handleHide()}>
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
                                                   className="btn bg-col5 text-white d-block mx-auto my-2 py-2 px-4 btn-bubble"
                                                   data-dismiss="modal" onClick={() => this.handleHide()}>Enviar</a>
                                            </Modal.Footer>
                                        </div>
                                    </Modal.Dialog>
                                </Modal>


                                {/*!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                Modal - No me interesa
                                    ************************************************************** --*/}
                                <Modal className="fade" id="nointeresa" tabIndex="-1" aria-hidden="true">
                                    <Modal.Dialog>
                                        <div className="modal-content">

                                            <Modal.Header className="border-0">
                                                <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </Modal.Header>
                                            <Modal.Body>

                                                <div className="d-block w-100">
                                                    <h2 className="title text-center m-0">Cuéntanos</h2>
                                                    <h5 className="text-center text-secondary">¿Por qué no te interesa
                                                        Lili?</h5>
                                                    <div>
                                                        <div className="px-4 mt-5">
                                                            <div
                                                                className="custom-control custom-radio sd-option-list mb-3">
                                                                <Form.Control type="radio" id="nomeinteresa1" name="deducible"
                                                                       className="custom-control-input"/>
                                                                    <Form.Label
                                                                        className="custom-control-label text-secondary h5 pt-2"
                                                                        htmlFor="nomeinteresa1">
                                                                        Lorem ipsum in dore ement noque porro
                                                                    </Form.Label>
                                                            </div>

                                                            <div>
                                                                className="custom-control custom-radio sd-option-list mb-3">
                                                                <Form.Control type="radio" id="nomeinteresa2" name="deducible"
                                                                       className="custom-control-input"/>
                                                                    <Form.Label
                                                                        className="custom-control-label text-secondary h5 pt-2"
                                                                        htmlFor="nomeinteresa2">
                                                                        Lorem ipsum in dore ement
                                                                    </Form.Label>
                                                            </div>

                                                            <div>
                                                                className="custom-control custom-radio sd-option-list mb-3">
                                                                <Form.Control type="radio" id="nomeinteresa3" name="deducible"
                                                                       className="custom-control-input"/>
                                                                    <Form.Label
                                                                        className="custom-control-label text-secondary h5 pt-2"
                                                                        htmlFor="nomeinteresa3">
                                                                        Lorem ipsum in dore ement
                                                                    </Form.Label>
                                                            </div>

                                                            <div className="custom-control custom-radio sd-option-list mb-3">
                                                                <Form.Control type="radio" id="nomeinteresa4" name="deducible"
                                                                       className="custom-control-input"/>
                                                                    <Form.Label
                                                                        className="custom-control-label text-secondary h5 pt-2"
                                                                        htmlFor="nomeinteresa4">
                                                                        Otra razón
                                                                    </Form.Label>
                                                            </div>
                                                            <div className="custom-control row mb-3">
                                                                <div className="label-hv-animate"><textarea
                                                                    className="form-control border-0 rounded-0 bg-light"
                                                                    rows="3"
                                                                    placeholder="Escribe tu comentario aquí..."></textarea>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <Modal.Footer className="modal-footer border-0">
                                                        <a href="#"
                                                           className="btn bg-col5 text-white d-block mx-auto my-2 py-2 px-4 btn-bubble"
                                                           data-dismiss="modal">Enviar</a>
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