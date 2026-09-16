const express = require('express')
const cors = require('cors')

const api = express()

api.use(cors())
api.use(express.json())

api.get('/', (request, response) => {

    response.status(200).json({

        nome: 'Notebook',
        preco: 2500,
        categoria: 'Eletronicos'

    })

})

api.listen(3000, () => {

    console.log('api ta funcionando');

})