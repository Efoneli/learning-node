const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.render('/search', )
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})