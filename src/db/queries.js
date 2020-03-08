const Pool = require('pg').Pool

const pool = new Pool({
    user: 'dawtbprg',
    host: 'drona.db.elephantsql.com',
    database: 'dawtbprg',
    password: 'X-KMxiNVlxQp_9-j9-mUuIuSKn9KBBOT',
    port: 5432,
})

const getProducts = (request, response) => {
    pool.query('SELECT * FROM product ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getProductById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM product WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        if(results.rows.length > 0){
          response.status(200).json(results.rows)  
        }else{
          response.status(404).json([{"error" : "Product not found"}])
        }
        
    })
}

const createProduct = (request, response) => {
    const { name, price } = request.body

    pool.query('INSERT INTO product (name, price) VALUES ($1, $2)', [name, price], (error, results) => {
        if (error) {
          response.status(500).json({sucess : false})
        }else{
          response.status(201).json({sucess : true})
        }
    })
}

const updateProduct = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, price } = request.body

  pool.query(
    'UPDATE product SET name = $1, price = $2 WHERE id = $3',
    [name, price, id],
    (error, results) => {
      if (error) {
        response.status(500).json({sucess : false})
      }else{
        response.status(201).json({sucess : true})
      }
    }
  )
}

const deleteProduct = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM product WHERE id = $1', [id], (error, results) => {
    if (error) {
      response.status(500).json({sucess : false})
    }else{
      response.status(200).json({sucess : true})
    }
  })
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}