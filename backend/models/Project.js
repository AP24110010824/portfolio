const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [String],
  image: { type: String },
  sourceLink: { type: String },
  demoLink: { type: String }
});

module.exports = mongoose.model('Project', projectSchema);
