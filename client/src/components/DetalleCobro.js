import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import _ from "lodash";

class DetalleCobro extends Component{
    state = {}
    floatFormat = new Intl.NumberFormat('es-CL');
    constructor(props) {
        super(props);
        this.state = {
            planDetails : this.props.planDetail
        }
    }
    cargasDetail(){
        if (typeof (this.state.planDetails.cargas) != 'undefined' && this.state.planDetails.cargas.length > 0){
            return _.map(this.state.planDetails.cargas, carga => {
                return (
                    <Row className="border-bottom py-1 px-2" key={"carga"+carga.age}>
                        <Col xs={5} className="text-left text-muted">Carga {carga.age} Años</Col>
                        <Col xs={1} className="text-center text-muted">{this.floatFormat.format(carga.basePrice)}</Col>
                        <Col xs={1} className="text-center text-muted">X</Col>
                        <Col xs={1} className="text-center text-muted">{this.floatFormat.format(carga.ageFactor)}</Col>
                        <Col xs={1} className="text-center text-muted">+</Col>
                        <Col xs={1} className="text-center text-muted">{this.floatFormat.format(this.state.planDetails.GES)}</Col>
                        <Col xs={1} className="text-center text-muted">=</Col>
                        <Col xs={1} className="text-center text-muted">{this.floatFormat.format(carga.finalPrice.toFixed(2))}</Col>
                    </Row>
                )
            })
        }
    }

    render() {
        let floatFormat = new Intl.NumberFormat('es-CL');
        return(
            <Row className="bg-light  overflow-hidden">
                <div className="b-block w-100 pt-3 px-sm-3 h6 ">
                    <Row className="border-bottom py-1 px-2">
                        <Col xs={5} className="font-weight-bold text-left text-muted"></Col>
                        <Col xs={1} className="font-weight-bold text-left text-muted">Precio Base</Col>
                        <Col xs={1} className="text-right text-muted"></Col>
                        <Col xs={1} className="font-weight-bold text-center text-muted">Factor etario</Col>
                        <Col xs={1} className="text-right text-muted"></Col>
                        <Col xs={1} className="font-weight-bold text-center text-muted">Valor <br/>GES</Col>
                        <Col xs={1} className="text-right text-muted"></Col>
                        <Col xs={1} className="font-weight-bold text-center text-muted">Valor final</Col>
                    </Row>
                    <Row className="border-bottom py-1 px-2">
                        <Col xs={5} className="text-left text-muted">Titular</Col>
                        <Col xs={1} className="text-center text-muted">{this.floatFormat.format(this.state.planDetails.cotizante.basePrice)}</Col>
                        <Col xs={1} className="text-center text-muted">X</Col>
                        <Col xs={1} className="text-center text-muted">{this.floatFormat.format(this.state.planDetails.cotizante.ageFactor)}</Col>
                        <Col xs={1} className="text-center text-muted">+</Col>
                        <Col xs={1} className="text-center text-muted">{this.floatFormat.format(this.state.planDetails.GES)}</Col>
                        <Col xs={1} className="text-center text-muted">=</Col>
                        <Col xs={1} className="text-center text-muted">{this.floatFormat.format(this.state.planDetails.cotizante.finalPrice.toFixed(2))}</Col>
                    </Row>
                    {this.cargasDetail()}
                    <Row className="justify-content-end pt-3">
                        <Col xs={12} className="text-md-right font-weight-bold pr-2">
                            Total: {floatFormat.format(this.props.totalPrice.toFixed(2))}
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col xs={11}>
                            <h5 className="text-muted font-italic">
                                *Todos los valores estan expresados en UF
                            </h5>
                        </Col>
                    </Row>
                </div>
            </Row>
        )
    }
}
export default DetalleCobro;