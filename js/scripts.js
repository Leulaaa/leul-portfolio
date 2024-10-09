$(document).ready(function() {
    // Initialize Owl Carousel
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    // Initialize Google Maps
    function initMap() {
        var mapOptions = {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    }

    initMap();

    // Smooth scrolling
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});
$(document).ready(function() {
    // Initialize Owl Carousel
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    // Google Maps Initialization
    function initMap() {
        var mapOptions = {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    }
    initMap();

    // Smooth Scrolling
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Change Navbar on Scroll
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});
// Animate progress bars on scroll
$(document).ready(function() {
    $('.progress-bar').each(function() {
        var width = $(this).data('width');
        $(this).css('width', width + '%');
    });

    // Smooth Scrolling
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Duration of animations
        easing: 'ease-in-out', // Easing function
        once: true // Animation will happen only once
    });
});
// Filter portfolio items
$(document).ready(function() {
    $('.filter-button').click(function() {
        var filter = $(this).data('filter');
        $('.portfolio-item').each(function() {
            var category = $(this).data('category');
            if (filter === 'all' || filter === category) {
                $(this).fadeIn();
            } else {
                $(this).fadeOut();
            }
        });
    });

    // Initialize Bootstrap Modals
    $('[data-toggle="modal"]').on('click', function() {
        var target = $(this).data('target');
        $(target).modal('show');
    });
});
$(document).ready(function(){
    // Initialize Owl Carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Initialize Fancybox
    $("[data-fancybox]").fancybox({
        buttons: [
            'slideShow',
            'fullScreen',
            'download',
            'thumbs',
            'close'
        ],
        loop: true,
        transitionEffect: "fade",
        caption: function(instance, item) {
            return $(this).data('caption') || '';
        }
    });
});
$(document).ready(function(){
    $("#testimonialsCarousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        smartSpeed: 800,
        dots: true
    });
});
// Initialize Google Map
function initMap() {
    var location = { lat: -34.397, lng: 150.644 }; // Set your location here
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#212121' }] },
            { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
            { featureType: 'administrative.land_parcel', elementType: 'labels.text.fill', stylers: [{ color: '#bdbdbd' }] },
            { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
            { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#181818' }] },
            { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
            { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2c2c2c' }] },
            { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#8a8a8a' }] },
            { featureType: 'road', elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
            { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#000000' }] },
            { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#3d3d3d' }] }
        ]
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Our Location'
    });
}

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var formData = new FormData(this);

    fetch('submit_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('formResponse').innerHTML = '<div class="alert alert-success">Your message has been sent successfully!</div>';
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('formResponse').innerHTML = '<div class="alert alert-danger">An error occurred. Please try again.</div>';
    });
});

// Load Google Maps script
function loadScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
    script.async = true;
    document.head.appendChild(script);
}
loadScript();
// Handle Newsletter Form Submission
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var formData = new FormData(this);

    fetch('subscribe_newsletter.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Thank you for subscribing to our newsletter!');
        document.getElementById('newsletterForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
$(document).ready(function(){
    // Add smooth scrolling to all links
    $('a.nav-link').on('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, 'easeInOutExpo');
    });
});
