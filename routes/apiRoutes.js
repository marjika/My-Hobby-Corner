var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/toys", function(req, res) {
    db.Toy.findAll({
      limit: 5,
      order: [['id', 'DESC']]
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/toys/sort", function(req, res) {
    db.Toy.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/general", function(req, res) {
    db.General.findAll({}).then(function(dbGenerals) {
      res.render("sharing", {
        general: dbGenerals
      });
    });
  });

  app.put("/api/toys/:id", function(req, res) {
    db.Toy.update({
      comments: req.body.comments
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.post("/api/toys", function(req, res) {
    db.Toy.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/general", function(req, res) {
    db.General.create(req.body).then(function(dbGeneral) {
      res.json(dbGeneral);
    });
  });

  app.delete("/api/toys/:id", function(req, res) {
    db.Toy.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
