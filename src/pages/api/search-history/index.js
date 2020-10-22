import SearchesMade from '../../../../models/searchesMade'
import '../../../../config/database'   //import the connection to mongoDB

export default async (req,res) => {
    const searchHistory = await SearchesMade.find({})
    return res.json({searchHistory})
}