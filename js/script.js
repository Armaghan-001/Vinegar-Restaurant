$(document).ready(function() {
    
    
    setTimeout(function() {
        $('#preloader').fadeOut('slow', function() {
            $('body').css('overflow', 'auto');
        });
    }, 2500); 

    
    const dateInput = document.querySelector('.date-no-year');
    if (dateInput) {
        
        dateInput.style.color = "rgba(255,255,255,0.7)";
        
        dateInput.addEventListener('change', function() {
            if (this.value) {
                this.style.color = "#ffffff"; 
            }
        });
    }

    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    
    var scrollBtn = $('#scrollToTop');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            scrollBtn.addClass('active');
        } else {
            scrollBtn.removeClass('active');
        }
    });

    scrollBtn.click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    reveal(); 
});