import { Tramite } from '../models/Tramite.model.js';

export const mostrarTramites = async (req, res) => {
  try {
    const tramites = await Tramite.find({});
    if (!tramites) {
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
  const { descripcion, fAlta, fBaja, dniAutor, tipo } = req.body;
  try {
    const tramite = new Tramite({ descripcion, fAlta, fBaja, dniAutor, tipo });
    if (tramite) await tramite.save();
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
    const tramite = await Tramite.find({ _id: req.params.id });
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
    const exist = await Tramite.findOne({ _id: req.params.id });
    if (exist) {
      await Tramite.findOneAndRemove({ _id: req.params.id });
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
    const tramite = await Tramite.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
    );
    if (!tramite) throw new Error('No se encontro tramite');
    return res.status(200).json({
      message: 'Tramite actualizado',
    });
  } catch (error) {
    const { message } = error;
    return res.status(404).json({
      message,
    });
  }
};
