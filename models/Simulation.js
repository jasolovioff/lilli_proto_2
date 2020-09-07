const mongoose = require('mongoose');
const { Schema } = mongoose;

const simulationSchema = new Schema({
    owid: String,
    currentPayment: String,
    noLoRecuerdo: Boolean,
    age: Number,
    tengoCargas: Boolean,
    cargas : Array,
    preference: String,
    deductible: Number,
    red: String,
    monthlyPayment: Number,
    created: Date
});
mongoose.model('simulations', simulationSchema);