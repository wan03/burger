$(function() {
  $(".devour").on("click", function(event) {
    let id = $(this).data("id");      

    let eatenBurger = {
      devoured: 1
    };
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: eatenBurger
  }).then(
      function() {
        location.reload();
      }
    );
});

$(".create-form").on("submit", function(event) {
  event.preventDefault();
  let newBurger = {
    name: $("#bur").val().trim()
  };
  console.log(newBurger);

  $.ajax("/api/burger", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("created new burger");
      location.reload();
    }
  );
});

$(".delete-burger").on("click", function(event) {
  let id = $(this).data("id");
  $.ajax("/api/burger/" + id, {
    type: "DELETE"
  }).then(
    function() {
      console.log("deleted burger", id);
      location.reload();
    }
  );
});
});