const express = require('express');
const app = express();
const PORT = process.env.PORT;

if (process.env.NODE_ENV == 'production'){
    //Express will serve up production assets
    app.use(express.static('client/build'));
    //Express will server index.html file if doesn't recognize de file
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});