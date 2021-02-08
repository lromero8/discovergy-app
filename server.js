const express = require('express');

const app = express();

app.use(express.static('./dist/discovergy-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/discovergy-app/'}),
);

app.listen(process.env.PORT || 8080);