'use strict';

const mongoose = require('mongoose');
// const url = process.env.MONGOOSE_URI;
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const notes = mongoose.Schema({
  text: { type: String, required: true},
  category: { type: String, required: true},
});

module.exports = mongoose.model('notes', notes);
