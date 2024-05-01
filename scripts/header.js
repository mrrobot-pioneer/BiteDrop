/**js for displaying menu on mobile device when hamburger menu is clicked 
 and hiding it when cross button is clicked or on window scroll
*/
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".nav");
const cross = document.querySelector(".cross");

hamburgerMenu.onclick = () => {
  menu.classList.add("show-menu");
};

cross.onclick = () => {
  menu.classList.remove("show-menu");
};

window.addEventListener("scroll", () => {
  menu.classList.remove("show-menu");
});

/**js for displaying the search section when search button is clicked and
 hiding it when cross button is clicked
 */
const searchIcon = document.querySelector(".search-icon");
const searchContainer = document.querySelector(".search-container");
const searchCancel = document.querySelector(".search-close");

searchIcon.onclick = () => {
  searchContainer.style.display = "flex";
};

searchCancel.onclick = () => {
  searchContainer.style.display = "none";
};

/***** showing cart summary on the header when cart icon is hover *****/

const cartIcon = document.querySelector(".cart-icon");
const cartSummary = document.querySelector(".cart-summary");

let cartTimeoutId; // Variable to store timeout ID

// Function to show cart summary after a delay
function showCartSummary() {
  // Start a new timeout to reveal cart summary after 0.3 second
  cartTimeoutId = setTimeout(() => {
    cartSummary.style.display = "block";
  }, 300); // Delay of 0.3 seconds (300 milliseconds)
}

// Function to clear the timeout
const clearCartTimeout = () => {
  clearTimeout(cartTimeoutId);
};

// Add event listener for mouse enter event on the cart link to show cart summary after a delay
cartIcon.addEventListener("mouseenter", showCartSummary);

// Add event listener for mouse leave event on the cart link to hide cart summary with delay
cartIcon.addEventListener("mouseleave", (event) => {
  // Clear any existing timeout
  clearCartTimeout();

  // Start a new timeout to hide cart summary after 0.5 second
  cartTimeoutId = setTimeout(() => {
    // Check if mouse is not over the cart summary
    if (!isCursorOnElement(event.clientX, event.clientY, cartSummary)) {
      cartSummary.style.display = "none";
    }
  }, 300); // Delay of 0.3 seconds (300 milliseconds)
});

// Add event listener for mouse enter event on the cart summary to clear the timeout
cartSummary.addEventListener("mouseenter", clearCartTimeout);

// Add event listener for mouse leave event on the cart summary to hide cart summary with delay
cartSummary.addEventListener("mouseleave", () => {
  // Start a new timeout to hide cart summary after 0.3 second
  cartTimeoutId = setTimeout(() => {
    cartSummary.style.display = "none";
  }, 300); // Delay of 0.3 seconds (300 milliseconds)
});

// Function to check if the cursor is on top of cart summary
const isCursorOnElement = (x, y, element) => {
  const hoveredElement = document.elementFromPoint(x, y);
  return hoveredElement === element || element.contains(hoveredElement);
};
