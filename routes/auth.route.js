import express from 'express';
const router = express.Router();

router.post('/login', (req, res) => {
  res.json({ ok: true });
});
router.post('/register', (req, res) => {
  res.json({ ok: true });
});

export default router;