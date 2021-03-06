const mongoose = require('mongoose');
const Simulation = mongoose.model('simulations');
const planParams = require('../util/planParams');

module.exports = (app) => {

    app.post('/api/simulation', async (req, res) => {

        const {owid, currentPayment, noLoRecuerdo, age, tengoCargas, cargas, preference, deductible, red, monthlyPayment} = req.query;

        const simulation = new Simulation({
            owid,
            currentPayment,
            noLoRecuerdo,
            age,
            tengoCargas,
            cargas,
            preference,
            deductible,
            red,
            monthlyPayment,
            created: Date.now()
        });

        simulation.save();
        res.send({result: "added", simulation});
    });

    app.get('/api/getsimparams', async (req, res) =>{
        console.log(planParams);
        res.send(planParams);
    });
}