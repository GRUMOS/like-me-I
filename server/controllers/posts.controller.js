import { obtenerLikes, crearPostModel } from "../model/posts.model.js";

export const obtenerLikesController = async (_, res) => {
  try {
    const likes = await obtenerLikes();
    res.status(200).json({ success: true, data: likes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const crearPostController = async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body;

    // Validar que se proporcionaron los datos requeridos
    if (!titulo || !img || !descripcion) {
      return res.status(400).json({ success: false, message: "Todos los campos son obligatorios." });
    }

    const nuevoPost = await crearPostModel(titulo, img, descripcion);
    res.status(201).json({ success: true, data: nuevoPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
