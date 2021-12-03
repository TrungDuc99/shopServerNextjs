import express, { Request, Response } from 'express'
import connectDatabase from './utils/connectDatabase'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'

// import redis from 'redis'
import { CategoryRouter, ProductRouter, UserRouter } from './routes'
import UserCallback from './controller/Product'
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql')
var { buildSchema } = require('graphql')

var schema = buildSchema(`
type Query {
  product(id: String!): Product
},
type Mutation {
  createProduct(name: String!, price:String!,description:String! ): Product
}
type Product {

  name: String
price:String
description:String
}
`)
var root = {
  product: UserCallback.getGraphQL,
  // createProduct:  ProductCallback.createGraphQL
}

require('dotenv').config()

const app = express()
const PORT = parseInt(<string>process.env.PORT, 10) || 9888

connectDatabase()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// routes api
app.use('/api/user', UserRouter)
app.use('/api/product', ProductRouter)
app.use('/api/category', CategoryRouter)
app.listen(PORT, () => {
  console.log('Server is running at port:', PORT)
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)

// const clientRedis = redis.createClient()

// export const saveStorage = (key: string, value: any) => {
//   clientRedis.set(key, JSON.stringify(value))
// }

// export const getStorage = async (key: string) => {
//   return new Promise((resolve, reject) => {
//     clientRedis.get(key, (err, data) => {
//       if (err) {
//         resolve(null)
//       } else {
//         resolve(data ? JSON.parse(data) : null)
//       }
//     })
//   })
// }
