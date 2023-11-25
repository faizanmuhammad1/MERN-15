const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/MyDB")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  Date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

const myUser = new User({
  name: "John",
  age: 32,
});
const myUser2 = new User({
  name: "Faizan",
  age: 82,
});

myUser.save();
myUser2.save();
