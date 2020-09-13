var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var citySchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    state_id: {
        type: Schema.Types.ObjectId,
        ref: 'States'
    },
    is_active: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('City', citySchema);