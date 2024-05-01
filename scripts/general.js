/**js for animating elements as they enter the viewport */

// Headings animations
const headings = document.querySelectorAll("#heading--animate");

/*the heading to be animated has an id='heading--animate' so as to know 
which heading should be animated when it comes to the view port*/

function checkPosition() {
  //checks when the heading enters the view port so as to start the animation
  headings.forEach((heading) => {
    const headingPosition = heading.getBoundingClientRect().top;

    if (headingPosition - window.innerHeight < 0 && headingPosition > 0) {
      if (!heading.classList.contains("heading--animate")) {
        //don't add the animation if it already exits
        heading.classList.add("heading--animate");
      }
    }
  });
}

// starts the animation on window scroll
window.addEventListener("scroll", checkPosition);

// starts the animation on reload without scroll
checkPosition();

/****************************************************************************/

//js for revealing Containers as they enter the view port
//this animations are imported from 'scrollrevealjs.org'

const scroll = ScrollReveal({
  origin: "bottom",
  distance: "100px",
  duration: "1800",
  delay: 100,
  //   general options which can be overriden in the scroll.reveal()
});

// the reveal function takes in two arguments i.e target element and options

// home page
scroll.reveal(".home-heading", {
  origin: "top",
});

scroll.reveal(".home-sub-heading", {
  delay: 500,
});

scroll.reveal(".home-buttons", {
  delay: 500,
});

scroll.reveal(".product");

scroll.reveal(".about-item", {
  distance: "85px",
});

scroll.reveal(".about-description", {
  delay: 200,
});

scroll.reveal(".chefs-text", { delay: 200 });

scroll.reveal(".review", {
  distance: "85px",
});

// menu page
scroll.reveal(".text", {
  distance: "50px",
});

scroll.reveal(".image-container", {
  distance: "30px",
  delay: 400,
});

// cart page
scroll.reveal(".payment-summary");

// checkout page
scroll.reveal(".order-summary");
scroll.reveal(".billing-details");
