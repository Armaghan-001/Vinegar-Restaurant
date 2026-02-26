$(document).ready(function() {
    $(window).scroll(function() {
        // Agar page 50px se niche scroll ho toh 'scrolled' class add karein
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});

function scrollManual(distance) {
    const scroller = document.getElementById('topScroller');
    if (scroller) {
        scroller.scrollBy({
            left: distance,
            behavior: 'smooth'
        });
    }
}



