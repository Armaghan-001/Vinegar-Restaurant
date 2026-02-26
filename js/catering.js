$(document).ready(function() {
    
    // 1. Preloader Logic (Updated for smoother finish)
    setTimeout(function() {
        $('#preloader').fadeOut('slow', function() {
            $('body').css('overflow', 'auto');
        });
    }, 2500); // 2.5 seconds tak animation chalegi

    // 2. Date Input Fix (Saal hatane aur placeholder jaisa behavior dene ke liye)
    const dateInput = document.querySelector('.date-no-year');
    if (dateInput) {
        // Jab tak date select na ho, text thoda transparent rahe placeholder ki tarah
        dateInput.style.color = "rgba(255,255,255,0.7)";
        
        dateInput.addEventListener('change', function() {
            if (this.value) {
                this.style.color = "#ffffff"; // Date select hone par bright white ho jaye
            }
        });
    };
});


