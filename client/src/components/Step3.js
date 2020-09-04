import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import redes from "../utils/redes";
import Simulation from "../utils/Simulation";
import heart from "../static/images/heart.svg";

class Step3 extends Component{
    simulation = new Simulation();
    premiums = [...redes];
    constructor(props) {
        super(props);
    }
    calculatePremium() {

        redes.forEach((red,i)=>{
            const uf10 = this.simulation.calculateTotalPrice(this.props.age, red.tag, 10, this.props.cargas);
            const uf15 = this.simulation.calculateTotalPrice(this.props.age, red.tag, 15, this.props.cargas);
            const uf20 = this.simulation.calculateTotalPrice(this.props.age, red.tag, 20, this.props.cargas);
            this.premiums[i].premiums = {
                10: {
                    uf: uf10,
                    clp: uf10*this.props.UF
                },
                15: {
                    uf: uf15,
                    clp: uf15*this.props.UF
                },
                20: {
                    uf: uf20,
                    clp: uf20*this.props.UF
                }
            }
        });
    }
    render() {
        if (this.props.currentStep !== 3) {
            return null;
        }
        let formatter = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'});
        this.calculatePremium();
        return (
            <React.Fragment>
                <Container as="section" fluid>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs={12} lg={7} className="rounded shadow-lg bg-white overflow-hidden p-4 mb-5">

                                <Row className="progress row position-relative"
                                     style={{height: "6px", top: "-25px", margin: "0 -26px"}}>
                                    <div className="progress-bar stretchRight bg-col6" role="progressbar"
                                         style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </Row>

                                <span className="h6 text-black-50 m-0">Paso 3</span>
                                <h2 className="title mb-5">Elige tus preferencias </h2>

                                <Form.Group>
                                    <h5 className="text-black-50">
                                        A continuación, te invitamos a elegir tus preferencias haciendo click en la
                                        combinación de tu interés en la siguiente tabla.
                                    </h5>
                                </Form.Group>

                                <Form.Group>
                                    <Row className="alert" role="alert">
                                        <Col xs={3} xl={2} className="align-self-sm-center">
                                            <img src={heart} className="mx-auto d-block w-50px"
                                                 alt="Atención Red y Deducible"/>
                                        </Col>
                                        <ul className="col-9 col-xl-10 mb-0 list-red h6 text-black-50">
                                            <li>
                                                <span className="text-col1 font-weight-bold">Red:</span><br/>
                                                Grupo de clínicas en donde se activarán las coberturas de tu plan.
                                            </li>

                                            <li className="mb-0">
                                                <span className="text-col1 font-weight-bold">Deducible:</span><br/>
                                                Es el monto de copago acumulado que tienes que pagar por persona en el
                                                año antes de que se activen las coberturas. Eso significa que tú
                                                financias todo hasta completarlo, y después de eso, Lili se encarga.
                                                Mientras más alto sea el deducible, más bajo será tu pago mensual.
                                            </li>
                                        </ul>
                                    </Row>
                                </Form.Group>

                                <div className="d-block px-3 btn-group-toggle">
                                    <Row className="row line-redydedusible-head">
                                        <Col xs={3}></Col>
                                        <Col xs={3} className="text-center text-col1 h6">Deducible UF 10</Col>
                                        <Col xs={3} className="text-center text-col1 h6">Deducible UF 15</Col>
                                        <Col xs={3} className="text-center text-col1 h6">Deducible UF 20</Col>
                                    </Row>

                                    {this.premiums.map((input, i)=>
                                        <Row className="line-redydedusible" key={input.tag}>
                                            <Col xs={3} className="position-relative">
                                                <span className="red-title h3 text-col1">{input.name}</span>
                                                <ul className="d-block text-black-50 font-weight-lighter h6 list-red"
                                                    style={{left: "30px", height: "auto"}}>
                                                    {input.clinics.map((clinica, j)=>
                                                        <li key={j}>{clinica}</li>
                                                    )}
                                                </ul>
                                            </Col>
                                            <Form.Label className={(this.props.preference === input.tag + "-10") ? "btn col-3 text-center position-relative redydedusible" : "btn col-3 text-center position-relative btn-secondary"} role="button">
                                                <Form.Control type="radio" name="preference" value={input.tag + "-10"} onChange={this.props.handleChange} checked={this.props.preference === input.tag + "-10"} />
                                                <div className="position-absolute center-absolute">
                                                    <span className="font-weight-bold h4">UF {input.premiums["10"].uf.toFixed(2)}</span>
                                                    <small className="d-block text-black-50 font-weight-lighter">{formatter.format(input.premiums["10"].clp.toFixed(2))}</small>
                                                </div>
                                            </Form.Label>
                                            <Form.Label className={(this.props.preference === input.tag + "-15") ? "btn col-3 redydedusible" : "btn col-3 btn-secondary"} role="button">
                                                <Form.Control type="radio" name="preference" value={input.tag + "-15"} onChange={this.props.handleChange} checked={this.props.preference === input.tag + "-15"} />
                                                <div className="position-absolute center-absolute">
                                                    <span className="font-weight-bold h4">UF {input.premiums["15"].uf.toFixed(2)}</span>
                                                    <small className="d-block text-black-50 font-weight-lighter">{formatter.format(input.premiums["15"].clp.toFixed(2))}</small>
                                                </div>
                                            </Form.Label>
                                            <Form.Label className={(this.props.preference === input.tag + "-20") ? "btn col-3 redydedusible" : "btn col-3 btn-secondary"} role="button">
                                                <Form.Control type="radio" name="preference" value={input.tag + "-20"} onChange={this.props.handleChange} checked={this.props.preference === input.tag + "20"} />
                                                <div className="position-absolute center-absolute">
                                                    <span className="font-weight-bold h4">UF {input.premiums["20"].uf.toFixed(2)}</span>
                                                    <small
                                                        className="d-block text-black-50 font-weight-lighter">{formatter.format(input.premiums["20"].clp.toFixed(2))}</small>
                                                </div>
                                            </Form.Label>
                                        </Row>
                                    )}
                                </div>


                                <div className="form-group mt-5">
                                    <button className="btn bg-col1 text-white d-block mx-auto float-md-right my-2 py-3 px-4 shadow-lg mr-1 btn-bubble" onClick={this.props._next}>Siguiente</button>
                                    <button className="btn float-md-right text-col1 text-hv-col1 d-block mx-auto mr-md-2 my-2 py-3 px-4 btn-bubble" onClick={this.props._prev}>Volver</button>
                                </div>


                            </Col>
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}

export default Step3;