$(document).ready(function() { // do this when the document is loaded
    $("#dialer").show(); // show dialer
    $("#contact_list").hide(); // hide the contact list
    $("#add_contact").hide();
    $("#help_tab").hide();
});

$("#button1").click(function() { // when "button_id" is clicked
    $("#dialer").show(); // show dialer
    $("#contact_list").hide(); // hide the contact list
    $("#add_contact").hide();
    $("#help_tab").hide();
});
$("#button2").click(function() { // when "button_id" is clicked
    $("#dialer").hide(); // show dialer
    $("#contact_list").show(); // hide the contact list
    $("#add_contact").hide();
    $("#help_tab").hide();
});
$("#button3").click(function() { // when "button_id" is clicked
    $("#dialer").hide(); // show dialer
    $("#contact_list").hide(); // hide the contact list
    $("#add_contact").show();
    $("#help_tab").hide();
});
$("#button4").click(function() { // when "button_id" is clicked
    $("#dialer").hide(); // show dialer
    $("#contact_list").hide(); // hide the contact list
    $("#add_contact").hide();
    $("#help_tab").show();
});

/* fancy dialing functions */
$("#dial_pad button").click(function() {
    $("#dialnum").val($("#dialnum").val() + this.innerText);
})

$("#clear").click(function() {
    $("#dialnum").val("");
})