/** js for setting background for the sticky header on scroll**/

const header = document.querySelector(".header");
header.style.backgroundColor = "transparent";

window.addEventListener("scroll", () => {
  if (scrollY) {
    header.style.backgroundColor = "var(--second-bg-color)";
    header.style.height = "5rem";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.height = "6rem";
  }
});

/**js for display the scroll-to-top button when the window is scrolled
 and hidding it again after 3s
 */
const scrollButton = document.querySelector(".scroll-top");

let timeoutId;

window.addEventListener("scroll", () => {
  scrollButton.style.display = "flex";

  // Clear any existing timeout before setting a new one
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    scrollButton.style.display = "none";
  }, 1500);
});

//  /**js for counting years of experince in the about section**/

const experinceContainer = document.querySelector("#experience");
let experience = 0;
let interval;

function checkSectionInView() {
  const sectionPosition = experinceContainer.getBoundingClientRect().top;
  if (sectionPosition - window.innerHeight < 0 && sectionPosition > 0) {
    interval = setInterval(() => {
      if (experience < 15) {
        experience++;
        experinceContainer.innerText = `${experience}+`;
      } else {
        clearInterval(interval);
      }
    }, 100);

    window.removeEventListener("scroll", checkSectionInView);
  }
}

window.addEventListener("scroll", checkSectionInView);

/*js for determining which  menu link is active on scroll
 and giving it the class "active-menu" */

const sections = document.querySelectorAll("section");
const menus = document.querySelectorAll(".menu");

function activeLink() {
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menus.forEach((menu) => {
        menu.classList.remove("active-menu");
        document.getElementById(`${id}-link`).classList.add("active-menu");
      });
    }
  });
}

window.addEventListener("scroll", activeLink);
