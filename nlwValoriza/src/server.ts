import express, { request, response } from "express";



const app = express();


/**
 * GET => Buscar uma informação 
 * POST => Inserir (Criar) uma informação
 * PUT =: Alterar uma informaçã
 * DELETE => Remover um dado
 * PATCH => Alterar uma informação especifica
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