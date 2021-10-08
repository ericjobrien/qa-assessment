const express = require('express')
const path = require('path')

const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../tictacjs.html'));
});
app.use(express.static('http://localhost:4000/css/style.css'), (req, res) => {
  res.sendFile(path.join(__dirname, 'https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.3.4/jasmine.css'))
})

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})