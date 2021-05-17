const express = require('express');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');

// Init Nexmo
const nexmo = new Nexmo({
    apiKey: '21a7c240', 
    apiSecret: 'fWCNBiJwPLADc1v9'
}, { debug: true })

// Init application
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Template engine setup
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// Public folder setup
app.use(express.static(__dirname + '/public'));

// Define route
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    const number = req.body.number;
    const message = req.body.message;

    nexmo.message.sendSms('Sweetu', number, message, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    });
    res.redirect('/');
})

// Adding Port
const port = 5000;

// Listen to application
const server = app.listen(port, () => {
    console.log(`Server running on PORT ${port}`)
});
server;

