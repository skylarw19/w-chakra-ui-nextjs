// import SearchesMade from '../../../models/searchesMade'

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

    // const searchItem = await SearchesMade.create(req.query.q)
    return res.json({shows})
}




