const server = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { createNewTask, updateTask, readTask, deleteTask, updateStatus } = require('./basic');
mongoose.connect("mongodb://127.0.0.1:27017/todo");
mongoose.connection.on("connected", () => {
    console.log("DB Connected");
});
mongoose.connection.on("error", (err) => {
    console.log(err);
});
const app = server();
app.use(cors());
app.use(bodyParser.json());
app.post('/create-task', createNewTask);
app.put('/update-task', updateTask);
app.get('/read-task', readTask);
app.delete('/delete-task', deleteTask);
app.put('/update-status', updateStatus);
app.listen(5000, () => {
    console.log("Server Started");
})