const { Client } = require('pg')
var auth = require('./auth')

module.exports = function(settings){
    
    //     user: 'postgres',
    //     password: '1012',
    //     database: 'postgres',  
    //     host: 'localhost', // force a fail in connection
    //     port: 5432
    // })
    
    function querypg(query){
        return new Promise(function(resolve,reject){
            const client = new Client(settings);
            client.connect(function(err){
                if(err){
                    reject(err)
                }
                client.query(query, function(err, result){
                    if(err){
                        reject(err)
                    } else{
                        resolve(result)
                    }
                    client.end()
                })
            
            })
        })
    }
    var methods={
        checkconection: function(){
            return querypg("SELECT NOW()")
        },
        selectUsers:function(){
            return querypg('SELECT * FROM users');
           
        },
        insertUsers:function(user){
            user.password = auth.hash(user.password);
            return querypg(`INSERT INTO "users" ("username", "password") VALUES ('${user.username}', '${user.password}');`);
        },
        findUser:function(user){
            return new Promise(function(resolve,reject){
                querypg(`SELECT * FROM users WHERE username='${user.username}'`).then(function(res){
                    console.log(res);
                    if(res.rowCount==0){
                        reject("user was not found")
                    }else{
                        resolve(res);
                    }
                });
            })
        },
        findUserAndCheckPassword:function(user){
            return new Promise(function(resolve,reject){
                querypg(`SELECT * FROM users WHERE username='${user.username}'`).then(function(res){
                    console.log(res);
                    if(res.rowCount==0){
                        reject("user was not found")
                    }else{
                        if(auth.verify(res.rows[0].password,user.password)){
                            resolve("Znalazlo");
                        }else{
                            reject("incorrect password")
                        }
                    }
                });
            })
        }
    }
    return methods;
}