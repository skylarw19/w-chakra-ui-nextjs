import SearchesMade from '../../../../models/searchesMade'
import '../../../../config/database'

export default async (req,res) => {
    const item = SearchesMade.findById(req.params.id)
    return res.json({item})   
}