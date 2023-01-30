// run once the DOM is fully loaded and once the HTML is fully rendered
$(document).ready(function() {
    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");
});