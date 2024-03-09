import pg from 'pg';
import "dotenv/config";

const pool = new pg.Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  allowExitOnIdle: true,
});

// Verificar la conexión
pool.query('SELECT NOW()', (err, res) => { 
  if (err) {
    console.error('Error al conectar con la base de datos:', err);
  } else {
    console.log('Base de datos conectada:', res.rows[0].now);
  }
});

export default pool;
