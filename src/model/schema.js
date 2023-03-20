const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  Image: {
    type: String,
  },
  Name: {
    type: String,
  },
  Source: {
    type: String,
  },
});

const blog = new mongoose.model("Collection", blogSchema);

module.exports = blog;
