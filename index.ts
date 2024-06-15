// ==============Header==============
// get all the sections in the body
const sections: HTMLElement[] = Array.from(
  document.querySelectorAll("body>section")
) as HTMLElement[];
// get all the links in the header
const links: HTMLAnchorElement[] = Array.from(
  document.querySelectorAll("header nav ul li a")
);
// nav background color change
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header?.classList.toggle("scroll", window.scrollY > 0);
  const currentSection = sections.find(
    (section) =>
      section.offsetTop <= window.scrollY &&
      section.offsetTop + section.offsetHeight > window.scrollY
  );
  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection?.id}`) {
      link.classList.add("active");
    }
  });
});

// Add active class to the clicked link
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});
// click on the link that has the same href as the current location hash
links.forEach((link) => {
  if (link.getAttribute("href") === window.location.hash) {
    link.click();
  }
});
// ==============Home===============
// split the text into an array of characters and display them one by one with a delay
const introText: string = "I'm Mohamed El-Shami";
const introTextArray: string[] = introText.split("");
const introTextContainer = document.querySelector(
  "#home .container h1 #text"
) as HTMLSpanElement;

function displayText(): void {
  introTextContainer.textContent = ""; // Clear the text container before starting
  introTextArray.forEach((char, index) => {
    setTimeout(() => {
      introTextContainer.textContent += char;
    }, 50 * index);
  });
  setTimeout(() => {
    omitText();
  }, 50 * introTextArray.length + 1000); // Adding a delay before starting the omitting process
}
// omit the text one by one with a delay
function omitText(): void {
  const textArray: string[] = introTextContainer.innerText.split("");
  textArray.forEach((_, index) => {
    setTimeout(() => {
      textArray.splice(textArray.length - 1, 1);
      introTextContainer.textContent = textArray.join("");
    }, 50 * index);
  });
  setTimeout(() => {
    displayText();
  }, 50 * textArray.length + 1000); // Adding a delay before starting the display process again
}
// Start the process
displayText();
// ==============Cursol===============
const slides: HTMLDivElement[] = Array.from(
  document.querySelectorAll("#portfolio .container .project")
) as HTMLDivElement[];
const nextButton: HTMLButtonElement = document.getElementById(
  "next"
) as HTMLButtonElement;
const previousButton: HTMLButtonElement = document.getElementById(
  "prev"
) as HTMLButtonElement;
let activeSlide: number = 0;
initializeSlider();
function initializeSlider(): void {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
  if (activeSlide === 0) {
    previousButton.classList.add("disabled");
  } else {
    previousButton.classList.remove("disabled");
  }
  if (activeSlide === slides.length - 1) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}
//
let dragX: number = window.innerWidth / 2;
slides.forEach((slide) =>
  slide.addEventListener("dragend", (e: DragEvent) => {
    if (e.clientX > dragX) {
      if (activeSlide > 0) {
        activeSlide--;
      }
    } else {
      if (activeSlide < slides.length - 1) {
        activeSlide++;
      }
    }
    initializeSlider();
  })
);
// click on the next button
nextButton.addEventListener("click", () => {
  if (activeSlide < slides.length - 1) {
    activeSlide++;
  }
  initializeSlider();
});
// click on the previous button
previousButton.addEventListener("click", () => {
  if (activeSlide > 0) {
    activeSlide--;
  }
  initializeSlider();
});
// click on the link that has the same href as the current location hash
document.addEventListener("DOMContentLoaded", () => {
  initializeSlider();
});

// form
const formContact = document.getElementById("formContact") as HTMLFormElement;

formContact.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  const data: FormData = new FormData(formContact);
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const message = data.get("message") as string;
  alert(
    `Name: ${name}\nEmail: ${email}\nMessage: ${message} \n\nAlert: This Is Just A Demo. \n\nThank You For Your Time.}`
  );
  formContact.reset();
});
