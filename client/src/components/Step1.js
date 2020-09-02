import React, {Component} from "react";
import {reduxForm} from "redux-form";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Step1 extends Component {
    render() {
        if (this.props.currentStep !== 1) {
            return null;
        }
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
                                <h2 className="title mb-5">Comencemos</h2>


                                <Form.Group className="mb-0">
                                    <h5 className="text-black-50 mb-0">Para tener una referencia</h5>
                                    <h4 className="">¿Cuánto pagas hoy por tu plan de Salud?</h4>

                                    <Form.Group className="mb-5 pb-3">
                                        <Form.Group className="mb-3">

                                            <Form.Group className="custom-control custom-radio sd-option-list mb-4">
                                                <Form.Control type="radio" id="currentPayment1" value="bottom" name="currentPayment"
                                                               className="custom-control-input" onChange={this.props.handleChange} checked={this.props.currentPayment === "bottom"}/>
                                                <Form.Label className="custom-control-label text-col1 h4" htmlFor="currentPayment1">
                                                    Menos de UF 2
                                                    <small className="row text-black-50 font-weight-lighter pl-3">
                                                        $57.350
                                                    </small>
                                                </Form.Label>
                                            </Form.Group>

                                            <Form.Group className="custom-control custom-radio sd-option-list mb-4">
                                                <Form.Control type="radio" id="currentPayment2" value="middle" name="currentPayment"
                                                               className="custom-control-input" onChange={this.props.handleChange} checked={this.props.currentPayment === "middle"}/>
                                                <Form.Label className="custom-control-label text-col1 h4" htmlFor="currentPayment2">
                                                    Entre UF 2 y 3
                                                    <small className="row text-black-50 font-weight-lighter pl-3">
                                                        $57.350 a $86.030
                                                    </small>
                                                </Form.Label>
                                            </Form.Group>

                                            <Form.Group className="custom-control custom-radio sd-option-list mb-4">
                                                <Form.Control type="radio" id="currentPayment3" value="up" name="currentPayment"
                                                               className="custom-control-input" onChange={this.props.handleChange} checked={this.props.currentPayment === "up"}/>
                                                <Form.Label className="custom-control-label text-col1 h4" htmlFor="currentPayment3">
                                                    Entre UF 3 a 4
                                                    <small className="row text-black-50 font-weight-lighter pl-3">
                                                        $86.030 a $114.700
                                                    </small>
                                                </Form.Label>
                                            </Form.Group>

                                            <Form.Group className="custom-control custom-radio sd-option-list mb-4">
                                                <Form.Control type="radio" id="currentPayment4" value="other" name="currentPayment"
                                                              className="custom-control-input" onChange={this.props.handleChange} checked={this.props.currentPayment === "other"}/>
                                                <Form.Label className="custom-control-label text-col1 h4" htmlFor="currentPayment4">
                                                    Más de UF 4
                                                    <small className="row text-black-50 font-weight-lighter pl-3">
                                                        $114.700
                                                    </small>
                                                </Form.Label>
                                            </Form.Group>

                                        </Form.Group>
                                    </Form.Group>

                                    <Form.Group className="mt-5">
                                        <span className="btn bg-col1 text-white d-block mx-auto float-md-right my-2 py-3 px-4 shadow-lg mr-1 btn-bubble" onClick={this.props._next}>Siguiente</span>
                                        <span className="btn float-md-right text-col1 text-hv-col1 d-block mx-auto mr-md-2 my-2 py-3 px-4 btn-bubble" onClick={this.props._prev}>Volver</span>
                                    </Form.Group>

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