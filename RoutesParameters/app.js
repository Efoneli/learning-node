const express = require('express');
const app = express();

// patreon routes for all questions
app.get('/questions/:id/:title', (req, res) => {
    res.send('this route handles all the questions')
});

// patreon routes for all users
app.get('/users/:id/:username', (req, res) => {
    let userId = req.params.id;
    let user = req.params.username;

    res.send('This route handles '+user+' profile that has ID: '+userId);
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})