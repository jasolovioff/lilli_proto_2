const planParams = require('./planParams');

class Simulation {
    GES = 0.66;

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
    calculateTotalPrice(type, age, red, deductible, cargas){
        let totalPrice = this.calculatePrice(type, age, red, deductible);
        for(let key in cargas){
            totalPrice += this.calculatePrice(type, cargas[key], red, deductible);
        }
        return totalPrice;
    }
}

export default Simulation;