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

// to select all anchor element
$("a");
// the same above
jQuery("a");

// select class element
$(".card_image");

// select id element
$("#logoNav");

// all anchor link children that are direct children of a <p> element
$("p > a");
$("ul > li");

// select all descendants of a parent, regardless directly related or not
$("p a");
$("ul li");

// pseudo selectors
$("a:first"); // select first anchor of the page
$("a:last"); // last anchor of the page
$(":header"); // select all header elements on the page <h1>, <h2>, etc...


/* --------------------------------------------------Challenge */
// All images, based on the element type
$("img");

// The card_image class
$(".card_image");

// The footer, using its id
$("#my_footer");

// All paragraph tags within the footer
$("#my_footer p");

// All header elements (<h1> through <h6>)
$(":header");

// The first element on the page
$(":first");

// The last div on the page
$("div:last");

// The last image on the page
$("img:last");

// All elements with an href attribute
$("[href]");