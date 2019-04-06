const express = require('express');
// var expressVue = require("express-vue");
// const expressVueMiddleware = expressVue.init();
const jwt = require('jsonwebtoken');
var app = express()
var path = require("path")
var bodyParser = require("body-parser")
const PORT = 3000;
console.log("dziala")

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

var database = require("./controllers/database")({
    user: 'postgres',
    password: '1012',
    database: 'postgres',  
    host: 'localhost', // force a fail in connection
    port: 5432
})

// database.checkconection().then(function(res){
//     console.log("Database work!!!")
// }).catch(function(err){
//     console.log(err)
// });

// database.findUsersGroupsByUser(2).then(function(res){
//     console.log(res)
// }).catch(function(err){
//     console.log(err)
// });


var apiRoutes = express.Router();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'static')))

function errorHandler(err,res){
    console.error(err)
    res.status(500).send(err)
}

// app.get("/", function (req, res) {
//     console.log("login")
//     res.sendFile(path.join(__dirname + '/static/pages/login.html'));
//     res.renderVue(path.join(__dirname + '/vue/src/App.vue'));
// })

var apiRoutes = express.Router();

apiRoutes.use(function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});

app.post('/authenticate/json', function (req, res) {
    console.log('/authenticate/json')
    console.log(req.body)
    database.findUser(req.body.username).then(function(value){
        var user = value.rows[0]
       
            database.findUserAndCheckPassword(req.body).then(function(resl){
                console.log("then ",resl)
                const payload = {
                    username: user.username
                };
                var token = jwt.sign(payload, app.get('superSecret'), {
                    expiresInMinutes: 60 
                });
                res.json({
                    success: true,
                    message: 'Authentication succeed',
                    token: token
                });
            }).catch(function(err){
                console.log(err)
                res.json({
                    success: false,
                    message: 'Authentication failed. Wrong password.'
                });
            })
        
    }).catch(function(err){
        res.json({
            success: false,
            message: 'Authentication failed. User not found.'
        });
       // errorHandler(err,res)
    })
});



apiRoutes.get("/panel-glowny", function (req, res) {
    res.sendFile(path.join(__dirname + '/../static/pages/home.html'));
})


app.use('/', apiRoutes);


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
