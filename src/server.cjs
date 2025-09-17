const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blata_contact', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a Message schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);


// API to fetch all messages
app.get('/api/messages', async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
});
app.post('/api/messages', async (req, res) => {
  try {
    const msg = new Message(req.body);
    await msg.save();

    res.status(201).json(msg);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});