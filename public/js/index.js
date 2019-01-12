// Gets user name and displays if he/she is signed in
var API = {
  grabUser: function() {
    return $.ajax({
      url: "/api/user_data",
      type: "GET"
    });
  }
};

API.grabUser().then(function(data) {
  var thisUser = data.email;
  if (thisUser !== undefined) {
    $("#user-name").append(thisUser);
  }
});
