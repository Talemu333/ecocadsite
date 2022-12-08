const express = require("express")
const app = express();
const cors = require('cors')
const User = require("./index.js")
const path = require('path')
const validator = require("validator")


const port = process.env.PORT || 3000

const directory = path.join(__dirname, '../utils')

const corsOptions ={
    origin:'*', 
    credentials:true,           
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions))
app.use(express.static("./"))
app.use(express.static(directory))
app.use(express.static("./"))
app.set('view engine', 'hbs')
app.set('views', directoryHbs)
hbs.registerPartials(partialsDir)

app.get('', (req,res) => {
    res.render('index.html')
})

app.get('/quoteRequest', async(req, res) =>{
    const name = await req.query.name 
    const phone = await req.query.mobile
    const email = await req.query.email
    const project = await req.query.project
    const message = await req.query.message
    const user = await new User({name,mobile:phone,email,project,message})
    
    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.send(e)
    })
})

app.listen(port, () => {
    console.log('listening on port ' + port + '...')
})