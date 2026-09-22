const express = require('express')
const cors = require('cors')

const api = express()

api.use(cors())
api.use(express.json())

api.get('/', (request, response) => {

response.status(200).json([

    {
        nome: 'Notebook',
        preco: 2500,
        categoria: 'Eletronicos',
        imagem: 'https://img.magnific.com/fotos-premium/o-portatil-com-a-tela-rachada_1398911-950.jpg?semt=ais_hybrid&w=740&q=80'
     

    },

    {
        nome: 'iPad',
        preco: 3000,
        categoria: 'Tablet',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3ShLe9MnpEpGPXXEu8nuFcz8hFx8k26rbpXNOaD88Q&s=10'
       
    },

    {
        nome: 'Fone de ouvido',
        preco: 150,
        categoria: 'Acessorios',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxlKszfNo5JJnppk3q1pgM9eOX0efUriaaCCwgVqKgc6OOOE-BbPj6X7S&s=10'
    }

])

})

api.listen(3000, () => {

    console.log('api ta funcionando');

})