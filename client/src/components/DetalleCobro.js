import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import _ from "lodash";
import Modal from "react-bootstrap/Modal";
import planParams from "../utils/planParams";

class DetalleCobro extends Component{
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            planDetails : this.props.simulation.getPlanDetail()
        }
    }
    cargasDetail(){
        if (typeof (this.state.planDetails.cargas) != 'undefined' && this.state.planDetails.cargas.length > 0){
            return _.map(this.state.planDetails.cargas, carga => {
                return (
                    <Row className="border-bottom py-1" key={"carga"+carga.age}>
                        <Col xs={4} className="text-left text-muted">Carga {carga.age} Años</Col>
                        <Col xs={2} className="text-left text-muted">{carga.basePrice}</Col>
                        <Col xs={2} className="text-left text-muted">{carga.ageFactor}</Col>
                        <Col xs={2} className="text-left text-muted">{this.state.planDetails.GES}</Col>
                        <Col xs={2} className="text-right text-muted">{carga.finalPrice.toFixed(2)}</Col>
                    </Row>
                )
            })
        }
    }

    render() {
        return(
            <div>

                <div className="d-block w-100 pt-2 px-4 h6 bg-light ">
                    <Row className="py-1 font-weight-bold text-left text-muted">
                        <Col xs={12} className="font-weight-bold h4">Desglose</Col>
                    </Row>
                    <Row className="row border-bottom py-1">
                        <Col xs={4} className="font-weight-bold text-left text-muted"></Col>
                        <Col xs={2} className="font-weight-bold text-left text-muted">Precio Base</Col>
                        <Col xs={2} className="font-weight-bold text-left text-muted">Factor etario</Col>
                        <Col xs={2} className="font-weight-bold text-left text-muted">Valor <br/>GES</Col>
                        <Col xs={2} className="font-weight-bold text-right text-muted">Valor final</Col>
                    </Row>
                    <Row className="border-bottom py-1">
                        <Col xs={4} className="text-left text-muted">Titular</Col>
                        <Col xs={2} className="text-left text-muted">{this.state.planDetails.cotizante.basePrice}</Col>
                        <Col xs={2} className="text-left text-muted">{this.state.planDetails.cotizante.ageFactor}</Col>
                        <Col xs={2} className="text-left text-muted">{this.state.planDetails.GES}</Col>
                        <Col xs={2} className="text-right text-muted">{this.state.planDetails.cotizante.finalPrice.toFixed(2)}</Col>
                    </Row>
                    {this.cargasDetail()}
                    <Row className="py-3">
                        <Col xs={12}>
                            <h5 className="text-muted font-italic">
                                *Todos los valores están expresados en UF
                                <br/>
                                Valor final = base * factor + GES
                            </h5>
                        </Col>
                    </Row>
                </div>

                <div className="d-block w-100  pt-2 px-4 h6 bg-light">
                    <Row className="py-1 font-weight-bold text-left text-muted">
                        <Col xs={12} className="font-weight-bold h4">Tabla factor etario</Col>
                    </Row>
                    <Row className="py-1 font-weight-bold text-left text-muted">
                        <Col xs={6} className="font-weight-bold text-left text-muted">Tramo de
                            edad
                        </Col>
                        <Col xs={3} className="text-center">Cotizante</Col>
                        <Col xs={3} className="text-center">Carga</Col>
                    </Row>
                    <Row className="py-1 text-muted">
                        <Col xs={6}>0 a menos de 20 años</Col>
                        <Col xs={3} className="text-center">0,6</Col>
                        <Col xs={3} className="text-center">0,6</Col>
                    </Row>
                    <Row className="py-1 text-muted">
                        <Col xs={6}>20 a menos de 25 años</Col>
                        <Col xs={3} className="text-center">0,9</Col>
                        <Col xs={3} className="text-center">0,7</Col>
                    </Row>
                    <Row className="py-1 text-muted">
                        <Col xs={6}>25 a menos de 35 años</Col>
                        <Col xs={3} className="text-center">1,0</Col>
                        <Col xs={3} className="text-center">0,7</Col>
                    </Row>
                    <Row className="py-1 text-muted">
                        <Col xs={6}>35 a menos de 45 años</Col>
                        <Col xs={3} className="text-center">1,3</Col>
                        <Col xs={3} className="text-center">0,9</Col>
                    </Row>
                    <Row className="py-1 text-muted">
                        <Col xs={6}>45 a menos de 55 años</Col>
                        <Col xs={3} className="text-center">1,4</Col>
                        <Col xs={3} className="text-center">1,0</Col>
                    </Row>
                    <Row className="py-1 text-muted">
                        <Col xs={6}>55 a menos de 65 años</Col>
                        <Col xs={3} className="text-center">2,0</Col>
                        <Col xs={3} className="text-center">1,4</Col>
                    </Row>
                    <Row className="py-1 text-muted">
                        <Col xs={6}>65 años y más</Col>
                        <Col xs={3} className="text-center">2,4</Col>
                        <Col xs={3} className="text-center">2,2</Col>
                    </Row>
                </div>

            </div>
        )
    }
}
export default DetalleCobro;