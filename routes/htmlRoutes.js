var db = require("../models");

module.exports = function(app) {
  // Load main page
  app.get("/", function(req, res) {
    db.Toy.findAll({}).then(function(dbToy) {
      res.render("index", {
        msg: "Welcome!",
        toys: dbToy
      });
    });
  });

  //Toy database and search page
  app.get("/search", function(req, res) {
    db.Toy.findAll({
      order: [
        ['text', 'ASC']
      ]
    }).then(function(dbToy) {
      res.render("search", {
        toys: dbToy
      });
    });
  });

  // Load toy page and pass in a toy by id
  app.get("/toys", function(req, res) {
   
   var data = { }
    db.Toy.findAll({
      limit: 5,
      order: [['id', 'DESC']]
    }).then(function(dbToy) {
      data.toy = dbToy
      getGeneral();
    });
    function getGeneral(){
    db.General.findAll({
      order: [['id', 'DESC']]
    }).then(function(dbGenerals) {
      data.general = dbGenerals;
      res.render("sharing", {
        data: data
      });
    });
  }
    
  });

  app.get("/toys/:id", function(req, res) {
    db.Toy.findOne({ where: { id: req.params.id } }).then(function(dbToy) {
      res.render("toys", {
        toy: dbToy
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
