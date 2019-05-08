const express = require('express');

const port = 3000;

const app = express();

app.use(express.static('build'));

app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log('Listening on port', port);
})

