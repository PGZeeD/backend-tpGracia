import express from 'express';
import {
  mostrarTramites,
  nuevoTramite,
  buscarTramite,
  borrarTramite,
  actualizarTramite,
} from '../controllers/Tramite.controller.js';
import { validarResultadosExpress } from '../middlewares/validationResultExpress.js';

const router = express.Router();

router.get('/tramites', mostrarTramites);

router.post('/nuevoTramite', validarResultadosExpress, nuevoTramite);

const id = '/tramite/:id';
router.get(id, buscarTramite);
router.delete(id, borrarTramite);
router.patch(id, actualizarTramite);

export default router;
