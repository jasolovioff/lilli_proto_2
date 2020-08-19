import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Step4 extends Component{
    render() {
        if (this.props.currentStep !== 4) {
            return null;
        }
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} lg={6} className="rounded shadow-lg bg-white overflow-hidden p-4 mb-5">
                        <div className="progress row position-relative"
                             style={{height: "6px", top: "-25", margin: "0 -26px"}}>
                            <div className="progress-bar stretchRight bg-col5" role="progressbar" style={{width: "100%"}}
                                 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h3 className="title mb-5"> ¡Listo! Tu plan podría ser:</h3>

                        <div className="d-block w-100 mb-3">
                            <Row>
                                <Col  xs={3}>
                                    <span className="h5">Prima</span>
                                    <h3 className="font-weight-bold mb-0">UF 6,87</h3>
                                    <h4>$197.169</h4>
                                </Col>
                                <Col xs={9}><span className="h5 text-muted">Pago que debes realizar todos los meses.</span>
                                </Col>
                            </Row>
                        </div>

                        <div className="d-block w-100 mb-3">
                            <div className="row">
                                <div className="col-3">
                                    <span className="h5">Deducible anual</span>
                                    <h3 className="font-weight-bold mb-0">UF 10</h3>
                                    <h4>$287.000 <small>(individual)</small></h4>
                                </div>
                                <div className="col-9">
                                    <span className="h5 text-muted">Monto de copago acumulado que tienes que pagar por persona antes de que se activen las coberturas.</span>
                                </div>
                            </div>
                        </div>

                        <div className="d-block w-100 mb-3">
                            <div className="row">
                                <div className="col-3">
                                    <span className="h5">Tope anual</span>
                                    <h3 className="font-weight-bold mb-0">UF 200</h3>
                                    <h4>$5.740.000 <small>(individual)</small></h4>
                                </div>
                                <div className="col-9">
                                    <span className="h5 text-muted">Monto máximo de copago anual por persona. Una vez alcanzado el tope, la cobertura será del 100%, solo en Red.</span>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        )
    }
}