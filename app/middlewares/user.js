const { User } = require('../../database');

module.exports = {
  auth: async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(403).json({
        error: 'token_required',
        message: 'Access token are required for this route',
      });
    }

    const token = authorization.split(' ')[1];
    const user = await User.scope('without-auth').findOne({
      where: {
        token: token,
      }
    });

    if (!user) {
      return res.status(401).json({
        error: 'invalid_token',
        message: 'Invalid access token',
      });
    }

    req['user'] = user;
    return next();
  }
}