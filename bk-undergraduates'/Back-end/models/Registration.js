import mongoose from 'mongoose';

const registerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  whatsapp: { type: String, optional: true },
  birthDate: { type: Date, required: true },
  olBatch: { type: String, required: true },
  alBatch: { type: String, required: true },
  universityName: { type: String, required: true },
  universityCourse: { type: String, required: true }
});

// Exporting the model
const Registration = mongoose.model('Registration', registerSchema);

export default Registration; // This is the default export
