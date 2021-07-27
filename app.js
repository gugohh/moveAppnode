
const  express = require('express')
const router = require('./routes/pages')

const app = express()

app.set('views', './views') 
app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/',router)

app.listen(3000, () => { 
    console.log('Servidor corriendo en http://localhost:3000');
})