var express = require('express');
var userDAO = require('../models/user');
var router = express.Router();

/* GET Login page. */
router.get('', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/*POST username and password*/
router.post('',function(req, res, next){
  var password = req.body.password
  var username = req.body.name;
  userDAO.findByName(username, function(err, userObj){
  	    if(!userObj){
  	    	res.send("Username Not Exist!");

  	    }else{
  	    	if(userObj.password==password){
  	    		res.send("Login Successfully");
  	    	}else{
  	    		res.send("Wrong Password!");
  	    	}
  	    }

  })

});


module.exports = router;