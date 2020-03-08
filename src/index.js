const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true,}));

const db = require('./db/queries');

app.get('/products', db.getProducts);
app.get('/products/:id', db.getProductById);
app.post('/products', db.createProduct);
app.put('/products/:id', db.updateProduct);
app.delete('/products/:id', db.deleteProduct);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})