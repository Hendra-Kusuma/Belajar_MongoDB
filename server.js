const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()
app.use = express.json()

const db = config.get('mongoURI')
const mahasiswa  = require("./models/mahasiswa")

mongoose
    .connect(db)
    .then(() => console.log("Mongodb berhasil . . ."))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
    mahasiswa.find()
        .sort({date: -1})
        .then((items) => console.log(res.json(items)));
});

app.post("/", (req, res) => {
    const newMahasiswa = new Mahasiswa({
        name: req.body.name,
        nim: req.body.nim
    });
}); 

    const port = 6000;
    app.listen(port, () => {
    console.log('running on port 6000');
    })


