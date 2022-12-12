const { modelNames } = require("mongoose");
const { Todo } = require("./schema");
const createNewTask = async (request, response) => {
    console.log(request.body);
    await Todo.create(request.body);
    return response.json({ data: "Task Added" });
};

const updateTask = async (request, response) => {
    var TaskId = request.query.id;
    await Todo.findByIdAndUpdate(TaskId, request.body);
    return response.json({ data: "Task Updated" });
};


const readTask = async (request, response) => {
    var TaskId = request.query.id;
    if (TaskId) {
        var Taskdata = await Todo.findById(TaskId);
    }
    else {
        var Taskdata = await Todo.find({});
    }
    return response.json(Taskdata);
};


const deleteTask = async (request, response) => {
    var TaskId = request.query.id;
    await Todo.findByIdAndDelete(TaskId);
    return response.json({ data: "Task deleted Successfully" });
};

const updateStatus = async (request, response) => {
    var TaskId = request.query.id;
    await Todo.findByIdAndUpdate(TaskId, {$set:{status:false}});
    return response.json({ data: "Status Updated" });
}
module.exports = { createNewTask, updateTask, readTask, deleteTask, updateStatus };