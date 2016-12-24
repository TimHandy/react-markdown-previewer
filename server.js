const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('dist'))     // this serves up the html file from the dist dir

app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT)
})
