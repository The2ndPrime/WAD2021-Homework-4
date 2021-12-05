const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "",
    database: "wad2021homework4",
    host: "localhost",
    port: "5432",
});

module.exports = pool;