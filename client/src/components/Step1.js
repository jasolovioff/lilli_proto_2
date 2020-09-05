import React, {Component} from "react";
import {reduxForm} from "redux-form";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

class Step1 extends Component {
    render() {
        if (this.props.currentStep !== 1) {
            return null;
        }
        const formatter = new Intl.NumberFormat('es-CL');
        return (
            <React.Fragment>
                <Container fluid as="section">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs={12} lg={7} className="rounded shadow-lg bg-white overflow-hidden p-4 mb-5">

                                <Row className="progress position-relative"
                                     style={{height: "6px", top: "-25px", margin: "0 -26px"}}>
                                    <div className="progress-bar stretchRight bg-col6" role="progressbar"
                                         style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </Row>

                                <span className="h6 text-black-50 m-0">Paso {this.props.currentStep}</span>
                                <h2 className="title mb-0">Comencemos</h2>
                                <h5 className="text-secondary mb-5">Para avanzar al siguiente paso debes seleccionar a
                                    lo menos una opción para continuar </h5>

                                <Form.Group className="row mb-5">
                                    <Col xs={7} sm={8}>
                                        <h5 className="text-black-50 mb-0">Para tener una referencia</h5>
                                        <h4 className="">¿Cuánto pagas hoy por tu plan de Salud?</h4>
                                    </Col>
                                    <Col xs={5} sm={4}>
                                        <InputGroup className="is-invalid">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text className="bg-white border-0">$</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control name="currentPayment" type="number"
                                                          className="text-center bg-light rounded"
                                                          onChange={this.props.handleChange}
                                                          value={this.props.currentPayment}/>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>
                                <Form.Group className="custom-control custom-checkbox">
                                    <Form.Control type="checkbox"
                                                  name="noLoRecuerdo"
                                                  id="noLoRecuerdo"
                                           className="custom-control-input input-control-checkbox"
                                           onChange={this.props.handleChange}
                                           checked={this.props.noLoRecuerdo} />
                                    <Form.Label className="custom-control-label label-control-checkbox"
                                           htmlFor="noLoRecuerdo">No lo recuerdo</Form.Label>
                                </Form.Group>

                                <Form.Group className="mt-5 mb-0 text-right">
                                    <span className=" h6 text-col6">
                                        <i className="ic ic-alertbubble mr-1"></i>
                                        Debes seleccionar una opción para continuar
                                    </span>
                                </Form.Group>

                                <Form.Group className="mt-5">
                                    <span className="btn bg-col1 text-white d-block mx-auto float-md-right my-2 py-3 px-4 shadow-lg mr-1 btn-bubble" onClick={this.props._next}>Siguiente</span>
                                    <span className="btn float-md-right text-col1 text-hv-col1 d-block mx-auto mr-md-2 my-2 py-3 px-4 btn-bubble" onClick={this.props._prev}>Volver</span>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}

export default  reduxForm({
    form: 'surveyForm'
})(Step1);