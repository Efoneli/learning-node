const express = require('express');
const app = express();

app.get('/demo', (req, res) => {
    res.render('index.ejs')
})



app.listen(3000, () => {
    console.log('Server running on port 3000');
})