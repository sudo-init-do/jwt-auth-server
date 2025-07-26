const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Dummy user
const dummyUser = {
  id: 1,
  username: 'student',
  passwordHash: bcrypt.hashSync('password123', 10),
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username !== dummyUser.username || !bcrypt.compareSync(password, dummyUser.passwordHash)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: dummyUser.id, username: dummyUser.username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
};

exports.protectedRoute = (req, res) => {
  res.json({ message: 'Access granted to protected route', user: req.user });
};
