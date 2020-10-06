export default (req,res) => {
    const results = fetch(`http://104.131.65.216:3000/api/search/${req.query.q}`)
    const showsWithServicePlans = results.showsWithServicePlans;  //is results not giving me a json obj?
    let shows = [];
    showsWithServicePlans.forEach(el => {  //cannot read property forEach of undefined. 
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




