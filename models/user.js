var mongodb = require('./db');
var schema = new mongodb.Schema({ username: String, password: String });
var User = mongodb.model('users', schema);

function userDAO(){};

userDAO.findByName = function findByName(username, callback){
	
	User.findOne({username:username}, function(err, userObj){
		callback(err, userObj);
	})
}

userDAO.save = function save(username, password, callback){
	var user = new User({
   	 	username: username,
   	 	password: password
	})

	user.save(function(err){
		callback(err);
	})

}


module.exports = userDAO;