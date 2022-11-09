import express from 'express';
import { nuevaPersona } from '../controllers/Persona.controller.js';
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
const byId = '/persona/:id';
router.get(byId, mostrarPersona);
router.delete(byId, borrarPersona);
router.patch(byId, actualizarPersona);

export default router;
