import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Step5 extends Component{
    render() {
        if (this.props.currentStep !== 5) {
            return null;
        }
        return(
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} lg={6} className="rounded shadow-lg bg-white overflow-hidden p-4 mb-5">
                        <div className="progress row position-relative"
                             style={{height: "6px", top: "-25", margin: "0 -26px"}}>
                            <div className="progress-bar stretchRight bg-col5" role="progressbar" style={{width: "100%"}}
                                 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h3 className="title mb-5">Gracias por contactarse, <br/><small> Por favor, Ingresa tus datos
                            para poder continuar con el proceso de contratación:</small></h3>

                        <Form.Group className="form-group">
                            <Form.Label className="text-muted text-center h5 w-100" htmlFor="exampleInputEmail1">¿Dejanos tu
                                mail y te contactaremos?</Form.Label>
                            <Form.Control type="email" className="rounded-0 text-center" aria-describedby="mail"
                                   placeholder="minombre@ejemplo.com"/>
                        </Form.Group>


                        <Form.Group className="mt-5">
                            <a href="index.html" className="btn btn-primary btn-lg btn-block">Gracias por
                                contactarse</a>
                            <!-- <button type="button" class="btn btn-secondary btn-lg btn-block">Siguente</button> -->
                        </Form.Group>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Step5;