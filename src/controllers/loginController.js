const rescue = require( 'express-rescue' );
const authenticateUser = require( '../services/loginService' );

const login = rescue(async (req, res) => {
  const { email, password } = req.body;

  const token = await authenticateUser({ email, password });
  res.status(200).json({ token });
});

module.exports = login;
