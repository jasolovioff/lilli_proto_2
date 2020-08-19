import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Welcome from "./Welcome";
import LiliRequest from "./LiliRequest";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import logoLili from "../static/images/lilichile.png";
import Step2 from "./Step2";
import Step3 from "./Step3";

class MasterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1
        }
        this.handleChange = this.handleChange.bind(this);
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    }

    _next() {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 3 ? 4 : currentStep + 1;
        this.setState({
            currentStep
        });
    }
    _prev() {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep
        })
    }

    get previousButton() {
        let currentStep = this.state.currentStep;
        if(currentStep !== 1){
            return (
                <Button className="btn btn-secondary" type="button" onClick={this._prev}>
                    Volver
                </Button>
            )
        }
        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        let buttonLabel = "Siguiente";
        let buttonClass = "btn btn-primary btn-lg btn-block";
        switch (currentStep){
            case 1:
                buttonLabel = "Comienza a configurar";
                buttonClass = "btn btn-primary float-right"
                break;
            case 3:
                break;
            case 4:
                buttonLabel = "Enviar mis datos";
                break;
            default:
                break;
        }
        if (currentStep <= 4) {
            return (
                <Button className={buttonClass} type="button" onClick={this._next}>
                    {buttonLabel}
                </Button>
            )
        }
        return null;
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const state = this.state;
        alert(state.toString());
    }

    render() {
        return(
            <React.Fragment>
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

                <Container fluid as="section" style={{paddingTop: "100px", height: "100vh"}}>
                    <Form onSubmit={this.handleSubmit}>
                        <Welcome
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            nextButton={this.nextButton}
                        />
                        <Step2
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            nextButton={this.nextButton}
                        />
                        <Step3
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            nextButton={this.nextButton}
                        />
                        <LiliRequest
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                        />
                    </Form>
                </Container>
            </React.Fragment>
        )
    }
}
export default MasterForm;