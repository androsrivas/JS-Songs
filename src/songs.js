//Exercise 1: Get the array of all Artists.
function getAllArtists(array){
    let result = array.map(artist => artist.artist);
    console.log("Exercise 1 ->", result);
    return result;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist){
    let result = array.filter(song => song.artist == artist);
    console.log("Exercise 2 ->", result);
    return result;
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(array){
    let result = array.map(artist => artist.title).sort().slice(0, 10);
    console.log("Exercise 3 ->", result);
    return result;
};

//Exercise 4: Order by year, ascending
function orderByYear(array){
    let result = [...array].sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
    console.log("Exercise 4 ->", result);
    return result;
};

//Exercise 5: Filter songs by genre
function songsByGenre() {
    //Write your code here
};

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds() {
    //Write your code here
};

//Exercise 7: Get the longest song
function getLongestSong(){
    //Write your code here
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function




export { getAllArtists, getSongsFromArtist, orderAlphabetically, orderByYear, songsByGenre, minutsToSeconds, getLongestSong };
