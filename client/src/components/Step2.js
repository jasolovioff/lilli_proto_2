import React, {Component, prevState} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import {Field, reduxForm} from "redux-form";

class InputCarga extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <React.Fragment>
                    <Form.Group className="row">
                        <Form.Label className="col-2 col-form-label h5 text-muted pt-3">Carga {this.props.name}</Form.Label>
                        <div className="col-5 input-group">
                            <Form.Control type="text" className="form-control text-center rounded-0 border-0 bg-light" maxLength="2" placeholder="0" style={{maxWidth: "100px"}} />
                            <div className="input-group-prepend">
                                <div className="input-group-text  bg-white border-0">Años</div>
                                <div className="input-group-append">
                                    <button className="btn rounded-0 border-0 text-col1" type="button" data-toggle="tooltip" data-placement="top" title="Eliminar carga" onClick={() => this.props.handleRemove(this.props.i)}>
                                        <i className="ic ic-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form.Group>
            </React.Fragment>
        )
    }
}

class ageControl extends Component {
    render() {
        return(
            <Form.Control type="text" className="form-control rounded-0 text-center control-animate border-0 bg-light" aria-describedby="edad" maxLength="2" placeholder="30"/>
        )
    }
}

class Step2 extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            showSumarCargas: false,
            cargas: [],
            totalCargas: 0
        }
        this.showSumarCargas = this.showSumarCargas.bind(this);
        this.appendCarga = this.appendCarga.bind(this);
    }
    showSumarCargas(){
        let showSumarCargas;
        let totalCargas;
        let cargas;

        if (this.state.showSumarCargas){
            showSumarCargas = false;
            totalCargas = 0;
            cargas = [];
        } else {
            showSumarCargas = true;
            totalCargas = 1;
            cargas = [{name: "1", value: ""}];
        }
        this.setState({
            showSumarCargas,
            totalCargas,
            cargas
        })
    }
    appendCarga(){
        this.setState(prevState => (
            {
                cargas: prevState.cargas.concat(
                    {
                        name: (this.state.totalCargas + 1).toString(),
                        value : ""
                    }),
                totalCargas: prevState.totalCargas + 1
            }
            )
        );
    }
    handleCargaInput(event){
        console.log(event);
        const list = [...this.state.cargas];
        //list[i].name =
        this.setState({

        });
    }
    handleRemove(i){
        const list =[...this.state.cargas];
        list.splice(i,1);
        this.setState(prevState => ({
            cargas: list,
            totalCargas: prevState.totalCargas - 1
        }));
    }
    render() {
        console.log(this.state);
        if (this.props.currentStep !== 2) {
            return null;
        }
        return (
            <React.Fragment>
                <Container fluid as="section">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs={12} lg={6} className="rounded shadow-lg bg-white overflow-hidden p-4 mb-5">

                                <Row className="progress position-relative"
                                     style={{height: "6px", top: "-25px", margin: "0 -26px"}}>
                                    <div className="progress-bar stretchRight bg-col6" role="progressbar"
                                         style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </Row>

                                <span className="h6 text-black-50 m-0">Paso {this.props.currentStep}</span>
                                <h2 className="title mb-5">Datos personales</h2>

                                <Form.Group className="mb-5 pb-3">
                                    <Form.Label className="text-col1 h4">¿Cuál es tu edad?</Form.Label>
                                    <div className="label-hv-animate">
                                        <Form.Control type="text" name="age"
                                                       className="form-control rounded-0 text-center control-animate border-0 bg-light"
                                                       aria-describedby="edad" maxLength="2" placeholder="30" onChange={this.props.handleChange}/>
                                        {/*<Field component={ageControl} name="age" type="text"/>*/}
                                    </div>
                                </Form.Group>


                                <div className="mb-5 pb-3">
                                    <Form.Group>
                                        <Form.Label className="text-col1 h4">¿Tienes cargas? <br/>
                                            <span className="text-black-50 font-weight-light"> Si las tienes, ingrésalas con sus edades</span>
                                        </Form.Label>
                                        <div className="float-right custom-control custom-switch">
                                            <Form.Control type="checkbox" className="custom-control-input" id="tengocargas" data-toggle="collapse" data-target="#sumarcargas"
                                                            onChange={this.showSumarCargas} aria-controls="example-collapse-text" aria-expanded={this.state.showSumarCargas} />
                                                <label className="custom-control-label" htmlFor="tengocargas"></label>
                                        </div>
                                    </Form.Group>
                                    <Collapse in={this.state.showSumarCargas}>
                                        <div id="example-collapse-text">
                                            <Form.Group className="row">
                                                <Col xs={12}>
                                                    <a className="float-right btn text-col5 text-hv-col5 h6 text-hv-col pr-0"
                                                       data-toggle="collapse" href="#carga2" role="button"
                                                       aria-expanded="false" aria-controls="collapseExample" onClick={this.appendCarga}>
                                                        + Añadir nuevas cargas
                                                    </a>
                                                </Col>
                                            </Form.Group>

                                            {/*this.state.cargas.map((input,i) => <InputCarga name={input.name} value={input.value} i={i} handleRemove={this.handleRemove}/>)*/}
                                            {this.state.cargas.map((input,i)=>
                                                <Form.Group className="row" key={"fgroup"+i.toString()}>
                                                    <Form.Label className="col-2 col-form-label h5 text-muted pt-3">Carga {input.name}</Form.Label>
                                                    <div className="col-5 input-group">
                                                        <Form.Control type="text" className="form-control text-center rounded-0 border-0 bg-light" maxLength="2" style={{maxWidth: "100px"}} name={"carga-"+(i).toString()} />
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text  bg-white border-0">Años</div>
                                                            <div className="input-group-append">
                                                                <button className="btn rounded-0 border-0 text-col1" type="button" data-toggle="tooltip" data-placement="top" title="Eliminar carga" onClick={() => this.handleRemove(i)}>
                                                                    <i className="ic ic-trash"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            )}


                                            <div className="collapse" id="carga2">
                                                <div className="form-group row mb-5">
                                                    <label className="col-2 col-form-label h5 text-muted pt-3">Carga 2</label>
                                                    <div className="col-5 input-group">
                                                        <input type="text"
                                                               className="form-control text-center rounded-0 border-0 bg-light"
                                                               maxLength="2" placeholder="0" style={{maxWidth: "100px"}}/>
                                                            <div className="input-group-prepend">
                                                                <div
                                                                    className="input-group-text  bg-white border-0">Años
                                                                </div>
                                                                <div className="input-group-append">
                                                                    <button className="btn rounded-0 border-0 text-col1"
                                                                            type="button" data-toggle="tooltip"
                                                                            data-placement="top" title="Eliminar carga" >
                                                                        <i className="ic ic-trash"></i></button>
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-12">
                                                    <small className="text-secondary font-italic float-left">*Si tu
                                                        carga es menor a "1 año", indica “0 años”.</small>
                                                </div>
                                            </div>
                                        </div>
                                    </Collapse>

                                </div>

                                <Form.Group className="mb-5">
                                    <Form.Label className="text-col1 h4">Indícanos tu renta imponible estimada</Form.Label>
                                    <div className="label-hv-animate">
                                        <Form.Control type="text" name="income" className="rounded-0 text-center control-animate border-0 bg-light" aria-describedby="renta imponible" placeholder="$500.000" onChange={this.props.handleChange}/></div>
                                </Form.Group>

                                <div className="form-group mt-5">
                                    <a className="btn bg-col1 text-white d-block mx-auto float-md-right my-2 py-3 px-4 shadow-lg mr-1 btn-bubble" onClick={this.props._next}>Siguiente</a>
                                    <a className="btn float-md-right text-col1 text-hv-col1 d-block mx-auto mr-md-2 my-2 py-3 px-4 btn-bubble" onClick={this.props._prev}>Volver</a>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(Step2);