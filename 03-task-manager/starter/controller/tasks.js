const Task = require("../models/Task");

// createTask
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ ERRORmsg: error });
  }
};
//getAllTasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ ERRORmsg: error });
  }
};

//getTask
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ ERRORmsg: error });
  }
};

//deleteTask
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOnAndDelete({ _id: taskID });
    !task
    ? res.status(404).json({ msg: `No task with id: ${taskID}` })
    : res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ ERRORmsg: error });
  }
};

//updateTask
const updateTask = async(req, res) => {
  try {
    const {id: taskID}= req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID}, req.body)

    !task
      ? res.status(404).json({ msg: `No task with id: ${taskID}` })
      : res.status(200).json({ task });

  } catch (error) {
    res.status(500).json({ ERRORmsg: error });
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
