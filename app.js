
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend-backend communication
app.use(express.json()); // To parse JSON bodies

// Dummy user data for testing (No hashing)
const users = [
  {
    id: 1,
    email: 'testing@email.com',
    password: 'P@ssword', // Plain-text password
  },
];

// Login route
app.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate request data
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find the user by email
    const user = users.find((item) => item.email === email);
    if (!user) return res.status(400).json({ error: 'Invalid credentials (user not found)' });

    // Compare password with plain-text password in the database
    if (password !== user.password) {
      return res.status(400).json({ error: 'Invalid credentials (password mismatch)' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, 'secretKey', { expiresIn: '1h' });

    // Send token to client
    // return res.json({ token });
    return res.json({ sucess:'Login success' });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Root route (for testing)
app.get('/', (req, res) => {
  res.send('Backend server is running.......');
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

