import Registration  from '../models/Registration.js';

// Register a new user
export const registerUser = async (req, res) => {
  try {
    const { nameWithInitials, email, whatsappNumber, birthDate, olBatch, alBatch, universityName, universityCourse } = req.body;
    const newRegistration = new Registration({
      nameWithInitials,
      email,
      whatsappNumber,
      birthDate,
      olBatch,
      alBatch,
      universityName,
      universityCourse,
    });
    await newRegistration.save();
    res.status(201).json({ message: 'Registration successful. You will receive your member ID after verification.' });
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    res.status(500).json({ error: 'Error processing registration.' });
  }
};

// Verify user by admin
export const verifyUser = async (req, res) => {
  try {
    const registrationId = req.params.id;
    const updatedRegistration = await Registration.findByIdAndUpdate(
      registrationId,
      { verified: true },
      { new: true }
    );
    res.status(200).json({ message: 'User verified successfully', updatedRegistration });
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    res.status(500).json({ error: 'Error verifying user.' });
  }
};
