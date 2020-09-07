import axios from 'axios';
const planParams = require('./planParams');

class Simulation {
    GES = planParams.GES;
    planDetail = {cotizante: {}, cargas: []};

    constructor() {
    }

    calculatePlanDetail(age, red, deductible, cargas) {

        if (typeof (age) == 'undefined'){
            this.age = 10;
        }else{
            this.age = age;
        }

        if (typeof (red) == 'undefined'){
            this.red = "red1";
        }else{
            this.red = red;
        }

        if (typeof (deductible) == 'undefined'){
            this.deductible = 10;
        }else{
            this.deductible = deductible;
        }

        if (typeof (cargas) == 'undefined'){
            this.cargas = [];
        }else{
            this.cargas = cargas;
        }

        this.planDetail = {
            GES : this.GES,
            cotizante : {
                age: this.age,
                basePrice : planParams.basePrice[this.red][this.deductible],
                ageFactor : planParams.factors.cotizante[this.getAgeRange(this.age)],
                finalPrice : this.calculatePrice("cotizante", this.age, this.red, this.deductible)
            },
            cargas : []
        }
            for(let key in cargas){
                this.planDetail.cargas.push({
                    age: cargas[key],
                    basePrice : planParams.basePrice[this.red][this.deductible],
                    ageFactor : planParams.factors.carga[this.getAgeRange(cargas[key])],
                    finalPrice : this.calculatePrice("carga", cargas[key], this.red, this.deductible)
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
        let price =  currentBasePrice*currentFactor + this.GES;
        return price;
    }

    calculateTotalPrice(age, red, deductible, cargas){
        let totalPrice = this.calculatePrice("cotizante", age, red, deductible);
        for(let key in cargas){
            totalPrice += this.calculatePrice("carga", cargas[key], red, deductible);
        }
        return totalPrice;
    }

    async submitSimulation(simulation){
        console.log(simulation);
        console.log("-- submitSimulation --");
        const res = await axios.post('/api/simulation', {post: "posteando", porfavor: "porfolo"});
        console.log(res);
    }
}

export default Simulation;