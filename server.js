const express = require('express')
const cors = require('cors')
const multer = require('multer')



const app = express()

app.use(cors())


app.get('/', (req, res)=>{
    res.sendFile('index.html')
})

app.post('/api/fileanalysis', multer().single('upfile'), (req, res)=>{
    
    const originalName = req.file.originalname
    const mimetype = req.file.mimetype
    const size = req.file.size

    res.json({name: originalName, type: mimetype, size:size })
})

app.listen(3000, (req, res) =>{
    console.log('Server running')
})