export default async (req,res) => {
    const results = fetch(`http://104.131.65.216:3000/api/search/${req.query.q}`).then(
        function(response){
            response.json().then(function(data) {
                console.log(data)
            })
        }
    )
    console.log("hello")
    
    console.log("hello1")
    
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




