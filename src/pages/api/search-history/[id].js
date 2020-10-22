import SearchesMade from '../../../../models/searchesMade'
import '../../../../config/database'

export default async (req,res) => {
    const item = await SearchesMade.findById(req.query.id)  //uses req.query.id instead of req.params.id
    return res.json({item})   
}