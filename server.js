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
        jwt.verify(token, 'superSecret', function (err, decoded) {
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
    database.findUser(req.body.username).then(function(value){
        var user = value.rows[0]
       
            database.findUserAndCheckPassword(req.body).then(function(resl){
                const payload = {
                    username: user.username
                };
                var token = jwt.sign(payload, 'superSecret', {
                    expiresIn: '60m'
                });
                res.json({
                    success: true,
                    message: 'Authentication succeed',
                    token: token
                });
            }).catch(function(err){
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

app.post('/authenticate/registration', function (req, res) {
    console.log('/authenticate/registration')
    database.insertUsers(req.body).then(function(value){
        res.json({
            success: true,
            message: 'Registration succeed'
        });
        
    }).catch(function(err){
        res.json({
            success: false,
            message: err
        });
       // errorHandler(err,res)
    })
});

apiRoutes.post("/group/add", function (req, res) {
    console.log('/group/add')
    database.insertGroup(req.body).then(function(value){
        res.json({
            success: true,
            message: 'Add succeed'
        });
        
    }).catch(function(err){
        res.json({
            success: false,
            message: err
        });
    })
})
apiRoutes.post("/group/findAll", function (req, res) {
    console.log('/group/findAll')
    database.selectGroups().then(function(value){
        res.json({
            success: true,
            data: value
        });
        
    }).catch(function(err){
        res.json({
            success: false,
            message: err
        });
    })
})
apiRoutes.post("/group/find/name", function (req, res) {
    console.log('/group/find/name')
    database.findGroup(req.body).then(function(value){
        res.json({
            success: true,
            data: value
        });
        
    }).catch(function(err){
        res.json({
            success: false,
            message: err
        });
    })
})
apiRoutes.post("/event/add", function (req, res) {
    console.log('/event/add')
    database.insertEvent(req.body).then(function(value){
        res.json({
            success: true,
            message: 'Add succeed'
        });
        
    }).catch(function(err){
        res.json({
            success: false,
            message: err
        });
    })
})
apiRoutes.post("/event/findAll", function (req, res) {
    console.log('/event/findAll')
    database.selectEvents().then(function(value){
        res.json({
            success: true,
            data: value
        });
        
    }).catch(function(err){
        res.json({
            success: false,
            message: err
        });
    })
})
apiRoutes.post("/event/find/name", function (req, res) {
    console.log('/event/find/name')
    database.findEvent(req.body).then(function(value){
        res.json({
            success: true,
            data: value
        });
        
    }).catch(function(err){
        res.json({
            success: false,
            message: err
        });
    })
})
apiRoutes.post("/location/add", function (req, res) {
    console.log('/location/add')
    database.insertLocation(req.body).then(function(value){
        res.json({
            success: true,
            message: 'Add succeed'
        });
        
    }).catch(function(err){
        res.json({
            success: false,
            message: err
        });
    })
})
apiRoutes.post("/location/findAll", function (req, res) {
    console.log('/location/findAll')
    database.selectLocations().then(function(value){
        res.json({
            success: true,
            data: value
        });
        
    }).catch(function(err){
        res.json({
            success: false,
            message: err
        });
    })
})
apiRoutes.post("/location/find/name", function (req, res) {
    console.log('/location/find/name')
    database.findLocation(req.body).then(function(value){
        res.json({
            success: true,
            data: value
        });
        
    }).catch(function(err){
        res.json({
            success: false,
            message: err
        });
    })
})


// apiRoutes.get("/panel-glowny", function (req, res) {
//     res.sendFile(path.join(__dirname + '/../static/pages/home.html'));
// })


app.use('/', apiRoutes);


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
