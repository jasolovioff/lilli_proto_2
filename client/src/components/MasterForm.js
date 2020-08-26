import React, {Component} from "react";
import { reduxForm, Field } from "redux-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import NavbarBrand from "react-bootstrap/NavbarBrand";
import logoLili from "../static/images/lilichile.png";
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
//import Step5 from "./Step5";
import Simulation from "../utils/Simulation";

class MasterForm extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    }

    _next() {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 4 ? 5 : currentStep + 1;
        this.setState({
            currentStep
        });
    }
    _prev() {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 0 ? 0 : currentStep - 1;
        this.setState({
            currentStep
        });
    }

    goToStep(step) {
        step = step < 0 ? 0 : step;
        step = step >= 4 ? 4 : step;
        this.setState({
            currentStep: step
        });
    }

    get previousButton() {
        let currentStep = this.state.currentStep;
        if(currentStep !== 0){
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
            case 0:
                buttonLabel = "Comienza ahora";
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
        const {name, value} = event.target;
        this.setState({
                [name] : value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
    }

    get renderStartButton(){
        if (this.state.currentStep === 0){
            return (
                <a
                   className="float-right btn border-col1 bg-white text-col1 text-hv-col1 pt-2 px-4"
                   onClick={this._next}>
                    Arma tu plan
                </a>
            )
        }
        return null;
    }

    handleSubmitSimulation() {
        console.log(this);
    }

    render() {
        return(
            <React.Fragment>
                <header className="container-fluid pt-3" id="top">
                    <Container>
                        <Row>
                            <Col xs={6}>
                                <a className="navbar-brand" href="/">
                                    <img src={logoLili} alt="Logo Lili"/>
                                </a>
                            </Col>
                            <div className="col-6">
                                {this.renderStartButton}
                            </div>
                        </Row>
                    </Container>
                </header>
                <Form onChange={console.log(this.state)}>
                    <Step0
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        nextButton={this.nextButton}
                    />
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        nextButton={this.nextButton}
                        previousButton={this.previousButton}
                        _next={this._next}
                        _prev={this._prev}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        nextButton={this.nextButton}
                        previousButton={this.previousButton}
                        _next={this._next}
                        _prev={this._prev}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        nextButton={this.nextButton}
                        previousButton={this.previousButton}
                        _next={this._next}
                        _prev={this._prev}
                    />
                    <Step4
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        nextButton={this.nextButton}
                        handleSubmit={this.handleSubmit}
                        previousButton={this.previousButton}
                        goToStep={this.goToStep}
                        _prev={this._prev}
                        handleSubmitSimulation={this.handleSubmitSimulation}
                        upperState={this.state}
                    />
                </Form>
            </React.Fragment>
        )
    }
}
export default reduxForm({
    form: 'surveyForm'
})(MasterForm);