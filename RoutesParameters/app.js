const express = require('express');
const app = express();

app.get('/questions/:id/:title', (req, res) => {
    res.send('this route handles all the questions')
});

app.get('/users/:id/:username', (req, res) => {
    res.send('this route handles all the users of stackoverflow');
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})