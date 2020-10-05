export default (req, res) => {
    const { query: {inputText}} = req;  //is this even needed if i have req.query?
    res.status(200).json({inputText: req.query})

}
// import getShows from '../../services/getShows'

// export default async (req,res) => {
//     const result = await getShows(req.query);
//     res.status(200).json(result)
// }

// export default function getShows(inputText){
//     const res = await fetch(`${process.env.apiurl}/${inputText}`);
//     const shows = await res.json();
//     shows.map((show) => {
//         return(
//             <p>show.seriesName</p>
//         )
//     })
// }

// export default async (req, res) => {
//     // const inputText = req.body; 
//     const result = await fetch(`${process.env.apiurl}${inputText}`);
//     // console.log(result)
//     res.status(200).json({ text: req})
//     // const shows = result.shows
//     // res.status(200).json({ text: shows })
// }
