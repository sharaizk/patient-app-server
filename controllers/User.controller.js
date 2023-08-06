const Users = require("../models/User.model");
const bcrypt = require("bcrypt");
const e = require("express");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(403).json({
        error: "Invalid data",
        data: null,
      });
    }

    const userExist = await Users.findOne({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (userExist) {
      return res.status(404).json({
        error: "Email already in use",
        data: null,
      });
    }
    const newUser = await Users.create({
      email: email,
      password: password,
      name: name,
    });

    if (newUser) {
      return res.status(200).json({
        error: "You signed up successfully",
        data: null,
      });
    } else {
      return res.status(500).json({
        error: "Something went wrong while signing you up",
        data: null,
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong while signing you up",
      data: null,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(403).json({ error: "fields are empty" });
    }

    const existedUser = await Users.findOne({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (!existedUser) {
      return res.status(422).json({ error: "User doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existedUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(422).json({ error: "Incorrect Email or Password" });
    }

    const token = jwt.sign(
      {
        name: existedUser.name,
        userID: existedUser.id,
        email: existedUser.email,
      },
      process.env.JWT_KEY
    );

    return res.status(200).json({
      name: existedUser.name,
      userID: existedUser.id,
      email: existedUser.email,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong while login",
      data: null,
    });
  }
};

exports.myLoggedIn = async (req, res) => {
  try {
    const { email } = req.user;

    if (!email) {
      return res.status(404).json({
        error: "not logged in",
      });
    }

    const existedUser = await Users.findOne({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (!existedUser) {
      return res.status(404).json({
        error: "invalid token",
      });
    }
    return res.status(200).json({
      name: existedUser.name,
      userID: existedUser.id,
      email: existedUser.email,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong while login",
      data: null,
    });
  }
};
