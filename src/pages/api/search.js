export default async (req,res) => {
    const results = await fetch(`http://104.131.65.216:3000/api/search/${req.query.q}`)
    const data = await results.json()  //.json() is async

    let shows = [];

    data.showsWithServicePlans.forEach(el => {  
        let show = {
            seriesName: el.seriesName,
            overview: el.overview,
            image: el.image,
            network: el.network,
            servicePlans: el.servicePlans
        };
        shows.push(show);
    })

    return res.json({shows: shows})
}




