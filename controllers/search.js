const SearchesMade = require('../models/searchesMade')

module.exports = {
    addToSearchesMade
}

async function addToSearchesMade(inputText){
    const searchItem = await SearchesMade.create({seriesName: inputText})
    console.log(searchItem)
}