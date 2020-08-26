import React, {Component} from "react";
import { reduxForm, Field } from "redux-form";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Step1 extends Component {
    render() {
        if (this.props.currentStep !== 1) {
            return null;
        }
        console.log(this.props.currentStep);
        return (
            <React.Fragment>
                <Container fluid as="section">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs={12} lg={6} className="rounded shadow-lg bg-white overflow-hidden p-4 mb-5">

                                <Row className="progress position-relative"
                                     style={{height: "6px", top: "-25px", margin: "0 -26px"}}>
                                    <div className="progress-bar stretchRight bg-col6" role="progressbar"
                                         style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </Row>

                                <span className="h6 text-black-50 m-0">Paso {this.props.currentStep}</span>
                                <h2 className="title mb-5">Comencemos</h2>


                                <Form.Group className="mb-0">
                                    <Form.Label className="text-col1 h4 mb-0">
                                        Para tener una referencia,<br/>¿cuánto pagas hoy por tu plan de Salud?
                                    </Form.Label>

                                    <Form.Group className="mb-5 pb-3">
                                        <Form.Group className="mb-3">

                                            <Form.Group className="custom-control custom-radio sd-option-list mb-3">
                                                <Field component="Form.Control"  type="radio" id="currentPayment1" name="currentPayment" className="custom-control-input"/>
                                                {/*<Form.Control type="radio" id="currentPayment1" name="currentPayment"
                                                               className="custom-control-input"/>*/}
                                                <Form.Label className="custom-control-label text-col5 font-weight-bold" htmlFor="currentPayment1">
                                                    <small className="row h5 text-secondary font-weight-lighter mt-2 pl-3">
                                                        Pago menos de mi 7% (genero Excedentes)
                                                    </small>
                                                </Form.Label>
                                            </Form.Group>

                                            <Form.Group className="custom-control custom-radio sd-option-list mb-3">
                                                <Form.Control type="radio" id="currentPayment2" name="currentPayment" className="custom-control-input" />
                                                <Form.Label className="custom-control-label text-col5 font-weight-bold" htmlFor="currentPayment2">
                                                    <small className="row h5 text-secondary font-weight-lighter mt-2 pl-3">
                                                        Pago el equivalente a mi 7%
                                                    </small>
                                                </Form.Label>
                                            </Form.Group>

                                            <Form.Group className="custom-control custom-radio sd-option-list mb-3">
                                                <Form.Control type="radio" id="currentPayment3" name="currentPayment" className="custom-control-input"/>
                                                <Form.Label className="custom-control-label text-col5 font-weight-bold" htmlFor="currentPayment3">
                                                    <small className="row h5 text-secondary font-weight-lighter mt-2 pl-3">
                                                        Pago más de mi 7%
                                                    </small>
                                                </Form.Label>
                                            </Form.Group>

                                        </Form.Group>
                                    </Form.Group>

                                    <Form.Group className="mt-5">
                                        {/*<Button as="a" href="#" className="bg-col5 text-white d-block mx-auto float-md-right my-2 py-3 px-4 shadow-lg mr-1 btn-bubble" onClick={this.props._next}>Siguiente</Button>*/}
                                        <a className="btn bg-col1 text-white d-block mx-auto float-md-right my-2 py-3 px-4 shadow-lg mr-1 btn-bubble" onClick={this.props._next}>Siguiente</a>
                                        {/*<Button as="a" href="#" className="float-md-right text-col5 text-hv-col5 d-block mx-auto mr-md-2 my-2 py-3 px-4 btn-bubble" onClick={this.props._prev}>Volver</Button>*/}
                                        <a className="btn float-md-right text-col1 text-hv-col1 d-block mx-auto mr-md-2 my-2 py-3 px-4 btn-bubble" onClick={this.props._prev}>Volver</a>
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