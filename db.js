const Pool = require('pg-pool')

//url de conexao fornecida no elephant
const connectionString = 'postgres://mnuhqyve:6QpmFTffO10IUJw5nmTkKY5yoxxKQJPy@kesavan.db.elephantsql.com/mnuhqyve';
const db = new Pool({connectionString});

module.exports = db;