var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true }
}, {collection: 'usercollection'});

var User = mongoose.model('usercollection', userSchema);

module.exports = User;
