const express = require('express');
const path = require('path');
const noteData = require('./Develop/db/db.json');
const fs = require('fs');
const uuid = require('./uuid')


// const PORT = 3001;
const PORT = process.env.PORT || 3001;


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


app.get('/api/notes', (req, res) => res.json(noteData));


app.post('/api/notes', (req, res) => {
  req.body.id = uuid()


  noteData.push(req.body)
  fs.writeFile('./Develop/db/db.json', JSON.stringify(noteData), (err) => {
    if (err) { console.error(err); }
  })
  // console.log(req.body)
  res.json("request recieved")
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.delete('/api/notes/:id', (req, res) => {
  let newNoteData = [];
  for (let i = 0; i < noteData.length; i++) {
    const note = noteData[i];
    if (note.id != req.params.id) {
      newNoteData.push(note)
      //detete
    }
  }
  // console.log(noteData)
  fs.writeFile('./Develop/db/db.json', JSON.stringify(newNoteData), (err) => {
    if (err) { console.error(err); }
    else{
    console.log("note deleted")
    }
  })
  res.json("note deleted")
})



// app.listen(PORT, () =>
//   console.log(`Example app listening at http://localhost:${PORT}`)
// );



app.listen(PORT, () => console.log(`App listening on port ${PORT}`));