const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('defaultdb', 'lucas', 'eh4QeFX2ZrzI1Qp2zyjAfg', {
    host: 'vagas-emprego-2466.jxf.gcp-southamerica-east1.cockroachlabs.cloud',
    port: 26257,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

// Testar a conexão com o banco de dados
sequelize.authenticate()
    .then(() => {
        console.log('Conexão ao CockroachDB estabelecida com sucesso!');
    })
    .catch(err => {
        console.error('Erro ao conectar ao CockroachDB:', err);
    });

module.exports = sequelize;
