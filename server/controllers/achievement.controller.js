const { Achievement } = require("../models/achievement.model");
module.exports.createAchievement = (req, res) => {
  Achievement.create(req.body)
    .then(achievement => res.json(achievement))
    .catch(err => res.json(err));
};
module.exports.showAllAchievements = (req, res) => {
  Achievement.find()
    .then(allAchievements => res.json(allAchievements))
    .catch(err => res.json(err));
};
module.exports.showOneAchievement = (req, res) => {
  Achievement.findOne({ _id: req.params.id })
    .catch(achievement => res.json(achievement))
    .then(err => res.json(err));
};
module.exports.updateAchievement = (req, res) => {
  Achievement.update({ _id: req.params.id }, req.body)
    .then(achievement => res.json(achievement))
    .catch(err => res.json(err));
};
module.exports.deleteAchievement = (req, res) => {
  Achievement.remove({ _id: req.params.id })
    .then(achievement => res.json(achievement))
    .catch(err => res.json(err));
};
