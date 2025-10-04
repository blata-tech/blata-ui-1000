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

app.use(bodyParser.json());
app.use(cors());

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
      console.error("DB error:", err); // Log the database error for debugging
      res.status(500).json({ errors: "Failed to save message." });
    }
  }
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
