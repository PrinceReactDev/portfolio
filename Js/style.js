// typing animation 
document.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed(".typing", {
        strings: ["", "Web Designer", "Web Developer", "Graphic Designer", "YouTuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});


// aside 
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {

        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {

            if (navList[j].querySelector("a").classList.contains("active")) {
                addBacksection(j);
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }

        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
};


function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
};

function addBacksection(num) {
    allSection[num].classList.add("back-section");
};

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
};

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
};
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBacksection(sectionIndex);
});


// media toggler button 
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
};


// Download Resume
const resumeDownlod = document.querySelector("#resume");
resumeDownlod.addEventListener("click", () => {
    alert("Downlod Resume");
});


// Send Message
const sendMsg = document.querySelector("#sendmsg");
const formControl = document.querySelector(".form-control");

sendMsg.addEventListener("click", () => {
    if (formControl.value.trim() !== "") {
        alert("Message Sent Successfully");
    } else {
        alert("Please enter a message before sending.");
    }
});