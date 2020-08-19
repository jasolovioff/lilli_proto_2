import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Step3 extends Component{
    render() {
        if (this.props.currentStep !== 3) {
            return null;
        }
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} lg={6} className="rounded shadow-lg bg-white overflow-hidden p-4 mb-5">
                        <div className="progress row position-relative"
                             style={{height: "6px", top: "-25", margin: "0 -26px"}}>
                            <div className="progress-bar stretchRight bg-col5" role="progressbar" style={{width: "66%"}}
                                 aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h3 className="title mb-5">Elige tus preferencias </h3>

                        <Form.Group>
                            <h4>Elige tu deducible</h4>
                            <h5>Monto de copago acumulado que tienes que pagar por persona antes de que se activen las
                                coberturas. Mientras más alto sea, más bajo será tu pago mensual</h5>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <div className="custom-control custom-radio sd-option-list">
                                <Form.Control type="radio" id="deducible1" name="deducible" className="custom-control-input"/>
                                    <Form.Label className="custom-control-label" htmlFor="deducible1">
                                        UF 10
                                        <small className="row h5 text-secondary font-weight-lighter pl-3">
                                            $287.000
                                        </small>
                                    </Form.Label>
                            </div>

                            <div className="custom-control custom-radio sd-option-list">
                                <Form.Control type="radio" id="deducible2" name="deducible" className="custom-control-input"/>
                                    <Form.Label className="custom-control-label" htmlFor="deducible2">
                                        UF 15
                                        <small className="row h5 text-secondary font-weight-lighter pl-3">
                                            $430.500
                                        </small>
                                    </Form.Label>
                            </div>

                            <div className="custom-control custom-radio sd-option-list">
                                <Form.Control type="radio" id="deducible3" name="deducible" className="custom-control-input"/>
                                    <Form.Label className="custom-control-label" htmlFor="deducible3">
                                        UF 20
                                        <small className="row h5 text-secondary font-weight-lighter pl-3">
                                            $574.000
                                        </small>
                                    </Form.Label>
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <h4>Elige tu Red</h4>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <div className="custom-control custom-radio sd-option-list">
                                <Form.Control type="radio" id="red1" name="eligered" className="custom-control-input"/>
                                    <Form.Label className="custom-control-label" htmlFor="red1">
                                        RED 1
                                        <ul className="row h5 text-secondary font-weight-lighter list-inputradio">
                                            <li>Red Salud Sgto</li>
                                            <li>Clínica Dávila</li>
                                            <li>Clínica Vespucio</li>
                                            <li>Christus Marcoleta</li>
                                        </ul>
                                    </Form.Label>
                            </div>

                            <div className="custom-control custom-radio sd-option-list">
                                <Form.Control type="radio" id="red2" name="eligered" className="custom-control-input"/>
                                    <Form.Label className="custom-control-label" htmlFor="red2">
                                        RED 2
                                        <ul className="row h5 text-secondary font-weight-lighter list-inputradio">
                                            <li>Red Salud Sgto</li>
                                            <li>Clínica Dávila</li>
                                            <li>Clínica Vespucio</li>
                                            <li>Christus Marcoleta</li>
                                        </ul>
                                    </Form.Label>
                            </div>

                            <div className="custom-control custom-radio sd-option-list">
                                <Form.Control type="radio" id="red3" name="eligered" className="custom-control-input"/>
                                    <Form.Label className="custom-control-label" htmlFor="red3">
                                        RED 3
                                        <ul className="row h5 text-secondary font-weight-lighter list-inputradio">
                                            <li>Red Salud Sgto</li>
                                            <li>Clínica Dávila</li>
                                            <li>Clínica Vespucio</li>
                                            <li>Christus Marcoleta</li>
                                        </ul>
                                    </Form.Label>
                            </div>

                            <div className="custom-control custom-radio sd-option-list">
                                <Form.Control type="radio" id="red4" name="eligered" className="custom-control-input"/>
                                    <Form.Label className="custom-control-label" htmlFor="red4">
                                        RED 4
                                        <ul className="row h5 text-secondary font-weight-lighter list-inputradio">
                                            <li>Red Salud Sgto</li>
                                            <li>Clínica Dávila</li>
                                            <li>Clínica Vespucio</li>
                                            <li>Christus Marcoleta</li>
                                        </ul>
                                    </Form.Label>
                            </div>
                        </Form.Group>

                        <Form.Group className="mt-5">
                            {this.props.nextButton}
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Step3;