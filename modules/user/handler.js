const model = require("./model");

exports.create = async function (req, res) {
  try {
    const user = req.body;
    const data = await model.createUser(user);
    res.status(data.code).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.get = async function (req, res) {
  try {
    const { id } = req.params;
    const data = await model.getUser(id);
    res.status(data.code).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getUsers = async function (req, res) {
  try {
    const data = await model.getAllUsers();
    res.status(data.code).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async function (req, res) {
  try {
    const { id } = req.params,
      { message } = req.body,
      data = await model.updateUser(id, message);
    res.status(data.code).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.delete = async function (req, res) {
  try {
    const { id } = req.params;
    const data = await model.deleteUser(id);
    res.status(data.code).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
