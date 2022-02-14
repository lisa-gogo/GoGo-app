const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "halfhalf",
    host:"halfhalf.ckrqj9sxgvaw.us-east-1.rds.amazonaws.com",
    port: 5432,
    database: "gogo"
});

module.exports = pool;

