module.exports = {
    dialect: 'mysql',
    host: 'localhost', // URL de conexão
    username: 'root', // username do seu DB
    passowrd: 'admin', // senha do seu DB
    database: 'smart-posts',
    define: {
        timestamps: true,
        underscored: true
    }
}