//This function produces a smooth scrolling action when clicking a navigation link

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-100px
    }, 1000);
    return false;
});


//This function creates a distinct modal window when user clicks "learn more" within a section