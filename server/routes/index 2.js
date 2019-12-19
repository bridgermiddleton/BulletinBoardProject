const { FamilyRoutes } = require("./family.routes");
const { UserRoutes } = require("./user.routes");
const { AchieveRoutes } = require("./achievement.routes");

module.exports = app => {
  FamilyRoutes(app);
  UserRoutes(app);
  AchieveRoutes(app);
};
