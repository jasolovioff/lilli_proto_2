import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Step2 extends Component {
    render() {
        if (this.props.currentStep !== 2) {
            return null;
        }
        return (
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={12} lg={6} className="rounded shadow-lg bg-white overflow-hidden p-4 mb-5">
                            <div className="progress row position-relative" style={{height: "6px", top: "-25", margin: "0 -26px"}}>
                                <div className="progress-bar stretchRight bg-col5" role="progressbar" style={{width: "33%"}} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <h2 className="title-bold py-3">Configura en 3 simples pasos</h2>

                            <h3 className="title mb-5">Datos personales</h3>

                            <Form.Group className="mb-4">
                                <Form.Label className="text-muted h5">¿Cual es tu edad?</Form.Label>
                                <Form.Control type="text" className="form-control rounded-0 text-center control-animate"
                                       aria-describedby="edad" maxLength="2" placeholder="30"/>
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label className="text-muted h5">¿Tienes cargas?, <br/>si las tienes ingresalas con sus
                                    edades</Form.Label>
                                <a className="h5 float-right btn text-col5 text-hv-col pr-0" data-toggle="collapse"
                                   href="#collapsesumarcargas" role="button" aria-expanded="false"
                                   aria-controls="collapseExample">
                                    Si, Tengo cargas
                                </a>
                            </Form.Group>

                            <Form.Group className=" mb-4">
                                <Form.Label className="text-muted h5">Indícanos tu renta imponible estimada</Form.Label>
                                <Form.Control type="text" className="rounded-0 text-center control-animate"
                                       aria-describedby="renta imponible" placeholder="$500.000"/>
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

export default Step2;