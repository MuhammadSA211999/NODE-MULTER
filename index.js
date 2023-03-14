const express = require('express')
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.json({ name: 'NODE-MULTER APP', message: 'YOURE IN NODE-MULTER FILE UPLOADING' })
})
const PORT = 3000 || 5000
app.listen(PORT, () => {
    console.log('APP IS RUNNING');

})