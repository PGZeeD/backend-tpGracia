import { User } from '../models/User.js';

export const register = async (req, res) => {
  res.json({ ok: 'Register' });

  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();

    //jwt token

    return res.json({ ok: true });
  } catch (error) {
    console.log(error);
  }
};
export const login = (req, res) => {
  res.json({ ok: 'Login' });
};
