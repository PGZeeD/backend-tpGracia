import express from 'express';
import {
  mostrarTramites,
  nuevoTramite,
  buscarTramite,
  borrarTramite,
  actualizarTramite,
} from '../controllers/Tramite.controller.js';

const router = express.Router();

router.get('/tramites', mostrarTramites);

router.post('/nuevoTramite/:dni', nuevoTramite);

const dni = '/tramite/:dni';
router.get(dni, buscarTramite);
router.delete(dni, borrarTramite);
router.patch(dni, actualizarTramite);

export default router;
