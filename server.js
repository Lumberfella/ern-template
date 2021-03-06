const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
    res.json({'message': 'pong'});
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);