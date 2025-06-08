var express = require('express');
var path = require('path');
require('dotenv').config();

var weatherData = require('../utils/weatherData')

var app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "pug")
app.set('views', path.join(__dirname, '../views'))
app.use(express.static(path.join(__dirname, "../public")))

app.get('/', (req, res) => {
    res.render('index', {
        title: "Weather APP"
    });
})

app.get('/weather', (req, res) => {
    if (!req.query.zipcode) {
        return res.send("zipcode is required")
    }
    weatherData(req.query.zipcode, (error, result) => {
        if (error) {
            console.error(error);
            res.error(error);
        }
        res.send(result);
    });
})

app.get('/*splat', (req, res) => {
    res.status(404).render("404", {
        title: "404! Page not found",
        message: "404 Error! page not found"
    })
})

app.listen(port, '0.0.0.0',  () => {
    console.log("app started at port " + port);
})
