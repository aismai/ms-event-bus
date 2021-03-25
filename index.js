const expres = require('expess')
const bodyParser = require('body-parser')
const axios = reqiure('axios')

const app = express.app()

app.use(bodyParser.json())

app.post('/events', (req, res) => {
const event = req.body

    axios.post('http://localhost:4000/events', {event})
    axios.post('http://localhost:4001/events', {event})
    axios.post('http://localhost:4002/events', {event})

    res.send({ status: 'ok' })
})

app.listen(4005, () => console.log('Listening on 4005'))

