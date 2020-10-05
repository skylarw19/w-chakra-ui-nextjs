export async function getShows(inputText){
    const result = await fetch(`http://104.131.65.216:3000/api/search/${inputText}`)
    const shows = await result.json();
    return shows;
}