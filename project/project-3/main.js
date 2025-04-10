// =================  NAVBAR FORM 
function changeFlag(countryCode, countryName) {
    // document.getElementById("selected-flag").src = `https://flagcdn.com/w40/${countryCode}.png`;
    // document.getElementById("dropdownMenuButton").innerHTML = `<img id="selected-flag" src="https://flagcdn.com/w40/${countryCode}.png" class="flag-img">`;
    document.querySelectorAll("#selected-flag").forEach((single) => {
        single.src = `https://flagcdn.com/w40/${countryCode}.png`;
    });

    document.querySelectorAll("#dropdownMenuButton").forEach((single) => {
        single.innerHTML = `<img id="selected-flag" src="https://flagcdn.com/w40/${countryCode}.png" class="flag-img">`;
    });


}



// ====================  OUR NEW COLLECTION
$(document).ready(function () {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: ".pre-arrow",
        nextArrow: ".next-arrow",
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});




// ======================    SHOP THE COLLECTION 
$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        prevArrow: ".shop-prev",
        nextArrow: ".shop-next",
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});





// ===========================  AS SEEN IN 
let index0 = 0;
const testimonials = document.querySelectorAll(".testimonial");
const dotsContainer = document.querySelector(".dots");

function showTestimonial(n) {
    testimonials.forEach((item, i) => {
        item.classList.remove("active");
        if (i === n) {
            item.classList.add("active");
        }
    });

    updateDots();
}

// Create dots 
function createDots() {
    testimonials.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            index0 = i;
            showTestimonial(index0);
        });
        dotsContainer.appendChild(dot);
    });
}

// Update dots 
function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        if (i === index0) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function prevSlide() {
    index0 = (index0 - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index0);
}

function nextSlide() {
    index0 = (index0 + 1) % testimonials.length;
    showTestimonial(index0);
}

// Initialize dots and show the first testimonial
createDots();
showTestimonial(index0);
// Auto slide every 3 seconds
setInterval(nextSlide, 3000);





// =============================  DON’T TAKE OUR WORD FOR IT 
let index1 = 0;
const wordTestimonials = document.querySelectorAll(".word-testimonial");
const wordDotsContainer = document.querySelector(".word-dots");

function showWordTestimonial(n) {
    wordTestimonials.forEach((item, i) => {
        item.classList.remove("active");
        if (i === n) {
            item.classList.add("active");
        }
    });

    updateWordDots();
}

// Create dots
function createWordDots() {
    wordTestimonials.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("word-dot");
        dot.addEventListener("click", () => {
            index1 = i;
            showWordTestimonial(index1);
        });
        wordDotsContainer.appendChild(dot);
    });
}

// Update dots
function updateWordDots() {
    const dots = document.querySelectorAll(".word-dot");
    dots.forEach((dot, i) => {
        if (i === index1) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function wordPrevSlide() {
    index1 = (index1 - 1 + wordTestimonials.length) % wordTestimonials.length;
    showWordTestimonial(index1);
}

function wordNextSlide() {
    index1 = (index1 + 1) % wordTestimonials.length;
    showWordTestimonial(index1);
}

// Auto slide every 3 seconds
setInterval(wordNextSlide, 3000);

// Initialize dots and show the first testimonial
createWordDots();
showWordTestimonial(index1);
