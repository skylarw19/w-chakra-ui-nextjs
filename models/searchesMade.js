const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchesMadeSchema = new Schema({
    seriesName: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('SearchesMade', searchesMadeSchema);