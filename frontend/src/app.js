const express = require('express')
const path = require('path')

let app = express()

//app.use(express.json())
let options = {root:path.join(__dirname)}

app.get('/', (req,res)=>{
	res.sendFile('index.html', options)
})

app.listen(3000)