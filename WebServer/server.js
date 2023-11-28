const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());

const mongoose = require("mongoose");
async function connectDatabase() {
  await mongoose.connect(
    "mongodb+srv://root:jazzy4123@cluster0.v9abmtm.mongodb.net/?retryWrites=true&w=majority"
  );
}

connectDatabase()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

const TaskData = new mongoose.Schema({
  name: String,
  status: String,
});

const Task = mongoose.model("Task", TaskData);

router.post("/Task", async (req, res) => {
  const { name, status } = req.body;
  const taskCreated = new Task({
    name: name,
    status: status,
  });
  await taskCreated.save();
  res.json({
    success: true,
    taskCreated,
  });
});






app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(router);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Application Server is started on port ${PORT}`);
});
