module.exports = function(sequelize, DataTypes) {
  var Toy = sequelize.define("Toy", {
    text: DataTypes.STRING,
    photoPath: DataTypes.STRING,
    description: DataTypes.TEXT,
    comments: DataTypes.TEXT
  });
  return Toy;
};
