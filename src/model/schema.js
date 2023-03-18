const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  _id: {
    type: String,
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
