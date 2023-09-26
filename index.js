const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Middleware
app.use(cors());
app.use(express.json());

// TODO: Add Routes
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
