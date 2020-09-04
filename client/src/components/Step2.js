import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import {reduxForm} from "redux-form";

class Step2 extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            showSumarCargas: false,
            cargas: [-1],
            totalCargas: 1
        }
        this.showSumarCargas = this.showSumarCargas.bind(this);
        this.appendCarga = this.appendCarga.bind(this);
        this.handleCargaInput = this.handleCargaInput.bind(this);
    }

    resetCargasCount(){
        console.log("reseting...")
        if (this.props.tengoCargas){
            this.props.handleCargasChange([]);
        } else {
            this.props.handleCargasChange([-1]);
        }
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
            cargas = [-1];
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
                    cargas: prevState.cargas.concat(-1),
                    totalCargas: prevState.totalCargas + 1
                }
            )
        );
    }

    handleCargaInput(event){
        const list = [...this.props.cargas];
        list[event.target.name.substr(-1)] = parseInt(event.target.value);
        this.setState({
            cargas: list
        });
        this.props.handleCargasChange(list);
    }

    handleRemove(i){
        const list =[...this.props.cargas];
        list.splice(parseInt(i),1);
        this.setState(prevState => ({
            cargas: list,
            totalCargas: prevState.totalCargas - 1
        }));
        console.log(list);
        this.props.handleCargasChange(list);
    }

    renderRemoveButton(i){
        if(this.props.cargas.length > 1){
            return (
                <button className="btn rounded-0 border-0 text-col1" type="button" data-toggle="tooltip" data-placement="top" title="Eliminar carga" onClick={() => this.handleRemove(i)}>
                    <i className="ic ic-trash"></i>
                </button>
            )
        }
        return null;
    }
    render() {
        if (this.props.currentStep !== 2) {
            return null;
        }
        return (
            <React.Fragment>
                <Container fluid as="section">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs={12} lg={7} className="rounded shadow-lg bg-white overflow-hidden p-4 mb-5">

                                <Row className="progress position-relative"
                                     style={{height: "6px", top: "-25px", margin: "0 -26px"}}>
                                    <div className="progress-bar stretchRight bg-col6" role="progressbar"
                                         style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </Row>

                                <span className="h6 text-black-50 m-0">Paso {this.props.currentStep}</span>
                                <h2 className="title mb-5">Datos personales</h2>

                                <Form.Group className="mb-5 row">
                                    <Form.Label className="col col-9 h4">¿Cuál es tu edad?</Form.Label>
                                    <div className="col-3">
                                        <Form.Control type="text" name="age"
                                                       className="form-control rounded-0 text-center control-animate border-0 bg-light"
                                                       aria-describedby="edad" maxLength="2" onChange={this.props.handleChange} value={this.props.age}/>
                                    </div>
                                </Form.Group>


                                    <Form.Group className="row">
                                        <Form.Label className="col-9 mb-0 col">¿Tienes cargas?</Form.Label>
                                        <div className="col-3 mb-0">
                                            <div className="float-right custom-control custom-switch">
                                                <Form.Control type="checkbox" className="custom-control-input" id="tengocargas"
                                                              data-toggle="collapse" data-target="#sumarcargas" name="tengoCargas"
                                                              onChange={(event) => {this.props.handleChange(event); this.resetCargasCount()}}
                                                              aria-controls="example-collapse-text"
                                                              aria-expanded={this.props.tengoCargas} checked={this.props.tengoCargas} />
                                                <label className="custom-control-label" htmlFor="tengocargas"></label>
                                            </div>
                                        </div>
                                        <div className="col-12"><span className="text-black-50 font-weight-light"> Si las tienes, ingrésalas con sus edades</span>
                                        </div>
                                    </Form.Group>

                                    <Collapse in={this.props.tengoCargas}>
                                        <div id="example-collapse-text">
                                            <Form.Group className="row justify-content-end">
                                                <Col xs={12}>
                                                    <a className="float-right btn text-col1 text-hv-col1 h6 pr-0"
                                                       data-toggle="collapse" href="#carga2" role="button"
                                                       aria-expanded="false" aria-controls="collapseExample" onClick={this.props.appendCarga}>
                                                        <i className="ic ic-user"></i> Incluir cargas
                                                    </a>
                                                </Col>
                                            </Form.Group>

                                            {this.props.cargas.map((input,i)=>
                                                <Form.Group className="row justify-content-center" key={"fgroup"+i.toString()}>
                                                    <Form.Label className="col-4 col-md-2 col-form-label h5 text-muted text-right pt-3">Carga {i+1}</Form.Label>
                                                    <div className="col-6 col-md-5 input-group">
                                                        <Form.Control type="text" className="form-control text-center rounded-0 border-0 bg-light"
                                                                      maxLength="2" style={{maxWidth: "100px"}} name={"carga-"+(i).toString()}
                                                                      onChange={this.handleCargaInput}
                                                                      value={input === -1 ? "" : input} />
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text  bg-white border-0">Años</div>
                                                            <div className="input-group-append">
                                                                {this.renderRemoveButton(i)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            )}
                                            <div className="form-group row">
                                                <div className="col-12 text-center">
                                                    <small className="text-black-50 font-italic float-left">*Si tu carga es menor a "1 año", indica “0 años”.</small>
                                                </div>
                                            </div>
                                        </div>
                                    </Collapse>

                                <div className="form-group mt-5">
                                    <span className="btn bg-col1 text-white d-block mx-auto float-md-right my-2 py-3 px-4 shadow-lg mr-1 btn-bubble" onClick={this.props._next}>Siguiente</span>
                                    <span className="btn float-md-right text-col1 text-hv-col1 d-block mx-auto mr-md-2 my-2 py-3 px-4 btn-bubble" onClick={this.props._prev}>Volver</span>
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