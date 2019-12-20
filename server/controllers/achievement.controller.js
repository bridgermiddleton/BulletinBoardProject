const { Achievement } = require("../models/achievement.model");
const { User } = require("../models/user.model");

module.exports.createAchievement = (req, res) => {
  const achievement = new Achievement(req.body);
  User.update({ _id: req.params.id }, { $push: { achievements: achievement } })
    .then(achievement => {
      console.log(achievement);
      return res.json(achievement);
    })
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
  console.log(req.params);
  Achievement.deleteOne({ _id: req.params.id })
    .then(achievement => {
      console.log(achievement);
      res.json(achievement);
    })
    .catch(err => res.json(err));
};
