require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/auth.routes');

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Mount routes
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
