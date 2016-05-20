var express = require('express');
var userDAO = require('../models/user');
var router = express.Router();

/* GET Login page. */
router.get('', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

/*POST username and password*/
router.post('',function(req, res, next){
  var password = req.body.password
  var username = req.body.name;
  userDAO.findByName(username, function(err, userObj){
  	    if(!userObj){
          userDAO.save(username, password, function(error){
              if(error){
                res.send('Register Failed!');
              }else{
                res.send('Resigter Successfully!');
              }
          })

  	    }else{
  	    		res.send("Username is already existing!");
  	    }

  })

});


module.exports = router;