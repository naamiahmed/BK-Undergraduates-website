// Use ES module imports
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import registrationRoutes from './routes/RegistrationRoutes.js'; // .js extension required in ES modules

// Create the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = "mongodb+srv://BKU2024:<db_password>@bku-cluster.04iot.mongodb.net/?retryWrites=true&w=majority&appName=BKU-Cluster";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection failed:', err));

// Import routes
app.use('/api', registrationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
