const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hannah Birch');
});

const PORT = 3000;

app.listen(process.env.PORT || PORT);
console.log(`web services is listening at port ${process.env.PORT || PORT}`)
