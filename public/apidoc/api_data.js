define({ "api": [
  {
    "type": "delete",
    "url": "/products/:id",
    "title": "Deletar produto",
    "group": "Produto",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"success\": true\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 500 Internal Server Error\n[\n  {\n      \"success\": false\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/index.js",
    "groupTitle": "Produto",
    "name": "DeleteProductsId"
  },
  {
    "type": "get",
    "url": "/products",
    "title": "Listar produtos",
    "group": "Produto",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID do produto</p>"
          },
          {
            "group": "Success 200",
            "type": "text",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do produto</p>"
          },
          {
            "group": "Success 200",
            "type": "numeric",
            "optional": false,
            "field": "price",
            "description": "<p>Preço do produto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"id\": 1,\n      \"name\": \"Teclado\",\n      \"price\": \"50\"\n  },\n  {\n      \"id\": 2,\n      \"name\": \"Mouse\",\n      \"price\": \"30\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/index.js",
    "groupTitle": "Produto",
    "name": "GetProducts"
  },
  {
    "type": "get",
    "url": "/products/:id",
    "title": "Buscar produto por ID",
    "group": "Produto",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID do produto</p>"
          },
          {
            "group": "Success 200",
            "type": "text",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do produto</p>"
          },
          {
            "group": "Success 200",
            "type": "numeric",
            "optional": false,
            "field": "price",
            "description": "<p>Preço do produto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"id\": 1,\n      \"name\": \"Teclado\",\n      \"price\": \"50\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 404 Not Found\n[\n  {\n      \"error\": \"Product not found\",\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/index.js",
    "groupTitle": "Produto",
    "name": "GetProductsId"
  },
  {
    "type": "post",
    "url": "/products",
    "title": "Inserir novo produto",
    "group": "Produto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do produto</p>"
          },
          {
            "group": "Parameter",
            "type": "numeric",
            "optional": false,
            "field": "price",
            "description": "<p>Preço do produto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Mouse\",\n  \"price\" : 30\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 201 Created\n[\n  {\n      \"success\": true\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 500 Internal Server Error\n[\n  {\n      \"success\": false\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/index.js",
    "groupTitle": "Produto",
    "name": "PostProducts"
  },
  {
    "type": "put",
    "url": "/products/:id",
    "title": "Atualizar produto",
    "group": "Produto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do produto</p>"
          },
          {
            "group": "Parameter",
            "type": "numeric",
            "optional": false,
            "field": "price",
            "description": "<p>Preço do produto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Mouse\",\n  \"price\" : 30\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 201 Created\n[\n  {\n      \"success\": true\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 500 Internal Server Error\n[\n  {\n      \"success\": false\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/index.js",
    "groupTitle": "Produto",
    "name": "PutProductsId"
  }
] });
