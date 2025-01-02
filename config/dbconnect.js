const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    //mongodb+srv://mayur:Mayur%40517@shopapp.iemur.mongodb.net/
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
