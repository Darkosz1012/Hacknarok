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
        findUser:function(username){
            return new Promise(function(resolve,reject){
                querypg(`SELECT * FROM users WHERE username='${username}'`).then(function(res){
                     //console.log(res);
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
                        console.log(res.rows[0].password,user.password,auth.verify(res.rows[0].password,user.password))
                        if(auth.verify(res.rows[0].password,user.password)){
                            console.log(res.rows[0].password,user.password,auth.verify(res.rows[0].password,user.password))
                            resolve("Znalazlo");
                        }else{
                            reject("incorrect password")
                        }
                    }
                });
            })
        },
        selectGroups:function(){
            return querypg('SELECT * FROM groups');
        },
        insertGroup:function(group){
            return querypg(`INSERT INTO "groups" ("name", "description") VALUES ('${group.name}', '${group.description}');`);
        },
        findGroup:function(name){
            return new Promise(function(resolve,reject){
                querypg(`SELECT * FROM groups WHERE name='${name}'`).then(function(res){
                    // console.log(res);
                    if(res.rowCount==0){
                        reject("group was not found")
                    }else{
                        resolve(res);
                    }
                });
            })
        },
        selectLocations:function(){
            return querypg('SELECT * FROM locations');
        },
        insertLocation:function(location){
            return querypg(`INSERT INTO "locations" ("name", "description") VALUES ('${location.name}', '${location.description}');`);
        },
        findLocation:function(name){
            return new Promise(function(resolve,reject){
                querypg(`SELECT * FROM locations WHERE name='${name}'`).then(function(res){
                    // console.log(res);
                    if(res.rowCount==0){
                        reject("location was not found")
                    }else{
                        resolve(res);
                    }
                });
            })
        },
        selectEvents:function(){
            return querypg('SELECT * FROM events');
        },
        insertEvent:function(event){
            return querypg(`INSERT INTO "events" ("name", "date_start","date_end","id_group","id_location","descirption") VALUES ('${event.name}', '${event.date_start}','${event.date_end}', '${event.id_group}','${event.id_location}', '${event.descirption}');`);
        },
        findEvent:function(name){
            return new Promise(function(resolve,reject){
                querypg(`SELECT * FROM events WHERE name='${name}'`).then(function(res){
                    // console.log(res);
                    if(res.rowCount==0){
                        reject("event was not found")
                    }else{
                        resolve(res);
                    }
                });
            })
        },
        selectUsersGroups:function(){
            return querypg('SELECT * FROM users-groups');
        },
        insertUsersGroups:function(obj){
            return querypg(`INSERT INTO "users-groups" ("id_user", "id_group") VALUES ('${obj.id_user}', '${obj.id_group}');`);
        },
        findUsersGroupsByUser:function(id){
            return new Promise(function(resolve,reject){
                querypg(`SELECT * FROM "users-groups" RIGHT JOIN groups ON "users-groups".id_group = groups.id  WHERE "users-groups".id_user='${id}'`).then(function(res){
                    // console.log(res);
                    if(res.rowCount==0){
                        reject("UsersGroups was not found")
                    }else{
                        resolve(res);
                    }
                });
            })
        },
        findUsersGroupsByGroups:function(id){
            return new Promise(function(resolve,reject){
                querypg(`SELECT * FROM "users-groups" RIGHT JOIN users ON "users-groups".id_user = users.id  WHERE "users-groups".id_group='${id}'`).then(function(res){
                    // console.log(res);
                    if(res.rowCount==0){
                        reject("UsersGroups was not found")
                    }else{
                        resolve(res);
                    }
                });
            })
        },
        selectUsersEvents:function(){
            return querypg('SELECT * FROM users-groups');
        },
        insertUsersEvents:function(obj){
            return querypg(`INSERT INTO "users-groups" ("id_user", "id_event") VALUES ('${obj.id_user}', '${obj.id_event}');`);
        },
        findUsersEventsByUser:function(id){
            return new Promise(function(resolve,reject){
                querypg(`SELECT * FROM "users-events" RIGHT JOIN events ON "users-events".id_group = events.id  WHERE "users-events".id_user='${id}'`).then(function(res){
                    // console.log(res);
                    if(res.rowCount==0){
                        reject("Userseventswas not found")
                    }else{
                        resolve(res);
                    }
                });
            })
        },
        findUsersEventsByEvent:function(id){
            return new Promise(function(resolve,reject){
                querypg(`SELECT * FROM "users-events" RIGHT JOIN users ON "users-events".id_user = users.id  WHERE "users-events".id_group='${id}'`).then(function(res){
                    // console.log(res);
                    if(res.rowCount==0){
                        reject("Usersevents was not found")
                    }else{
                        resolve(res);
                    }
                });
            })
        }
    }
    return methods;
}