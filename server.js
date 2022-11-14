const express = require('express');
const path = require('path');
const noteData = require('./Develop/db/db.json');
const fs = require('fs');
// const { send } = require('process');

const PORT = 3001;
//const PORT = process.env.PORT || 3001;


const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});


// app.get('/api/example', (req, res) => {
//   console.log(req.body)
//   res.send("Request recieved")
// })

app.get('/api/notes', (req, res) => res.json(noteData));


// const reviewString = JSON.stringify(noteData);

app.post('/api/notes', (req, res) => {
noteData.push(req.body)
fs.writeFile('./Develop/db/db.json', JSON.stringify(noteData), (err) => {
if (err) {console.error(err);}})
  // console.log(req.body)
res.json("request recieved")
});

// app.get('/example', (req, res) => {
//   var object = {sophie: 1, noah: 2}
//   res.send(JSON.stringify(object))
// })

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

console.log(noteData);









app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


// console.log(noteData)
//app.listen(PORT, () => console.log(`App listening on port ${PORT}`));