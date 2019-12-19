const AchieveController = require("../controllers/achievement.controller");

module.exports.AchieveRoutes = app => {
  app.get("/api/achievements", AchieveController.showAllAchievements);
  app.get("/api/achievement/:id", AchieveController.showOneAchievement);
  app.post("/api/achievements/new/:id", AchieveController.createAchievement);
  app.delete("/api/achievements/delete/:id", AchieveController.deleteAchievement);
  app.put("/api/achievements/update/:id", AchieveController.updateAchievement);
};
