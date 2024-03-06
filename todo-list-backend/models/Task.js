// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  category: { type: String, required: false },
  deadline: { type: Date, required: false },
  completed: { type: Boolean, default: false },
  // Add a userId field to link the task to a user
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }

}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
