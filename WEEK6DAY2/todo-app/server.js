const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

connectDatabase().catch((err) => console.log(err));

async function connectDatabase() {
  await mongoose
    .connect(
      "mongodb+srv://root:jazzy4123@cluster0.v9abmtm.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("database is connected");
    });
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const app = express();
app.use(cors());
app.use(express.json());
const router = express.Router();
app.use(router);

const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const FormModel = mongoose.model("Form", FormSchema);

router.post("/form", async (req, res) => {
  console.log(req.body);
  const { name, email, message } = req.body;
  const formCreated = new FormModel({
    name: name,
    email: email,
    message: message,
  });
  formCreated.save();
  res.json(formCreated);
});

router.all("/", (req, res) => {
  res.json({
    message: "we are live 🚀🎄🎄🚀",
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server started 🚀🎄🎄🚀");
});
