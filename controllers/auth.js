var md5 = require('md5');


var methods={
    hash: function(password){
        return md5(password)
    },
    verify:function(encodedHash,password){
        return encodedHash == md5(password);
        
    }
}
module.exports =methods