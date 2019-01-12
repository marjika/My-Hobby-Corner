//Displays individual toys from the database and allows clients to comment about them
var API = {
  saveComment: function(id, thisComment) {
    var setComment = {
      comments: thisComment
      };
    return $.ajax({
      type: "PUT",
      url: "../api/toys/" + id,
      data: setComment
    });
  },
  grabUser: function() {
    return $.ajax({
      url: "../api/user_data",
      type: "GET"
    });
  }
};
        $(document).on("click", "#comment-submit", function(event) {
        event.preventDefault();
        var previous = $("#these-comments").text();
        var id = $("#comment-submit").val();
        var comment;
        var thisUser;
        API.grabUser().then(function(data) {
          thisUser = data.email;
          if (thisUser == undefined) {
            if (previous== "") {
              comment = $("#toy-comment").val().trim();
            }
            else {
              comment = previous + "\n" + $("#toy-comment").val().trim();
            }
          }      
          else {
            if (previous == "") {
              comment = $("#toy-comment").val().trim() + " by " + thisUser;
            }
            else {
              comment = previous + "\n" + $("#toy-comment").val().trim() + " by " + thisUser;
            }
          }        
          API.saveComment(id, comment).then(function() {
            $("#toy-comment").val("");
            location.reload();
          });
        });
      });

