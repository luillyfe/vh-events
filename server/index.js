const express = require('express')
const app = express()

app.use('/', express.static('app'))
app.listen(port = 8000, () => {
    console.log('hi!, Vanhack team');
})
