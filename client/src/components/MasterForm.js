import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Welcome from "./Welcome";
import ConfigureLili from "./ConfigureLili";
import LiliProduct from "./LiliProduct";
import LiliRequest from "./LiliRequest";

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
        switch (currentStep){
            case 3:
                buttonLabel = "¡Quiero inscribirme!";
                break;
            case 4:
                buttonLabel = "Enviar mis datos";
                break;
            default:
                break;
        }
        if (currentStep <= 4) {
            return (
                <Button className="btn btn-primary float-right" type="button" onClick={this._next}>
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
            <Container>
                <React.Fragment>
                    <h1>Lili</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Welcome
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                        />
                        <ConfigureLili
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                        />
                        <LiliProduct
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                        />
                        <LiliRequest
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                        />
                        {this.previousButton}
                        {this.nextButton}
                    </Form>
                </React.Fragment>
            </Container>
        )
    }
}
export default MasterForm;