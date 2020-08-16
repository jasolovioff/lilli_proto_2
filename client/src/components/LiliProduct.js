import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class LiliProduct extends Component {
    render() {
        if (this.props.currentStep !== 3) {
            return null;
        }
        return (
            <section>
                <Row>
                    <Col>
                        <h4>¡Listo!</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>Tu plan podría ser:</h5>
                        <Row>
                            <Col>
                                <strong>Prima</strong>
                                <p>Pago que debes realizar todos los meses.</p>
                            </Col>
                            <Col>
                                <strong>UF 6,87/ $197.169</strong>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <strong>Monto de copago acumulado que</strong>
                                <p>Deducible anual tienes que pagar por persona antes de que se activen las coberturas.</p>
                            </Col>
                            <Col>
                                <strong>UF 10/ $287.000</strong> (individual)
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <strong>Tope anual</strong>
                                <p>Monto máximo de copago anual por persona. Una vez alcanzado el tope, la cobertura será del 100%, solo en Red.</p>
                            </Col>
                            <Col>
                                <strong>UF 200/ $5.740.000</strong> (individual)
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <strong>Médico de cabecera</strong>
                                <p>Atención personalizada y sin costo de un médico de familia (antes y después del deducible)</p>
                            </Col>
                            <Col>100%</Col>
                        </Row>
                        <Row>
                            <Col className="p-5">
                                <p>Recuerda, tu financias tus gastos médicos (después de cobertura mínima legal) hasta completar el deducible.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <strong>Consultas, exámenes y procedimientos ambulatorios</strong>
                                <p>Después deducible y en Red</p>
                            </Col>
                            <Col>70%</Col>
                        </Row>
                        <Row>
                            <Col>
                                <strong>Hospitalizaciones</strong>
                                <p>Después deducible y en Red</p>
                            </Col>
                            <Col>80%</Col>
                        </Row>
                        <Row>
                            <Col>
                                <strong>Derivaciones médico de cabecera</strong>
                                <p>Cobertura adicional después deducible</p>
                            </Col>
                            <Col>20%</Col>
                        </Row>
                    </Col>
                </Row>
            </section>
        );
    }
}
export default LiliProduct;