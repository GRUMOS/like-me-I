import { pool } from '../db/config.js';

export const obtenerLikes = async () => { 
  try { 
    const likes = await pool.query('SELECT id, titulo, img, descripcion FROM POSTS');
    return likes.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const crearPostModel = async (titulo, img, descripcion) => { 
  try { 
    const nuevoPost = await pool.query('INSERT INTO POSTS (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *', [titulo, img, descripcion]);
    return nuevoPost.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}



