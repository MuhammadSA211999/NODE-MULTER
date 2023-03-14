const express = require('express')
const app = express()
const multer = require('multer')
app.use(express.json())
const PORT = 9000
//file destination 
const fileDest = './uploads/'
const upload = multer({
    dest: fileDest,
    limits: {
        fileSize: 100000
    },
    fileFilter: (req, file, cb) => {
        if (file.fieldname === 'doc') {
            if (file.mimetype === 'application/pdf') {
                cb(null, true)
            }
            else {
                cb(new Error('Only .pdf file acceptable'))
            }
        }
        else {
            if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
                cb(null, true)
            } else {
                cb(new Error('Only jpg, jpeg and png are acceptable'))
            }
        }
    }
})

app.get('/', (req, res) => {
    res.send({ name: 'NODE-MULTER APP', message: 'YOURE IN NODE-MULTER FILE UPLOADING' })
})
app.post('/', upload.single('avatar'), (req, res) => {
    res.send({})
})
// filesUploading
// app.post('/', upload.fields([{ name: 'avatar' }, { name: 'gallery', maxCount: 4 }]), (req, res) => {
//     res.send({})
// })
//formData Uploading
// app.post('/', upload.none(), (req, res) => {
//     //req.bodu er moddhey formData pabo
//     console.log(req.body);
//     res.send({})
// })

//errorHandling Middleware
app.use((err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(500).send('There is multer error')
        }
        else {
            res.status(500).send(err.message)
        }
    }
    else {
        res.send('success')
    }
})
app.listen(PORT, () => {
    console.log(`APP IS RUNNING ON PORT ${PORT}`);
})