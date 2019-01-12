module.exports = function(sequelize, DataTypes) {
    var General = sequelize.define("General", {
      text: DataTypes.STRING,
      commentUser: DataTypes.STRING
    });
    return General;
  };