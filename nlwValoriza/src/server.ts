import express, { request, response } from "express";



const app = express();


/**
 * GET => Buscar uma informação 
 * POST => Inserir (Criar) uma informação
 * PUT =: Alterar uma informaçã
 * DELETE => Remover um dado
 * PATCH => Alterar uma informação especifica
 */


/**
 * Tipos de parâmetros
 * 
 * REQUISIÇÃO GET, PUT
 * Routes Params => http://localhost:3000/produtos/3798248973284 "!ID por exemplo"
 * Query Params => http://localhost:3000/produtos?name=teclado
 * 
 * 
 * REQUISIÇÃO POST
 * BOdy Params => {
 *  "name": "teclado",
 *  "description": "teclado" 
 * }
 * 
 */

app.get("/test", (request, response) => {
    // Request => Entrando
    // Response => Saindo


    return response.send('<title>ola</title><h1> Olá </h1>');

})



app.post("/test-post", (request,response) => {

    return response.send("POST 1");

})



app.listen(3000, () => console.log("Inicializado!!! https://localhost:3000")); 