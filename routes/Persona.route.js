import express from 'express';
import {
  mostrarPersonas,
  nuevaPersona,
  mostrarPersona,
  borrarPersona,
  actualizarPersona,
} from '../controllers/Persona.controller.js';
import { body } from 'express-validator';
import { validarResultadosExpress } from '../middlewares/validationResultExpress.js';

const router = express.Router();

router.get('/personas', mostrarPersonas);
router.post(
  '/nuevaPersona',
  [
    body('email', 'Formato de email incorrecto').trim().isEmail().normalizeEmail(),
    body('dni', 'Minimo 8 caracteres').trim().isLength({ min: 8 }),
  ],
  validarResultadosExpress,
  nuevaPersona,
);
const byDni = '/persona/:param';
router.get(byDni, mostrarPersona);
router.delete(byDni, borrarPersona);
router.patch(byDni, actualizarPersona);

export default router;
