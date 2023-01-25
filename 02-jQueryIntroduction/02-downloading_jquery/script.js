$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
});

/* -------------------------------------------------CSS with jQuery */

// check the background color of <p> elements
$("p").css("background-color");

// check the font of <p> elements
$("p").css("font-family");

// change the css of any element
$("li").css("color", "red"); // change the text of all <li> to red
$("h2").css("text-decoration", "underline");
$("ul").css("border", "solid 1px #ccc"); // adds a 1px wide border to all lists

$("#my_footer").html(); // retrieves all html from "my_footer" id
$("body").html(); // retrieves all html of the body

// change html content using jQuery
$("#my_footer").html("<h1>This is my fancy new content. Thanks jQuery</h1>"); // replaced the <p> in the "my_footer" id

// replace the text content of an element
$("#my_footer").text("This is my new fancy text. Thanks again jQuery.");

// insert new element
$("#my_footer").append(" <span>&copy; 2023.</span>");
