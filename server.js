const express = require('express')
const cors = require('cors')
const multer = require('multer')



const app = express()

app.use(cors())


app.get('/', (req, res)=>{
    // res.sendFile('index.html')
})

app.post('/api/fileanalysis', multer().single('upfile'), (req, res)=>{
    
    console.log(req.file)

    res.json({})
})

app.listen(3000, (req, res) =>{
    console.log('Server running')
})