const { print, checkHash, generateToken } = require('../helper');
const { User } = require('../../database');

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: 'email_password_required',
        message: 'Email or password are required',
      });
    }

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({
        error: 'user_not_found',
        message: 'User not found',
      });
    }

    if (!checkHash(password, user.password)) {
      return res.status(403).json({
        error: 'wrong_password',
        message: 'Email and password are invalid',
      });
    }

    const token = generateToken(64);
    user.token = token;
    await user.save();

    print(`User '${user.email}' has logged in`);
    return res.status(200).json({
      token: token,
    });
  },

  info: async (req, res) => {
    return res.status(200).json(req.user);
  }
}