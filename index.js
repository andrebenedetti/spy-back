const express = require('express')
const app = express()
const port = 80


app.use(cors())

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'lista-de-surpresas-2.herokuapp.com/');
    res.header('Access-Control-Allow-Methods', 'POST');
    next();
}

app.post('/', allowCrossDomain, (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(ip); // ip address of the user
  res.json({
    success: true
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})