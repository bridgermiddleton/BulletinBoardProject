const AchieveController = require("../controllers/achievement.controller");

module.exports.AchieveRoutes = app => {
  app.get("/api/achievements", AchieveController.showAllAchievements);
  app.get("/api/achievement/:id", AchieveController.showOneAchievement);
  app.post("/api/achievements/new/:id", AchieveController.updateAchievement);
  app.delete("/api/achievements/delete/:id", AchieveController.deleteAchievement);
};
