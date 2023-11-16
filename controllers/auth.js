const userSchema = require("../models/user");
const axios = require("axios");

module.exports.landing = async (req, res) => {
  try {
    res.render("index", { client_id: process.env.GITHUB_CLIENT_ID });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error, " + error,
    });
  }
};
module.exports.authentication = async (req, res) => {
  try {
    const requestToken = req.query.code;

    axios({
      method: "post",
      url: `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${requestToken}`,
      // Set the content type header, so that we get the response in JSON
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      const access_token = encodeURIComponent(response.data.access_token);
      res.cookie("access_token", response.data.access_token, {
        maxAge: 24 * 60 * 60 * 10,
      });
      res.redirect("/auth/success");
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error, " + error,
    });
  }
};
module.exports.successfulAuthentication = async (req, res) => {
  try {
    if (!req.cookies.access_token) {
      res.redirect("/auth");
    }
    axios({
      method: "get",
      url: `https://api.github.com/user`,
      headers: {
        Authorization: "token " + req.cookies.access_token,
      },
    }).then(async (response) => {
      const user = await userSchema.find({ githubId: response.data.id });
      if (user.length == 0) {
        const data = new userSchema({
          githubId: response.data.id,
          username: response.data.login,
        });
        await data.save();
      }
      res.cookie("id", response.data.id, { maxAge: 60 * 60 * 24 * 10 });
      res.redirect("/host");
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error, " + error,
    });
  }
};

module.exports.checkAuthenticated = (req, res, next) => {
  if (req.cookies.id) {
    return next();
  }
  res.redirect("/auth");
};
