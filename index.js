require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send('This is Twitter Page');
});

app.get('/login', (req, res) => {
    res.send('<h1>Hello Vishal Prajapati, this is H1 text</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Basic app listening on port ${port}`)
})