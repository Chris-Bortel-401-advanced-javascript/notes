'use strict';

const mongoose = require('mongoose');
// const url = process.env.MONGOOSE_URI;
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

//TODO: Ask about enum and whether it has a use in this situation. Since we are letting the user make there own lists, enum would not work correct?
const notes = mongoose.Schema({ 
  text: { type: String, required: true},
  category: { type: String, required: true},
});

module.exports = mongoose.model('notes', notes);
