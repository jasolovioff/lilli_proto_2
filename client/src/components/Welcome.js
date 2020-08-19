import React, {Component} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavbarBrand from "react-bootstrap/NavbarBrand";

import logoLili from "../static/images/lilichile.png";

class Welcome extends Component{
    render() {
        if (this.props.currentStep !== 1){
            return null;
        }
        return(
            <section>
                <header className="container-fluid bg-white fixed-top pt-3">
                    <Container>
                        <Row>
                            <Col xs={6}>
                                <NavbarBrand href="/">
                                    <img src={logoLili} alt="Logo Lili"/>
                                </NavbarBrand>
                            </Col>
                        </Row>
                    </Container>
                </header>
                <Container fluid as="section">
                    <Container>

                    </Container>
                </Container>
                <Jumbotron>
                    <h2>Tu salud, simple, conmigo</h2>
                    <p>
                        Lili es la nueva forma de ser Isapre.<br/>
                        Médico de cabecera a tu servicio. Precio y cobertura a tu medida.
                    </p>
                </Jumbotron>
            </section>
        )
    }
}
export default Welcome;