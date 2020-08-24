import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class Step3 extends Component{
    render() {
        if (this.props.currentStep !== 3) {
            return null;
        }
        return (
            <React.Fragment>
                <Container as="section" fluid>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs={12} lg={6} className="rounded shadow-lg bg-white overflow-hidden p-4 mb-5">

                                <Row className="progress position-relative"
                                     style={{height: "6px", top: "-25px", margin: "0 -26px"}}>
                                    <div className="progress-bar stretchRight bg-col6" role="progressbar"
                                         style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </Row>

                                <span className="h6 text-muted m-0">Paso 2</span>
                                <h2 className="title mb-5">Elige tus preferencias </h2>

                                <Form.Group>
                                    <h4 className="font-weight-bold text-col5">Elige tu Red</h4>
                                    <h5 className="text-secondary">Grupo de clínicas en las que se harán efectivas las
                                        coberturas de tu plan.</h5>
                                </Form.Group>
                                <Form.Group className="mb-3 pb-4">
                                    <div className="custom-control custom-radio sd-option-list mb-3">
                                        <Form.Control type="radio" id="red1" name="eligered" className="custom-control-input"/>
                                            <Form.Label className="custom-control-label text-col5 font-weight-bold" htmlFor="red1">
                                                RED 1
                                                <ul className="row h5 text-secondary font-weight-lighter list-inputradio">
                                                    <li>Red Salud Stgo.</li>
                                                    <li>Clínica Dávila</li>
                                                    <li>Clínica Vespucio</li>
                                                    <li>Christus Marcoleta</li>
                                                </ul>
                                            </Form.Label>
                                    </div>

                                    <div className="custom-control custom-radio sd-option-list mb-3">
                                        <Form.Control type="radio" id="red2" name="eligered" className="custom-control-input"/>
                                            <Form.Label className="custom-control-label text-col5 font-weight-bold" htmlFor="red2">
                                                RED 2
                                                <ul className="row h5 text-secondary font-weight-lighter list-inputradio">
                                                    <li>Clínica Santa María</li>
                                                    <li>Clínica Indisa</li>
                                                    <li>Red Salud Vitacura</li>
                                                </ul>
                                            </Form.Label>
                                    </div>

                                    <div className="custom-control custom-radio sd-option-list mb-3">
                                        <Form.Control type="radio" id="red3" name="eligered" className="custom-control-input"/>
                                            <Form.Label className="custom-control-label text-col5 font-weight-bold" htmlFor="red3">
                                                RED 3
                                                <ul className="row h5 text-secondary font-weight-lighter list-inputradio">
                                                    <li>Christus San Carlos</li>
                                                    <li>Universidad de los Andes</li>
                                                    <li>Meds</li>
                                                </ul>
                                            </Form.Label>
                                    </div>

                                    <div className="custom-control custom-radio sd-option-list mb-3">
                                        <Form.Control type="radio" id="red4" name="eligered" className="custom-control-input"/>
                                            <Form.Label className="custom-control-label text-col5 font-weight-bold" htmlFor="red4">
                                                RED 4
                                                <ul className="row h5 text-secondary font-weight-lighter list-inputradio">
                                                    <li>Clínica Alemana</li>
                                                    <li>Clínica Las Condes</li>
                                                </ul>
                                            </Form.Label>
                                    </div>
                                </Form.Group>

                                <Form.Group>
                                    <h4 className="font-weight-bold text-col5">Elige tu deducible</h4>
                                    <h5 className="text-secondary">Monto de copago acumulado que tienes que pagar por
                                        persona antes de que se activen las coberturas. Mientras más alto sea el
                                        deducible, más bajo será tu pago mensual.</h5>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <div className="custom-control custom-radio sd-option-list mb-3">
                                        <Form.Control type="radio" id="deducible1" name="deducible" className="custom-control-input"/>
                                            <Form.Label className="custom-control-label text-col5 font-weight-bold" htmlFor="deducible1">
                                                UF 10
                                                <small className="row h5 text-secondary font-weight-lighter pl-3">
                                                    $287.000
                                                </small>
                                            </Form.Label>
                                    </div>

                                    <div className="custom-control custom-radio sd-option-list mb-3">
                                        <Form.Control type="radio" id="deducible2" name="deducible" className="custom-control-input"/>
                                            <Form.Label className="custom-control-label text-col5 font-weight-bold" htmlFor="deducible2">
                                                UF 15
                                                <small className="row h5 text-secondary font-weight-lighter pl-3">
                                                    $430.500
                                                </small>
                                            </Form.Label>
                                    </div>

                                    <div className="custom-control custom-radio sd-option-list mb-3">
                                        <Form.Control type="radio" id="deducible3" name="deducible" className="custom-control-input"/>
                                            <Form.Label className="custom-control-label text-col5 font-weight-bold"
                                                   htmlFor="deducible3">
                                                UF 20
                                                <small className="row h5 text-secondary font-weight-lighter pl-3">
                                                    $574.000
                                                </small>
                                            </Form.Label>
                                    </div>
                                </Form.Group>

                                <div className="form-group mt-5">
                                    <a className="btn bg-col5 text-white d-block mx-auto float-md-right my-2 py-3 px-4 shadow-lg mr-1 btn-bubble" onClick={this.props._next}>Siguiente</a>
                                    <a className="btn float-md-right text-col5 text-hv-col5 d-block mx-auto mr-md-2 my-2 py-3 px-4 btn-bubble" onClick={this.props._prev}>Volver</a>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}

export default Step3;