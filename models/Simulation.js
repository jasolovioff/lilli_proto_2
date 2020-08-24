const mongoose = require('mongoose');
const { Schema } = mongoose;

const simulationSchema = new Schema({
    age: Number,
    charges : JSON,
    income: Number,
    deductible: Number,
    network: String,
    monthlyPayment: Number,
    email: String,
    created: Date
});
mongoose.model('simulations', simulationSchema);