document.addEventListener('DOMContentLoaded', function() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselItems = document.querySelectorAll('.carousel-item');

    // Counter
    let counter = 0;
    const slideWidth = carouselItems[0].clientWidth;

    // Button Listeners
    // Next Button
    document.querySelector('#nextBtn').addEventListener('click', () => {
        if (counter >= carouselItems.length - 1) {
            counter = -1;
        }
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter++;
        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    });

    // Previous Button
    document.querySelector('#prevBtn').addEventListener('click', () => {
        if (counter <= 0) {
            counter = carouselItems.length;
        }
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter--;
        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    });
    var intervalTime = 3000;
    // Get all carousel items    // Initialize the current slide index
    var currentIndex = 0;

    // Function to show the next slide
    function showNextSlide() {
        // Hide the current slide
        carouselItems[currentIndex].style.display = "none";
        // Move to the next slide
        currentIndex = (currentIndex + 1) % carouselItems.length;
        // Show the next slide
        carouselItems[currentIndex].style.display = "block";
    }

    // Start the interval to change slides automatically
    var slideInterval = setInterval(showNextSlide, intervalTime);

    // Transition End Listener for infinite looping
    carouselSlide.addEventListener('transitionend', () => {
        if (carouselItems[counter].id === 'lastClone') {
            carouselSlide.style.transition = "none";
            counter = carouselItems.length - 2;
            carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
        }
        if (carouselItems[counter].id === 'firstClone') {
            carouselSlide.style.transition = "none";
            counter = carouselItems.length - counter;
            carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
        }
    });
});
