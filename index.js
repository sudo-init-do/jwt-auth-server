require('dotenv').config();
const express = require('express');
const authRoutes = require('./src/routes/auth.routes');

const app = express();
app.use(express.json());

// Routes
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
