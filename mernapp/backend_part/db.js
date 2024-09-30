const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Foodfly:Ds123@cluster0.3zwwu.mongodb.net/Foodfly?retryWrites=true&w=majority&appName=Cluster0';

const connectToMongo = async () => {
  try {
    // Use async/await and remove the callback
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Ensure this is included for compatibility
    });

    console.log("Connected to MongoDB successfully");

    // Fetch data after successful connection
    const fetched_data = await mongoose.connection.db.collection("food_items");

    const data = await fetched_data.find({}).toArray(); // Using async/await instead of a callback
    // console.log();

  }
   catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

module.exports = connectToMongo;
