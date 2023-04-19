// Esta funcion devuelve una promesa que debe resolverse
export async function getSortedPostsDataAPI() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('https://rickandmortyapi.com/api/character/');
    return res.json();
}