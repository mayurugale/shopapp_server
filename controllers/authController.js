const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { name,userName ,email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({ name, email, userName, password: hashedPassword });
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      $or: [{ email: email }, { userName: email }]
  });
    if (!user) return res.status(401).send('Invalid Email or Password');
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).send('Invalid Email or Password');
    const { password: _, ...userWithoutPassword } = user.toObject();
    const token = jwt.sign({ _id: userWithoutPassword._id }, 'secretKey', { expiresIn: '1h' });
    res.status(200).json({ userWithoutPassword,token });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.status(200).json(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
};