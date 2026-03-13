class Database {
    constructor() {
        this.host = "localhost";
        this.dbName = "tcc_projeto";
    }

    conectar() {
        // Aqui viria a lógica de conexão com o banco (MySQL, MongoDB, etc.)
        console.log("Conexão com o banco de dados preparada.");
    }
}

module.exports = Database;