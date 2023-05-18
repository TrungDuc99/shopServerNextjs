"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var connectDatabase_1 = __importDefault(require("./utils/connectDatabase"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
// import redis from 'redis'
var routes_1 = require("./routes");
var Product_1 = __importDefault(require("./controller/Product"));
var bodyParser = require('body-parser');
var graphqlHTTP = require('express-graphql').graphqlHTTP;
var buildSchema = require('graphql').buildSchema;
var schema = buildSchema("\ntype Query {\n  product(id: String!): Product\n  getAllProducts: Product\n},\n\ntype Mutation {\n  createProduct(name: String!, price:String!,description:String! ): Product\n  updateProduct(name: String!, price:String!,description:String! ): Product\n}\ntype Product {\nname: String\nprice:String\ndescription:String\nimage:String\nisActive:Boolean\n\n}\n");
var root = {
    product: Product_1.default.getGraphQL,
    createProduct: Product_1.default.createGraphQL,
    updateProduct: Product_1.default.updateGraphQL,
    getAllProducts: Product_1.default.getAllProductGraphQL,
};
require('dotenv').config();
var app = (0, express_1.default)();
var PORT = parseInt(process.env.PORT, 10) || 5000;
(0, connectDatabase_1.default)();
app.use(express_1.default.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// routes api
app.use('/api/user', routes_1.UserRouter);
app.use('/api/product', routes_1.ProductRouter);
app.use('/api/category', routes_1.CategoryRouter);
app.listen(PORT, function () {
    console.log('Server is running at port:', PORT);
});
// const createInitUser = async () => {
//   const user = await UserModel.create({
//     email: 'trungduc@gmail.com',
//     name: 'trungduc',
//     password: 'trungduc',
//     phone: 'trungduc',
//     address: 'trungduc',
//   })
//   console.log('created')
// }
// createInitUser()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
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
