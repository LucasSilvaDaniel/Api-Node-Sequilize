const express = require('express');
const bodyParser = require('body-parser');
const vagasRoutes = require('./routes/vagaRoutes');
const sequelize = require('./bancoDeDados'); 
const Vaga = require('./models/Vaga'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/vagas', vagasRoutes);

sequelize.sync({ force: false })  
    .then(() => {
        console.log('Tabelas sincronizadas com o banco de dados!');
    })
    .catch((err) => {
        console.error('Erro ao sincronizar com o banco de dados:', err);
    });

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
