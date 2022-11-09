import { Persona } from '../models/Persona.model.js';

export const mostrarPersonas = async (req, res) => {
  try {
    const personas = await Persona.find({});
    return res.status(200).json({
      ok: 'Exito al Mostrar Personas',
      List: personas,
    });
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
    return res.json({ ok: 'persona creada' });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Ya existe esta persona' });
    }
  }
};

export const mostrarPersona = async (req, res) => {
  try {
    const persona = await Persona.find({
      $or: [{ dni: req.params.param }, { email: req.params.param }],
    });
    console.log(persona);
    return res.status(200).json({
      ok: 'Conexión exitosa',
      Respuesta: persona,
    });
  } catch (error) {
    const { message } = error;
    return res.status(404).json({
      message,
    });
  }
};

export const borrarPersona = async (req, res) => {
  try {
    const person = await service.deletePerson(req.params.dni);
    return res.status(200).json({
      message: 'Processing of the Delete response by DNI to /person',
      response: person,
    });
  } catch (error) {
    const { message } = error;
    return res.status(404).json({
      message,
    });
  }
};

export const actualizarPersona = async (req, res) => {
  try {
    const persona = await service.patchPerson(req);
    return res.status(200).json({
      message: 'Processing of the Patch response by DNI to /person',
      response: persona,
    });
  } catch (error) {
    const { message } = error;
    return res.status(404).json({
      message,
    });
  }
};
