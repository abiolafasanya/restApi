const uuid = require("uuid").v4(),
  date = new Date(),
  createDate = date.toISOString(),
  updatedAt = date.toISOString(),
  userDb = [];

exports.createUser = (body) => {
  const user = body,
    // creates user object
    newUser = {
      id: uuid,
      name: user.name,
      age: user.age,
      message: user.message,
      createDate,
      updatedAt,
    };
  // add new user to database
  userDb.push(newUser);

  const userInfo = findUserById(newUser.id);
  return { data: userInfo, code: 201, message: "User created" };
};

function findUserById(id) {
  return userDb.find((user) => user.id == id);
}

exports.getUser = (id) => {
  const user = findUserById(id);
  if (user) return { data: user, code: 200, message: "User retrieved" };
  else return { data: null, code: 404, message: "User not found" };
};

exports.getAllUsers = () => {
  return { data: userDb, code: 200, message: "All Users retrieved" };
};

exports.updateUser = async (id, body) => {
  let user = findUserById(id);
  if (user) {
    user = { ...user, body };
    user.updatedAt = new Date().toISOString;
    // update database
    userDb.splice(userDb.indexOf(findUserById(id)), 1, user);
    // fetch updated user
    const updatedUser = findUserById(id);
    return { data: updatedUser, code: 200, message: "User updated" };
  } else return { data: null, code: 404, message: "User not found" };
};

exports.deleteUser = async (id) => {
  const user = findUserById(id);
  if (user) {
    userDb.splice(userDb.indexOf(user), 1);
    return { ok: true, message: "User deleted", code: 200 };
  } else return { ok: false, message: "User not found", code: 404 };
};
