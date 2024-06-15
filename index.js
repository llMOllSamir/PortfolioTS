// ==============Header==============
// get all the sections in the body
var sections = Array.from(document.querySelectorAll("body>section"));
// get all the links in the header
var links = Array.from(document.querySelectorAll("header nav ul li a"));
// nav background color change
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header === null || header === void 0 ? void 0 : header.classList.toggle("scroll", window.scrollY > 0);
    var currentSection = sections.find(function (section) {
        return section.offsetTop <= window.scrollY &&
            section.offsetTop + section.offsetHeight > window.scrollY;
    });
    links.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#".concat(currentSection === null || currentSection === void 0 ? void 0 : currentSection.id)) {
            link.classList.add("active");
        }
    });
});
// Add active class to the clicked link
links.forEach(function (link) {
    link.addEventListener("click", function () {
        links.forEach(function (link) { return link.classList.remove("active"); });
        link.classList.add("active");
    });
});
// click on the link that has the same href as the current location hash
links.forEach(function (link) {
    if (link.getAttribute("href") === window.location.hash) {
        link.click();
    }
});
// ==============Home===============
// split the text into an array of characters and display them one by one with a delay
var introText = "I'm Mohamed El-Shami";
var introTextArray = introText.split("");
var introTextContainer = document.querySelector("#home .container h1 #text");
function displayText() {
    introTextContainer.textContent = ""; // Clear the text container before starting
    introTextArray.forEach(function (char, index) {
        setTimeout(function () {
            introTextContainer.textContent += char;
        }, 50 * index);
    });
    setTimeout(function () {
        omitText();
    }, 50 * introTextArray.length + 1000); // Adding a delay before starting the omitting process
}
// omit the text one by one with a delay
function omitText() {
    var textArray = introTextContainer.innerText.split("");
    textArray.forEach(function (_, index) {
        setTimeout(function () {
            textArray.splice(textArray.length - 1, 1);
            introTextContainer.textContent = textArray.join("");
        }, 50 * index);
    });
    setTimeout(function () {
        displayText();
    }, 50 * textArray.length + 1000); // Adding a delay before starting the display process again
}
// Start the process
displayText();
// ==============Cursol===============
var slides = Array.from(document.querySelectorAll("#portfolio .container .project"));
var nextButton = document.getElementById("next");
var previousButton = document.getElementById("prev");
var activeSlide = 0;
initializeSlider();
function initializeSlider() {
    slides.forEach(function (slide) { return slide.classList.remove("active"); });
    slides[activeSlide].classList.add("active");
    if (activeSlide === 0) {
        previousButton.classList.add("disabled");
    }
    else {
        previousButton.classList.remove("disabled");
    }
    if (activeSlide === slides.length - 1) {
        nextButton.classList.add("disabled");
    }
    else {
        nextButton.classList.remove("disabled");
    }
}
//
var dragX = window.innerWidth / 2;
slides.forEach(function (slide) {
    return slide.addEventListener("dragend", function (e) {
        if (e.clientX > dragX) {
            if (activeSlide > 0) {
                activeSlide--;
            }
        }
        else {
            if (activeSlide < slides.length - 1) {
                activeSlide++;
            }
        }
        initializeSlider();
    });
});
// click on the next button
nextButton.addEventListener("click", function () {
    if (activeSlide < slides.length - 1) {
        activeSlide++;
    }
    initializeSlider();
});
// click on the previous button
previousButton.addEventListener("click", function () {
    if (activeSlide > 0) {
        activeSlide--;
    }
    initializeSlider();
});
// click on the link that has the same href as the current location hash
document.addEventListener("DOMContentLoaded", function () {
    initializeSlider();
});
// form
var formContact = document.getElementById("formContact");
formContact.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(formContact);
    var name = data.get("name");
    var email = data.get("email");
    var message = data.get("message");
    alert("Name: ".concat(name, "\nEmail: ").concat(email, "\nMessage: ").concat(message, " \n\nAlert: This Is Just A Demo. \n\nThank You For Your Time.}"));
    formContact.reset();
});
