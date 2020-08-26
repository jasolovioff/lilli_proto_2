const planParams = require('./planParams');

class Simulation {
    GES = 0.69;

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
        console.log(planParams.factors[type][range]);
        let price =  currentBasePrice*currentFactor+ this.GES;
        console.log("price: " + price);
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