import SearchesMade from '../../../models/searchesMade'
import '../../../config/database'   //import the connection to mongoDB

export default async (req,res) => {
    const results = await fetch(`${process.env.apiurl}/${req.query.q}`)
    const data = await results.json()  
    const shows = data.showsWithServicePlans.map(el =>{
            return{    
                id: el.id,
                seriesName: el.seriesName,
                overview: el.overview,
                image: el.image,
                network: el.network,
                servicePlans: el.servicePlans  
            }
    })

    const searchItem = await SearchesMade.create({seriesName: req.query.q})
    return res.json({shows})
}




