const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true,}));
app.use(express.static("public"));
app.use('/', express.static("public/apidoc"));
const db = require('./db/queries');

/**
 * @api {get} /products Listar produtos
 * @apiGroup Produto
 * @apiSuccess {integer} id ID do produto
 * @apiSuccess {text} name Nome do produto
 * @apiSuccess {numeric} price Preço do produto
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    [
 *      {
 *          "id": 1,
 *          "name": "Teclado",
 *          "price": "50"
 *      },
 *      {
 *          "id": 2,
 *          "name": "Mouse",
 *          "price": "30"
 *      }
 *    ]
 *
 */
app.get('/products', db.getProducts);

/**
 * @api {get} /products/:id Buscar produto por ID
 * @apiGroup Produto
 * @apiSuccess {integer} id ID do produto
 * @apiSuccess {text} name Nome do produto
 * @apiSuccess {numeric} price Preço do produto
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    [
 *      {
 *          "id": 1,
 *          "name": "Teclado",
 *          "price": "50"
 *      }
 *    ]
 * @apiErrorExample {json} Erro
 *    HTTP/1.1 404 Not Found
 *    [
 *      {
 *          "error": "Product not found",
 *      }
 *    ]
 *
 */
app.get('/products/:id', db.getProductById);

/**
 * @api {post} /products Inserir novo produto
 * @apiGroup Produto
 * @apiParam {text} name Nome do produto
 * @apiParam {numeric} price Preço do produto
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "Mouse",
 *       "price" : 30
 *     }
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *    [
 *      {
 *          "success": true
 *      }
 *    ]
 * @apiErrorExample {json} Erro
 *    HTTP/1.1 500 Internal Server Error
 *    [
 *      {
 *          "success": false
 *      }
 *    ]
 *
 */
app.post('/products', db.createProduct);

/**
 * @api {put} /products/:id Atualizar produto
 * @apiGroup Produto
 * @apiParam {text} name Nome do produto
 * @apiParam {numeric} price Preço do produto
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "Mouse",
 *       "price" : 30
 *     }
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *    [
 *      {
 *          "success": true
 *      }
 *    ]
 * @apiErrorExample {json} Erro
 *    HTTP/1.1 500 Internal Server Error
 *    [
 *      {
 *          "success": false
 *      }
 *    ]
 *
 */
app.put('/products/:id', db.updateProduct);

/**
 * @api {delete} /products/:id Deletar produto
 * @apiGroup Produto
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    [
 *      {
 *          "success": true
 *      }
 *    ]
 * @apiErrorExample {json} Erro
 *    HTTP/1.1 500 Internal Server Error
 *    [
 *      {
 *          "success": false
 *      }
 *    ]
 *
 */
app.delete('/products/:id', db.deleteProduct);

app.listen(process.env.PORT || port);