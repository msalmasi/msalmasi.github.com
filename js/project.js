//This function will scroll to the top of the page before refreshing or unloading the page.

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(document).ready(function() {
//This function produces a smooth scrolling action when clicking a navigation link
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-100
    }, 1000);
    return false;
});
});

//This function creates a distinct modal window when user clicks "learn more" within a section