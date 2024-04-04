const express = require('express')
const cors = require('cors')
const path = require('path')

require("dotenv").config()

const app = express()

const fs = require('fs')

const Image = require('./models/images.js')

app.use('/files', express.static(path.resolve(__dirname, "uploads")))

app.use((_, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER", "Content-Type, Authorization")
    app.use(cors())
    next()
})

const uploadImage = require('./multer/multer.js')

app.get('/', (req, res)=> {
    res.json('hello world!')
})

app.get('/listimages', async (req, res) => {
    await Image.findAll()
    .then((images) => {
        return res.json({
            images,
            url: "http://localhost:3333/files/"
        })
    }).catch((err)=> {
        console.log(err)
    })
})


app.post('/imagens', uploadImage.single('image'), async(req, res) => {
    console.log(req.file)

    await Image.create({
        image: req.file.filename
    })

    return res.json({
        message: "Upload realizado com sucesso"
    })
})


app.delete('/imagemdelete/:id', async(req, res)=> {

    await Image.findByPk(req.params.id)
    .then((picture)=> {
        fs.unlinkSync('./uploads/'+picture.image)
    })

    

    await Image.destroy({
        where: {
            id: req.params.id
        }
    })

    return res.json({
        message: "Imagem deletada com sucesso"
    })
})

app.get('/test', async (req, res)=> {
    await Image.findAll()
    .then((data)=> {
        let picture = data
        res.json(picture)
    })
})

const port = process.env.PORT || 3000;


app.listen(port, ()=> console.log())