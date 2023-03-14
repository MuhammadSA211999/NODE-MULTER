const express = require('express')
const app = express()
const multer = require('multer')
app.use(express.json())

//file destination 
const fileDest = './uploads/'
const upload = multer({
    dest: fileDest
})

app.get('/', (req, res) => {
    res.send({ name: 'NODE-MULTER APP', message: 'YOURE IN NODE-MULTER FILE UPLOADING' })
})
app.post('/', upload.fields([{ name: 'avatar' }, { name: 'gallery', maxCount: 4 }]), (req, res) => {
    res.send({})
})
const PORT = 9000
app.listen(PORT, () => {
    console.log(`APP IS RUNNING ON PORT ${PORT}`);
})