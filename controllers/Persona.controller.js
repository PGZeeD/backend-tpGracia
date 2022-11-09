import { Persona } from '../models/Persona.model.js';

export const mostrarPersonas = async (req, res) => {
  try {
    const personas = await Persona.find({});
    if (!personas) {
      return res.status(200).json({
        message: 'Personas no encontradas',
      });
    } else {
      return res.status(200).json({
        ok: 'Exito al Mostrar Personas',
        message: personas,
      });
    }
  } catch (error) {
    const { message } = error;
    return res.status(404).json({
      message,
    });
  }
};

export const nuevaPersona = async (req, res) => {
  const { nombre, apellido, dni, email, fnacim, telefono } = req.body;
  try {
    const persona = new Persona({ nombre, apellido, dni, email, fnacim, telefono });
    if (persona) await persona.save();
    return res.json({ ok: 'persona creada', message: persona });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Ya existe esta persona' });
    }
  }
};

export const buscarPersona = async (req, res) => {
  try {
    const persona = await Persona.findOne({ dni: req.params.dni });
    console.log(persona);
    if (persona) {
      return res.status(200).json({
        ok: 'Exito al buscar Persona',
        message: persona,
      });
    } else {
      return res.status(200).json({
        message: 'Persona no encontrada',
      });
    }
  } catch (error) {
    const { message } = error;
    return res.status(404).json({
      message,
    });
  }
};

export const borrarPersona = async (req, res) => {
  try {
    const exist = await Persona.findOne({ dni: req.params.dni });
    if (exist) {
      await Persona.findOneAndRemove({ dni: req.params.dni });
      return res.status(200).json({
        message: 'Persona borrada',
      });
    } else {
      return res.status(200).json({
        message: 'No es posible borrar, No se encuentra persona',
      });
    }
  } catch (error) {
    const { message } = error;
    return res.status(404).json({
      message,
    });
  }
};

export const actualizarPersona = async (req, res) => {
  try {
    const persona = await Persona.findOneAndUpdate(
      { dni: req.params.dni },
      { $set: req.body },
    );
    if (!persona) throw new Error('No se encontro persona');
    return res.status(200).json({
      message: 'Actualizacion realizada',
    });
  } catch (error) {
    const { message } = error;
    return res.status(404).json({
      message,
    });
  }
};
