const Sequelize = require('sequelize');

//Config
    // Conexao co banco de dados MySql
    const sequelize = new Sequelize("postagens_node","root", "246809", {
        host: "localhost",
        dialect: "mysql"
    })


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}