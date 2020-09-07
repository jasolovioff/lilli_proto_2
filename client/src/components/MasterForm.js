import React, {Component} from "react";
import {reduxForm} from "redux-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import qs from "qs";
import logoLili from "../static/images/lili-chile.svg";
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import * as actions from "../actions/index";
import {submitSimulation} from "../actions/index";

class MasterForm extends Component {
    state = {};
    UF = 28674.82;
    //formatter = new Intl.NumberFormat('es-CL');
    constructor(props) {
        super(props);
        const owid = qs.parse(this.props.location.search, {ignoreQueryPrefix: true}).owid !== "" ? qs.parse(this.props.location.search, {ignoreQueryPrefix: true}).owid : "ADA-test";
        this.state = {
            currentStep: 0,
            owid: owid,
            currentPayment: '',
            noLoRecuerdo: false,
            age: '',
            tengoCargas: false,
            cargas: [],
            preference: '',
            alertStep1: false,
            alertStep2: false,
            alertStep3: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCargasChange = this.handleCargasChange.bind(this);
        this.appendCarga = this.appendCarga.bind(this);
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    }

    checkFilled() {
        switch (this.state.currentStep) {
            default:
                return true;
            case 1:
                if (this.state.currentPayment !== '' || this.state.noLoRecuerdo){
                    this.setState({alertStep1: false});
                    return true;
                }
                this.setState({alertStep1: true});
                return false;
            case 2:
                let invalidCarga = false;
                if(this.state.cargas.length > 0){
                    this.state.cargas.forEach((edadCarga)=>{
                        if(edadCarga > 150 || edadCarga < 0){
                            invalidCarga = true;
                        }
                    });
                }
                if (this.state.age !== '' && parseInt(this.state.age) < 150 && !invalidCarga){
                    this.setState({alertStep2: false});
                    return true;
                }
                this.setState({alertStep2: true});
                return false;
            case 3:
                if (this.state.preference !== ''){
                    this.setState({alertStep3: false});
                    return true;
                }
                this.setState({alertStep3: true});
                return false;
        }
    }

    executeBeforeNext(){
        switch (this.state.currentStep) {
            default:
                break;
            case 2:
                let filtered = this.state.cargas.filter(
                                                    function(value, index, arr){
                                                        return value !== "" && value !== -1;
                                                    });
                this.setState({
                    cargas : filtered,
                })
                if (filtered.length === 0){
                    this.setState({
                        tengoCargas: false,
                    })
                }
                break;
            case 4:
                const simulation = {
                    owid: this.state.owid,
                    currentPayment: this.state.currentPayment,
                    noLoRecuerdo: this.state.noLoRecuerdo,
                    age: this.state.age,
                    tengoCargas: this.state.tengoCargas,
                    cargas : this.state.cargas,
                    preference: this.state.preference,
                    deductible: this.state.deductible,
                    red: "aqui va la red",
                    monthlyPayment: 5,
                }
                console.log("persisting simulation...");
                submitSimulation(simulation);
                break;
        }
    }

    _next() {
        let currentStep = this.state.currentStep;
        this.executeBeforeNext();
        if(this.checkFilled()){
            currentStep = currentStep >= 4 ? 5 : currentStep + 1;
            this.setState({
                currentStep
            });
            window.scrollTo(0, 0);

        }
    }
    _prev() {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 0 ? 0 : currentStep - 1;
        this.setState({
            currentStep
        });
        window.scrollTo(0, 0);
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
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if(name === "currentPayment"){
        }
        this.setState({
                [name] : value
        });
    }

    handleCargasChange(cargas) {
        this.setState({
            cargas
        });
    }

    appendCarga(){
        this.setState(prevState => (
                {
                    cargas: prevState.cargas.concat(-1)
                }
            )
        );
    }

    handleCargaInput(event){
        const list = [...this.state.cargas];
        list[event.target.name.substr(-1)] = parseInt(event.target.value);
        this.setState({
            cargas: list
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    get renderStartButton(){
        if (this.state.currentStep === 0 && false){
            return (
                <button
                   className="float-right btn border-col1 bg-white text-col1 text-hv-col1 pt-2 px-4"
                   onClick={this._next}>
                    Arma tu plan
                </button>
            )
        }
        return null;
    }

    render() {
        console.log(this.state);
        return(
            <React.Fragment>
                <Container as="header" fluid className="pt-3 mb-3" id="top">
                    <Container>
                        <Row>
                            <Col xs={6}>
                                <a className="navbar-brand" href="/">
                                    <img src={logoLili} alt="Logo Lili" className="h-40px"/>
                                </a>
                            </Col>
                            <div className="col-6">
                                {this.renderStartButton}
                            </div>
                        </Row>
                    </Container>
                </Container>
                <Form >
                    <Step0
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        nextButton={this.nextButton}
                        _next={this._next}
                    />
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        nextButton={this.nextButton}
                        previousButton={this.previousButton}
                        currentPayment={this.state.currentPayment}
                        noLoRecuerdo={this.state.noLoRecuerdo}
                        alertStep1={this.state.alertStep1}
                        _next={this._next}
                        _prev={this._prev}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        nextButton={this.nextButton}
                        previousButton={this.previousButton}
                        handleCargasChange={this.handleCargasChange}
                        age={this.state.age}
                        tengoCargas={this.state.tengoCargas}
                        showSumarCargas={this.state.showSumarCargas}
                        cargas={this.state.cargas}
                        appendCarga={this.appendCarga}
                        alertStep2={this.state.alertStep2}
                        _next={this._next}
                        _prev={this._prev}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        nextButton={this.nextButton}
                        previousButton={this.previousButton}
                        age={this.state.age}
                        UF={this.UF}
                        preference={this.state.preference}
                        cargas={this.state.cargas}
                        alertStep3={this.state.alertStep3}
                        _next={this._next}
                        _prev={this._prev}
                    />
                    <Step4
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        nextButton={this.nextButton}
                        handleSubmit={this.handleSubmit}
                        previousButton={this.previousButton}
                        UF={this.UF}
                        _prev={this._prev}
                        handleSubmitSimulation={this.handleSubmitSimulation}
                        upperState={this.state}
                        owid={this.state.owid}
                    />
                </Form>
            </React.Fragment>
        )
    }
}
export default reduxForm({
    form: 'surveyForm'
})(MasterForm);