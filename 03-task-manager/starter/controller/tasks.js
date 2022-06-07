const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async")
const { createCustomerError } = require("../errors/custom-error");

// createTask
const createTask =asyncWrapper(async (req, res) => {

    const task = await Task.create(req.body);
    res.status(201).json({ task });
  
}) 
//getAllTasks
const getAllTasks = asyncWrapper(async (req, res) => {
  
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  
})

//getTask
const getTask =asyncWrapper(async (req, res, next) => {
 
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      // const error = new Error('Not Found');
      // error.status = 404;
      return next(createCustomerError(`No task with id: ${taskID}`, 404));
    }
    res.status(200).json({ task });
  
}) 

//deleteTask
const deleteTask =asyncWrapper(async (req, res,next) => {

    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return next(createCustomerError(`No task with id: ${taskID}`, 404));
    }
    res.status(200).json({ task });
  
}) 

//updateTask
const updateTask =asyncWrapper(async (req, res,next) => {

    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    !task
      ? next(createCustomerError(`No task with id: ${taskID}`, 404))
      : res.status(200).json({ task });
  
}) ;

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  
};
