const mongoose = require('mongoose');
const Simulation = mongoose.model('simulations');
const planParams = require('../util/planParams');

module.exports = (app) => {
    app.post('/api/simulation', async (req, res) => {
        console.log("saving simulation");
        console.log(req.query);
        const {age, charges, income, deductible, network, monthlyPayment, email} = req.query;

        const simulation = Simulation({
            age,
            charges,
            income,
            deductible,
            network,
            monthlyPayment,
            email,
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