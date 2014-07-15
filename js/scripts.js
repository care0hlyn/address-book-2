$(document).ready(function(){
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var newFirstName = $('#new-first-name').val();
    var newLastName = $('#new-last-name').val();

    var newContact = { firstName: newFirstName, lastName: newLastName, addresses: [] };

    $('.new-address').each(function() {
     var inputtedStreet = $(this).find('input.street').val();
     var inputtedCity = $(this).find('input.city').val();
     var inputtedState = $(this).find('input.state').val();

     alert("Street: " + inputtedStreet + "City: " + inputtedCity + "State: " + inputtedState);

     var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState};

     newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" +
                            newContact.firstName +
                            "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");

      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " +
                                address.city + ", " + address.state + "</li>");
      });
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");

  }); // submit()

  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                              '<div class="form-group">' +
                              '<label for="new-street-address">Street:</label>' +
                              '<input type="text" class="form-control street">' +
                              '</div> <div class="form-group">' +
                              '<label for="new-city-address">City:</label>' +
                              '<input type="text" class="form-control city">' +
                              '</div> <div class="form-group">' +
                              '<label for="new-state-address">State:</label>' +
                              '<input type="text" class="form-control state">' +
                              '</div></div>');
  }); // click()
});

