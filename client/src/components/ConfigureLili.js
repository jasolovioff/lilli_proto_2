import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

class ConfigureLili extends Component {
    render() {
        if (this.props.currentStep !== 2) {
            return null;
        }
        return(
            <section>
                <h3>Configura Lili</h3>
                <h4>¡Comencemos!</h4>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>¿Cuántos años tienes?</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Si tienes Cargas, por favor dinos sus edades:</Form.Label>
                            <Form.Control type="text"/>
                            <Form.Text>(separados por comas)</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Indícanos tu renta imponible estimada</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="text" aria-describedby="inputGroupPrepend" required/>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Elige tu deducible</Form.Label>
                            <p>Monto de copago acumulado que tienes que pagar por persona antes de que se activen las coberturas. Mientras más alto sea, más bajo será tu pago mensual</p>
                            <Form.Check name="deducible" type="radio" id="deducible1" label="UF 10/ $287.000" value="UF10"/>
                            <Form.Check name="deducible" type="radio" id="deducible2" label="UF 15/ $430.500" value="UF15"/>
                            <Form.Check name="deducible" type="radio" id="deducible3" label="UF 20/ $574.000" value="UF20"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Elige tu Red:</Form.Label>
                            <Row>
                                <Col><Form.Check name="red" type="radio" id="red1" value="red1"/></Col>
                                <Col>
                                    RED 1
                                    <ul>
                                        <li>Red Salud Sgto</li>
                                        <li>Clínica Dávila</li>
                                        <li>Clínica Vespucio</li>
                                        <li>Christus Marcoleta</li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row>
                                <Col><Form.Check name="red" type="radio" id="red2" value="red2"/></Col>
                                <Col>
                                    RED 2
                                    <ul>
                                        <li>Clínica Santa María</li>
                                        <li>Clínica Indisa</li>
                                        <li>Red Salud Vitacura</li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row>
                                <Col><Form.Check name="red" type="radio" id="red3" value="red3"/></Col>
                                <Col>
                                    RED 3
                                    <ul>
                                        <li>Christus San Carlos</li>
                                        <li>Universidad de los Andes</li>
                                        <li>Meds</li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row>
                                <Col><Form.Check name="red" type="radio" id="red4" value="red4"/></Col>
                                <Col>
                                    RED 4
                                    <ul>
                                        <li>Clínica Alemana</li>
                                        <li>Clínica Las Condes</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default ConfigureLili;