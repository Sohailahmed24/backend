const express = require('express');
const cors = require('cors');
const request = require('request');  // Ensure you have this installed
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables from .env file

const app = express();

// Define CORS options
const corsOptions = {
  origin: [
   "*"
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
  allowedHeaders: [
    'Content-Type', 
    'Authorization', 
    'X-Addresskey', 
    'X-Content', 
    'X-Experience', 
    'X-Lat', 
    'X-Lng', 
    'X-Locale', 
    'X-Mp', 
    'X-Platform', 
    'X-Visitor-Id'
  ],
  credentials: true,  // Enable cookies and authentication headers
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Proxy endpoint
/* app.use('/', (req, res) => {
  const url = req.url.substring(1);  // Strip leading slash
  const fullUrl = url.startsWith('http') ? url : `https://${url}`;  // Ensure correct protocol
  
  console.log(`Proxying request to: ${fullUrl}`);  // Log the full URL for debugging
  
  req.pipe(request(fullUrl))
    .on('error', (err) => {
      console.error(`Request error: ${err.message}`);
      res.status(500).json({ message: 'Proxy request failed', error: err.message });
    })
    .pipe(res);
}); */
app.get("/",(req,res)=>{
      res.send("Server is running on vercel")
})
// Start the server
const PORT = process.env.PORT || 4000;  // Use port from environment or default to 8080

app.listen(PORT, '0.0.0.0', () => {
  console.log(`CORS proxy server running on port ${PORT}`);
});
