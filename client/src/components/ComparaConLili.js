import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import diamond from "../static/images/diamond.svg";

class ComparaConLili extends Component{
    constructor(props) {
        super(props);
    }
    comparation(){
        const lowerBound = this.props.income*0.7*0.95/this.props.UF;
        const upperBound = this.props.income*0.7*1.05/this.props.UF;
        const monthlyPayment = this.props.monthlyPayment;
        const payRange = this.props.currentPayment;

        let phrase;

        if(payRange === "bottom"){
            if(monthlyPayment < upperBound){
                phrase = 1;
            } else {
                phrase = 2;
            }
        }else if (payRange === "middle"){
            if(monthlyPayment < lowerBound){
                phrase = 0;
            } else if (lowerBound <= monthlyPayment && monthlyPayment < upperBound){
                phrase = 1;
            } else {
                phrase = 2;
            }
        } else if(payRange === "up"){
            if(monthlyPayment < upperBound){
                phrase = 0;
            } else {
                phrase = 1;
            }
        }
        return phrase;

    }

    setPhrase(selection){
        switch (selection) {
            default:
                return null;
                break;
            case 0:
                return (
                    <h3 className="title-bold text-dark">Con Lili tendrás <span className="text-col1">grandes beneficios</span> pagando menos
                    </h3>
                )
            case 1 :
                return (
                    <h3 className="title-bold text-dark">
                        Con Lili tendrás <span className="text-col1">grandes beneficios</span> a un precio similar
                    </h3>
                )
            case 2:
                return (
                    <h3 className="title-bold text-dark">
                        Con Lili tendrás <span className="text-col1">grandes beneficios</span>
                    </h3>
                )

        }
    }

    render() {
        return (
            <Form.Group className="pb-4 mb-5">
                <ul className="list-unstyled mt-md-4">
                    <li className="media">

                        <div className="media-body text-secondary text-center">
                            <img src={diamond} className="mh-resulticon" alt="plan diamante"/>
                            {this.setPhrase(this.comparation())}
                        </div>
                    </li>
                </ul>
            </Form.Group>
        );
    }
}
export default ComparaConLili;