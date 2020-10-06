export default async (req,res) => {
    const results = await fetch(`${process.env.apiurl}/${req.query.q}`)
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

    return res.json({shows})
}




