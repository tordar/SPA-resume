const express = require("express")
const path = require("path")
const port = 3001

const app = express()

app.use('/static', express.static(path.resolve(__dirname, 'client', 'static')))
  
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'))
  })

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})