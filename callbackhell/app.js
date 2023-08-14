const fs = require('fs');
const request = require('request');

fs.readFile('movie.txt', (error, query) => {
    if(error) return console.log(error);

    request('https://api.themoviedb.org/3/search/movie?api_key=d7195ea19be47e8803dc972291f8c823'+query.toString(), {timeout:0}, (error, response, body) => {
        if(error) return console.log(error);

        let movies = JSON.parse(body);
    
        movies.results.forEach((movie) => {
            console.log(movie.original_title);
    })

    })
})