import { Tramite } from '../models/Tramite.model.js';
import { Persona } from '../models/Persona.model.js';

export const mostrarTramites = async (req, res) => {
  try {
    let tramites;
    if (req.query.tipo) {
      tramites = await Tramite.find({ tipo: req.query.tipo }).populate('autor');
    } else {
      tramites = await Tramite.find({}).populate('autor');
    }
    if (!tramites.length) {
      return res.status(200).json({
        message: 'Tramites no encontrados',
      });
    } else {
      return res.status(200).json({
        ok: 'Exito al Mostrar Tramites',
        message: tramites,
      });
    }
  } catch (error) {
    const { message } = error;
    return res.status(404).json({
      message,
    });
  }
};

export const nuevoTramite = async (req, res) => {
  const { descripcion, fAlta, fBaja, tipo } = req.body;

  try {
    const persona = await Persona.findOne({ dni: req.params.dni });
    const tramite = new Tramite({ descripcion, fAlta, fBaja, tipo });
    if (tramite) {
      tramite.codigo = persona.dni;
      tramite.autor = persona.id;
      await tramite.save();
    }
    return res.json({ ok: 'tramite creado', message: tramite });
  } catch (error) {
    const { message } = error;
    return res.status(404).json({
      message,
    });
  }
};

export const buscarTramite = async (req, res) => {
  try {
    const tramite = await Tramite.findOne({
      dni: req.params.dni,
      descripcion: req.query.d,
    });
    console.log(tramite);
    if (tramite) {
      return res.status(200).json({
        ok: 'Exito al buscar Tramite',
        message: tramite,
      });
    } else {
      return res.status(200).json({
        message: 'Tramite no encontrado',
      });
    }
  } catch (error) {
    const { message } = error;
    return res.status(404).json({
      message,
    });
  }
};

export const borrarTramite = async (req, res) => {
  try {
    const exist = await Tramite.findOne({
      dni: req.params.dni,
      descripcion: req.query.d,
    });
    if (exist) {
      await Tramite.findOneAndRemove(exist.id);
      return res.status(200).json({
        message: 'Tramite borrado',
      });
    } else {
      return res.status(200).json({
        message: 'No es posible borrar, No se encuentro tramite',
      });
    }
  } catch (error) {
    const { message } = error;
    return res.status(404).json({
      message,
    });
  }
};

export const actualizarTramite = async (req, res) => {
  try {
    const exist = await Tramite.findOne({
      dni: req.params.dni,
      descripcion: req.query.d,
    });
    if (exist) {
      await Tramite.findOneAndUpdate(exist.id, req.body);
      return res.status(200).json({
        message: 'Tramite actualizado',
      });
    } else {
      return res.status(200).json({
        message: 'No se encontro tramite',
      });
    }
  } catch (error) {
    const { message } = error;
    return res.status(404).json({
      message,
    });
  }
};
