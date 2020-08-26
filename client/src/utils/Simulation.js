const planParams = require('./planParams');

class Simulation {
    GES = planParams.GES;
    planDetail = {};

    constructor(age, red, deductible, cargas) {
        this.planDetail = {
            GES : this.GES,
            cotizante : {
                age,
                basePrice : planParams.basePrice[red][deductible],
                ageFactor : planParams.factors.cotizante[this.getAgeRange(age)],
                finalPrice : this.calculatePrice("cotizante", age, red, deductible)
            },
            cargas : []
        }
        for(let key in cargas){
            this.planDetail.cargas.push({
                age: cargas[key],
                basePrice : planParams.basePrice[red][deductible],
                ageFactor : planParams.factors.cotizante[this.getAgeRange(cargas[key])],
                finalPrice : this.calculatePrice("carga", cargas[key], red, deductible)
            });
        }
    }
    getPlanDetail(){
        return this.planDetail;
    }
    getAgeRange(age){
        const ranges = planParams.factors.ranges;
        for (let range in ranges){
            if (ranges[range][0] <= age &&  age < ranges[range][1] ){
                return range;
            }
        }
    }

    // type ("cotizante", "carga")
    calculatePrice(type, age, red, deductible){
        const currentBasePrice = planParams.basePrice[red][deductible];
        const range = this.getAgeRange(age);
        const currentFactor = planParams.factors[type][range];
        let price =  currentBasePrice*currentFactor+ this.GES;
        return price;
    }
    calculateTotalPrice(age, red, deductible, cargas){
        let totalPrice = this.calculatePrice("cotizante", age, red, deductible);
        for(let key in cargas){
            totalPrice += this.calculatePrice("carga", cargas[key], red, deductible);
        }
        return totalPrice;
    }
}

export default Simulation;