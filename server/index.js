const express = require('express')
const app = express()

app.use('/', express.static('app'))
app.use('/public', express.static('public'))
app.listen(port = 8000, () => {
    console.log('hi!, Vanhack team');
})
