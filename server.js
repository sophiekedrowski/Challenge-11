const express = require('express');
const path = require('path');

const PORT = 3001;
//const PORT = process.env.PORT || 3001;

//app.use(express.static('public'));

const app = express();

app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

//app.listen(PORT, () => console.log(`App listening on port ${PORT}`));