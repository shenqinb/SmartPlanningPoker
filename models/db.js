var mongoose = require('mongoose');
var mongoURL = 'mongodb://localhost/sppdb';
if(process.env.VCAP_APP_HOST){
	var env = JSON.parse(process.env.VCAP_SERVICES);
	mongoURL = env['mongodb-2.4'][0].credentials.url;
}
mongoose.connect(mongoURL);
module.exports=mongoose;