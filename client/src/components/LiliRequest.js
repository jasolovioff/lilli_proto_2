import React, {Component} from "react";
import Form from "react-bootstrap/Form";

class LiliRequest extends Component {
    render() {
        if (this.props.currentStep !== 4) {
            return null;
        }
        return (
            <section>
                <h4>Ingresa tus datos para poder continuar con el proceso de contratación:</h4>
                <Form.Group>
                    <Form.Label>Lili Request</Form.Label>
                </Form.Group>
            </section>
        );
    }
}
export default LiliRequest;