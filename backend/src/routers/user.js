const UserRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: ".env" });

const User = require("../database/models/users");

const { createJWTtoken, authJWT } = require("../middlewares/jwt");

UserRouter.post("/register", async (req, res) => {
    try {
      const { name, email, phoneNumber, password } = req.body;
  
      if (!name || !email || !phoneNumber || !password) {
        return res.status(400).json({ message: "Fill all the fields" });
      }
  
      const existingUser = await User.findOne({ $or: [{ email }, { phoneNumber }] });
  
      if (existingUser) {
        return res.status(400).json({ message: "Email or phone number already in use" });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        name,
        email,
        phoneNumber,
        password: hashedPassword,
      });
  
      await newUser.save();
  
      // Generate JWT token
      const token = await createJWTtoken(newUser);
  
      return res.status(201).json({
        message: "User registered successfully!",
        user: newUser,
        token,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Server Error, Try again later.",
      });
    }
  });

  UserRouter.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: 'Fill all the fields' });
      }
  
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const isPasswordMatch = await bcrypt.compare(password, user.password);
  
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = await createJWTtoken(user);
  
      return res.status(200).json({
        message: 'Login successful',
        user: {
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
        },
        token,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server Error, Try again later.' });
    }
  });

  UserRouter.get('/profile', async (req, res) => {
    try {
      const token = req.header('x-auth-token');
  
      if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
      }
  
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

      console.log(decoded);
  
      const user = await User.findOne({ email: decoded.email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const userProfile = {
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber
      };
  
      return res.status(200).json({ user: userProfile });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server Error, Try again later.' });
    }
  });

module.exports = UserRouter;
