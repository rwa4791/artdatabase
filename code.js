
    // START CODING BELOW!!
var config = {
    apiKey: "AIzaSyBxSfTV_aXe2hP3S7mdz70RPuvYdDXCtMU",
    authDomain: "art-database.firebaseapp.com",
    databaseURL: "https://art-database.firebaseio.com",
    projectId: "art-database",
    storageBucket: "art-database.appspot.com",
    messagingSenderId: "735715142891"
  };
  firebase.initializeApp(config);

    // Create a variable to reference the database
    var database = firebase.database();

    // Initial Values
    var name = "";
    var email = "";
    var product = "";
    var cost = 0;
    var cash = "";
    var comment = ""

    // Capture Button Click
    $("#add-user").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();

      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      name = $("#name-input").val().trim();
      email = $("#email-input").val().trim();
      product = $("#product-input").val().trim();
      cost = $("#cost-input").val().trim();
      cash = $("#cash-input").val().trim();
      comment = $("#comment-input").val().trim();

      database.ref().push({
        name: name,
        email: email,
        product: product,
        cost: cost,
        cash: cash,
        comment: comment
      });

    });

    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().limitToLast(10).on("child_added", function(snapshot) {

      // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      console.log(snapshot.val().name);
      console.log(snapshot.val().email);
      console.log(snapshot.val().product);
      console.log(snapshot.val().cost);
      console.log(snapshot.val().cash);
      console.log(snapshot.val().comment);

      // Change the HTML to reflect
      $("#name-display").html(snapshot.val().name);
      $("#email-display").html(snapshot.val().email);
      $("#product-display").html(snapshot.val().product);
      $("#cost-display").html(snapshot.val().cost);
      $("#cash-display").html(snapshot.val().cash);
      $("#comment-display").html(snapshot.val().comment);



      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
