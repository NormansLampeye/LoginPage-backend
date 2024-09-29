// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');

// const app = express();
// app.use(cors()); // Enable CORS for frontend-backend communication
// app.use(express.json()); // To parse JSON bodies

// // Dummy user data for testing
// const users = [
//   {
//     id: 1,
//     email: 'test@example.com',
//     password: '$2b$10$dx.lRwl/OwQh.zwf4H.tHegnbormmTdyFMgs8fA1Z3xltFkGa0t6W', // Replace with the hashed password
//     // password: '$2b$10$yourHashedPasswordHere', //hashed password
//   },
// ];

// // Login route
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   // Find the user by email
//   const user = users.find(item => item.email === email);
//   if (!user) return res.status(400).json({ error: 'Invalid credentials1' });

//   // Compare password with hashed password in the database
//   const isValid = await bcrypt.compare(password, user.password);
//   if (!isValid) return res.status(400).json({ error: 'Invalid credentials2' });

//   // Generate a JWT token
//   const token = jwt.sign({ id: user.id, email: user.email }, 'secretKey', { expiresIn: '1h' });
//   res.json({ token });
// });

// // Root route (for testing)
// app.get('/', (req, res) => {
//   res.send('Backend server is running');
// });

// // Start the server
// app.listen(5000, () => {
//   console.log('Server is running on http://localhost:5000');
// });



// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(cors()); // Enable CORS for frontend-backend communication
// app.use(express.json()); // To parse JSON bodies

// // Dummy user data for testing (Password is already hashed)
// const users = [
//   {
//     id: 1,
//     email: 'test@example.com',
//     password: '$2b$10$dx.lRwl/OwQh.zwf4H.tHegnbormmTdyFMgs8fA1Z3xltFkGa0t6W', // Hashed password for 'userPassword'
//   },
// ];

// // Login route
// app.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Validate request data
//     if (!email || !password) {
//       return res.status(400).json({ error: 'Email and password are required' });
//     }

//     // Find the user by email
//     const user = users.find((item) => item.email === email);
//     if (!user) return res.status(400).json({ error: 'Invalid credentials (user not found)' });

//     // Compare password with the hashed password in the database
//     // const isValid = await bcrypt.compare(password, user.password);
//     // console.log('password',password);
//     // console.log('user.password',user.password);
    
//     // if (!isValid) return res.status(400).json({ error: 'Invalid credentials (password mismatch)' });

//     // Generate a JWT token
//     const token = jwt.sign({ id: user.id, email: user.email }, 'secretKey', { expiresIn: '1h' });

//     // Send token to client
//     return res.json({ token });
//   } catch (error) {
//     console.error('Error during login:', error);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Root route (for testing)
// app.get('/', (req, res) => {
//   res.send('Backend server is running321');
// });

// // Start the server
// app.listen(5000, () => {
//   console.log('Server is running on http://localhost:5000');
// });


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
    email: 'userName',
    password: 'userName', // Plain-text password
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

