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
      .isLength({ min: 2, max: 50 }).withMessage("Name must be between 2 and 50 characters.")
      .matches(/^[A-Z][a-z]+( [A-Z][a-z]+){1,2}$/).withMessage("Name must be 2 or 3 words with each starting with a capital letter."),

    body("email")
      .trim()
      .notEmpty().withMessage("Email is required.")
      .isEmail().withMessage("Invalid email format.")
      .isLength({ max: 100 })
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).withMessage("Enter a valid email."),

    body("message")
      .trim()
      .notEmpty().withMessage("Message is required.")
      .isLength({ min: 10, max: 500 })
      .matches(/^[^<>]*$/).withMessage("Message cannot contain < or >")
      .matches(/[a-zA-Z]/).withMessage("Message must contain readable words.")
      .custom((value) => {
        const words = value.trim().split(/\s+/);
        console.log("Words being validated:", words); // Log the words for debugging
        if (words.length < 3) throw new Error("Message must contain at least 3 English words.");
        for (let word of words) {
          if (!englishWordsSet.has(word.toLowerCase())) {
            throw new Error(`"${word}" is not a recognized English word.`);
          }
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
