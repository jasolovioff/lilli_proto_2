const express = require('express');
const mongoose = require('mongoose');
const app = express();
const keys = require('./config/keys');

require('./models/Simulation');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB.");
});

require('./routes/simulationRoutes')(app);
if (process.env.NODE_ENV == 'production'){
    //Express will serve up production assets
    app.use(express.static('client/build'));
    //Express will server index.html file if doesn't recognize de file
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});