const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controllers/auth')
const actions = require('./controllers/actions')


const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/login', controller.login)
app.put('/login/add', actions.add )
app.put('/login/minus', actions.minus )


app.listen(port, () => {
    console.log('Server is up on port ' + port);
})
