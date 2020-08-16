import React, {Component} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

class Welcome extends Component{
    render() {
        if (this.props.currentStep !== 1){
            return null;
        }
        return(
            <section>
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