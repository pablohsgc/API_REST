const express = require('express')
const usersRoute = require('./routes/usersRoute');
const statusRoute = require('./routes/statusRoute');
const app = express();

//Configuracoes da aplicacao
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Configuracoes de Rotas
app.use(usersRoute); 
app.use(statusRoute);


// Inicialização do servidor
app.listen(3000, () =>{
    console.log('Aplicação executando na porta 3000!');
})