const Family = require("../models/family.model");
const { User } = require("../models/user.model");
module.exports.createFamily = (req, res) => {
  Family.create(req.body)
    .then(family => res.json(family))
    .catch(err => res.json(err));
};
module.exports.allFamilies = (req, res) => {
  Family.find()
    .then(allFamilies => res.json(allFamilies))
    .catch(err => res.json(err));
};
module.exports.findOneFamily = (req, res) => {
  Family.findOne({ _id: req.params.id })
    .then(family => res.json(family))
    .catch(err => res.json(err));
};
module.exports.deleteFamily = (req, res) => {
  Family.remove({ _id: req.params.id })
    .then(family => res.json(family))
    .catch(err => res.json(err));
};
module.exports.updateFamily = (req, res) => {
  const user = new User(req.body);
  Family.update({ _id: req.params.id }, { $push: { users: user } })
    .then(user => res.json(user))
    .catch(err => res.json(err));
};
module.exports.addFamilyMember = (req, res) => {
  User.findOne({ _id: req.params.userid })
    .then(user => {
      Family.update({ _id: req.params.familyid }, { $push: { users: user } })
        .then(data => {
          console.log(data);
          return res.json(data);
        })
        .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
};
