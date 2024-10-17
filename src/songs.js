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
    let result = array.toSorted((a, b) => a.year - b.year || a.title.localeCompare(b.title));
    console.log("Exercise 4 ->", result);
    return result;
};

//Exercise 5: Filter songs by genre
function songsByGenre(array, genre) {
    let result = array.filter(song => song.genre.includes(genre));
    console.log("Exercise 5 ->", result);
    return result;
    
};

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(array) {
    let result = array.map(song => {
        let durationPattern = /(\d+)min (\d+)sec/;
        let totalTime = song.duration.match(durationPattern);
        let minutes = parseInt(totalTime?.[1]) || 0;
        let seconds = parseInt(totalTime?.[2]) || 0;
        let totalSeconds = minutes * 60 + seconds;
        return {
            ...song,
            duration: totalSeconds
        }
    });
    console.log("Exercise 6 ->", result);
    return result;
};

//Exercise 7: Get the longest song
function getLongestSong(array){
    let convertToSeconds = (duration) => {
        let timePattern = /(\d+)min (\d+)sec/;
        let total = duration.match(timePattern);
        let min = parseInt(total?.[1]) || 0;
        let sec = parseInt(total?.[2]) || 0;
        return min * 60 + sec;
    };
    let maxDuration = array.reduce((max, song) => {
        let totalSec = convertToSeconds(song.duration);
        return Math.max(max, totalSec);
    }, -Infinity);
    let result = array
        .map(song => ({
            ...song,
            duration: convertToSeconds(song.duration)
        }))
        .filter(song => song.duration === maxDuration);
    console.log("Exercise 7 ->", result);
    return result;
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function




export { getAllArtists, getSongsFromArtist, orderAlphabetically, orderByYear, songsByGenre, minutsToSeconds, getLongestSong };
