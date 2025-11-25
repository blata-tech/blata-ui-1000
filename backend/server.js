import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { body, validationResult } from 'express-validator';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import wordListPath from 'word-list'; 
import { pool } from './config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
  
const words = fs.readFileSync(wordListPath, 'utf8').split('\n');
const englishWordsSet = new Set(words);

const app = express();
const port = process.env.PORT || 3000;

// CORS configuration for production
const allowedOrigins = [
  'https://www.blatatechnology.net',
  'https://blatatechnology.net',
  'http://localhost:5173', // for local development
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(bodyParser.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Blata Technology Backend API' });
});

app.post(
  "/contact",
  [
    body("name")
      .trim()
      .notEmpty().withMessage("Name is required.")
      .isLength({ min: 2, max: 100 }).withMessage("Name must be between 2 and 100 characters.")
      .matches(/^[a-zA-Z\s'-]+$/).withMessage("Name can only contain letters, spaces, apostrophes, and hyphens.")
      .custom((value) => {
        const words = value.trim().split(/\s+/);
        if (words.length < 2) {
          throw new Error("Name must contain at least two words.");
        }
        return true;
      }),
    body("email")
      .trim()
      .notEmpty().withMessage("Email is required.")
      .isEmail().withMessage("Invalid email format.")
      .isLength({ max: 200 }).withMessage("Email must not exceed 200 characters.")
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).withMessage("Enter a valid email address."),
    body("message")
      .trim()
      .notEmpty().withMessage("Message is required.")
      .isLength({ min: 10, max: 500 }).withMessage("Message must be between 10 and 500 characters.")
      .matches(/^[^<>]*$/).withMessage("Message cannot contain < or > characters.")
      .custom((value) => {
        const words = value.trim().split(/\s+/);
        if (words.length < 3) {
          throw new Error("Message must contain at least 3 words.");
        }
        return true;
      }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, email, message } = req.body;

    try {
      const query = "INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)";
      await pool.query(query, [name, email, message]);
      res.status(200).json({ message: "Message saved successfully!" });
    } catch (err) {
      console.error("DB error:", err);
      res.status(500).json({ errors: "Failed to save message." });
    }
  }
);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});