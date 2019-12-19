const UserController = require("../controllers/user.controller");
module.exports.UserRoutes = app => {
  app.get("/api/users", UserController.getAllUsers);
  app.post("/api/users/new", UserController.createUser);
  app.get("/api/users/:id", UserController.getOneUser);
  app.put("/api/users/update/:id", UserController.updateUser);
  app.delete("/api/users/delete/:id", UserController.deleteUser);
  app.post("/api/users/login", UserController.login);
};
