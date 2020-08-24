import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class Step2 extends Component {
    render() {
        if (this.props.currentStep !== 2) {
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
                                         style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </Row>

                                <span className="h6 text-muted m-0">Paso 1</span>
                                <h2 className="title mb-5">Datos personales</h2>

                                <Form.Group className="mb-5 pb-3">
                                    <Form.Label className="text-col5  h5">¿Cuál es tu edad?</Form.Label>
                                    <div className="label-hv-animate">
                                        <Form.Control type="text" className="form-control rounded-0 text-center control-animate border-0 bg-light" aria-describedby="edad" maxLength="2" placeholder="30"/>
                                    </div>
                                </Form.Group>


                                <div className="mb-5 pb-3">
                                    <Form.Group>
                                        <Form.Label className="text-col5 h5">
                                            ¿Tienes cargas? <br/><span className="text-secondary font-weight-light"> Si las tienes, ingrésalas con sus edades</span>
                                        </Form.Label>
                                        <a className="float-right btn text-primary border-primary h6 text-hv-col"
                                           data-toggle="collapse" href="#sumarcargas" role="button"
                                           aria-expanded="false" aria-controls="collapseExample">
                                            + Si, tengo cargas
                                        </a>

                                    </Form.Group>
                                    <div className="collapse" id="sumarcargas">
                                        <Form.Group className="row">
                                            <Form.Label className="col-2 col-form-label h5 text-muted pt-3">Carga 1</Form.Label>
                                            <div className="col-3 input-group">
                                                <Form.Control type="text" className="text-center rounded-0 border-0 bg-light" maxLength="2" placeholder="0"/>
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text  bg-white border-0">Años</div>
                                                    </div>
                                            </div>

                                            <Col xs={7}>
                                                <a className="float-right btn text-primary border-primary h6 text-hv-col"
                                                   data-toggle="collapse" href="#carga2" role="button"
                                                   aria-expanded="false" aria-controls="collapseExample">+ Añadir
                                                    cargas</a>
                                            </Col>
                                        </Form.Group>
                                    </div>
                                    <div className="collapse" id="carga2">
                                        <Form.Group className="row mb-5">
                                            <Form.Label className="col-2 col-form-label h5 text-muted pt-3">Carga 2</Form.Label>
                                            <div className="col-3 input-group">
                                                <Form.Control type="text" className="text-center rounded-0 border-0 bg-light" maxLength="2" placeholder="0"/>
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text  bg-white border-0">Años</div>
                                                    </div>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>

                                <Form.Group className="mb-5">
                                    <Form.Label className="text-col5 h5">Indícanos tu renta imponible estimada</Form.Label>
                                    <div className="label-hv-animate">
                                        <Form.Control type="text" className="rounded-0 text-center control-animate border-0 bg-light" aria-describedby="renta imponible" placeholder="$500.000"/></div>
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

export default Step2;