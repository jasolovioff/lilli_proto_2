import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import redes from "../utils/redes";

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
                            <Col xs={12} lg={7} className="rounded shadow-lg bg-white overflow-hidden p-4 mb-5">

                                <Row className="progress row position-relative"
                                     style={{height: "6px", top: "-25px", margin: "0 -26px"}}>
                                    <div className="progress-bar stretchRight bg-col6" role="progressbar"
                                         style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </Row>

                                <span className="h6 text-black-50 m-0">Paso 3</span>
                                <h2 className="title mb-5">Elige tus preferencias </h2>

                                <div className="form-group">
                                    <h5 className="text-black-50">
                                        A continuación, te invitamos a elegir tus preferencias haciendo click en la
                                        combinación de tu interés en la siguiente tabla.
                                    </h5>
                                </div>


                                <div className="d-block px-3 btn-group-toggle">
                                    <Row className="row line-redydedusible-head">
                                        <Col xs={3}></Col>
                                        <Col xs={3} className="text-center text-col1 h6">Deducible UF 10</Col>
                                        <Col xs={3} className="text-center text-col1 h6">Deducible UF 15</Col>
                                        <Col xs={3} className="text-center text-col1 h6">Deducible UF 20</Col>
                                    </Row>

                                    {redes.map((input, i)=>
                                        <Row className="line-redydedusible">
                                            <Col xs={3} className="position-relative">
                                                <span className="red-title h3 text-col1">{input.name}</span>
                                                <ul className="d-block text-black-50 font-weight-lighter h6 list-red"
                                                    style={{left: "30px", height: "auto"}}>
                                                    {input.clinics.map((clinica, j)=>
                                                        <li>{clinica}</li>
                                                    )}
                                                </ul>
                                            </Col>
                                            <Form.Label className="btn col-3 text-center position-relative btn-secondary" role="button"
                                                        data-twbs-toggle-buttons-class-active="redydedusible"
                                                        aria-pressed="false" data-original-title="">
                                                <Form.Control type="radio" name="options" value="1" />
                                                <div className="position-absolute center-absolute">
                                                    <span className="font-weight-bold h4">UF 1,61</span>
                                                    <small className="d-block text-black-50 font-weight-lighter">$46.172</small>
                                                </div>
                                            </Form.Label>
                                            <Form.Label className="btn col-3 btn-secondary" role="button"
                                                        data-twbs-toggle-buttons-class-active="redydedusible"
                                                        aria-pressed="false" data-original-title="">
                                                <Form.Control type="radio" name="options" value="2" />
                                                <div className="position-absolute center-absolute">
                                                    <span className="font-weight-bold h4">UF 1,52</span>
                                                    <small className="d-block text-black-50 font-weight-lighter">$43.591</small>
                                                </div>
                                            </Form.Label>
                                            <Form.Label className="btn col-3 btn-secondary" role="button"
                                                        data-twbs-toggle-buttons-class-active="redydedusible"
                                                        aria-pressed="false" data-original-title="">
                                                <Form.Control type="radio" name="options" value="3" />
                                                <div className="position-absolute center-absolute">
                                                    <span className="font-weight-bold h4">UF 1,43</span>
                                                    <small
                                                        className="d-block text-black-50 font-weight-lighter">$41.010</small>
                                                </div>
                                            </Form.Label>
                                        </Row>
                                    )}

                                </div>


                                <div className="form-group mt-5">
                                    <button className="btn bg-col1 text-white d-block mx-auto float-md-right my-2 py-3 px-4 shadow-lg mr-1 btn-bubble" onClick={this.props._next}>Siguiente</button>
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

export default Step3;