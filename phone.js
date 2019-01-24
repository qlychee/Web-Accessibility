$(document).ready(function() { // do this when the document is loaded
    $("#dialer").show(); // show dialer
    $("#contact_list").hide(); // hide the contact list
    $("#add_contact").hide();
});

$("#button1").click(function() { // when "button_id" is clicked
    $("#dialer").show(); // show dialer
    $("#contact_list").hide(); // hide the contact list
    $("#add_contact").hide();
});
$("#button2").click(function() { // when "button_id" is clicked
    $("#dialer").hide(); // show dialer
    $("#contact_list").show(); // hide the contact list
    $("#add_contact").hide();
});
$("#button3").click(function() { // when "button_id" is clicked
    $("#dialer").hide(); // show dialer
    $("#contact_list").hide(); // hide the contact list
    $("#add_contact").show();
});
