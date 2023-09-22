const express = require('express');
const app = express();

app.use('/', require('./routes'));


const PORT = 3000;

app.listen(process.env.PORT || PORT);
console.log(`web services is listening at port ${process.env.PORT || PORT}`)
