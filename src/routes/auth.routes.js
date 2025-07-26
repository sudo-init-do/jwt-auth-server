const express = require('express');
const { login, protectedRoute } = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/login', login);
router.get('/protected', authMiddleware, protectedRoute);

module.exports = router;
