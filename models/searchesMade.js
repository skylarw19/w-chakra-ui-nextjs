const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchesMadeSchema = new Schema({
    seriesName: {type: String, required: true}
}, {
    timestamps: true,
    collection: 'searchesMade'  //forces collection name, otherwise mongoose automatically makes it lowercase and pluralises
});

module.exports = mongoose.models.SearchesMade || mongoose.model('SearchesMade', searchesMadeSchema);