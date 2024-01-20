const UserRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: ".env" });

const User = require("../database/models/users");

const { createJWTtoken, authJWT } = require("../middlewares/jwt");

UserRouter.post("/register", async (req, res) => {
    try {
      const { name, email, phoneNumber, password } = req.body;
  
      // Credentials validation
      if (!name || !email || !phoneNumber || !password) {
        return res.status(400).json({ message: "Fill all the fields" });
      }
  
      // Check if the email or phoneNumber is already registered
      const existingUser = await User.findOne({ $or: [{ email }, { phoneNumber }] });
  
      if (existingUser) {
        return res.status(400).json({ message: "Email or phone number already in use" });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({
        name,
        email,
        phoneNumber,
        password: hashedPassword,
      });
  
      // Save the user to the database
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

  UserRouter.get('/profile', async (req, res) => {
    try {
      // Extract the JWT token from the request headers
      const token = req.header('x-auth-token');
  
      if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
      }
  
      // Verify the token
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

      console.log(decoded);
  
      // Use the decoded information to identify the user
      const user = await User.findOne({ email: decoded.email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Return the user profile details
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
