var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var UserSchema = new Schema({
    alias:  { type: String, required: true, index: { unique: true }},
    points: Number,
    since:  { type: Date,   default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
