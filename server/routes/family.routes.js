const FamilyController = require("../controllers/family.controller");
module.exports.FamilyRoutes = app => {
  app.get("/api/families", FamilyController.allFamilies);
  app.get("/api/families/:id", FamilyController.findOneFamily);
  app.post("/api/families/new", FamilyController.createFamily);
  app.put("/api/families/update/:id", FamilyController.updateFamily);
  app.delete("/api/families/delete/:id", FamilyController.deleteFamily);
  app.put(
    "/api/families/newmember/:userid/:familyid",
    FamilyController.addFamilyMember
  );
};
