const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/results', (req, res) => {

    let query = req.query.search;

    request('https://api.themoviedb.org/3/search/movie?api_key=d7195ea19be47e8803dc972291f8c823&query='+query, (error, response, body) => {
        if(error) {
            console.log(error);
        }

        let data = JSON.parse(body);
        res.render('movies', {data: data, searchQuery: query});
    })

})

app.get('/search', (req, res) => {
    res.render('search', )
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})