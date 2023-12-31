const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  githubId: String,
  username: String,
  sites: [
    {
      title: String,
      imageName: String,
      hostUrl: String,
      repo: String,
    },
  ],
});

module.exports = mongoose.model("user", schema);
