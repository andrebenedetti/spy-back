const express = require('express')
const app = express()
const port = 5000

app.post('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(ip); // ip address of the user
  res.json({
    success: true
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})