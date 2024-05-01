// show and hide the edit details form

const editDetailsLink = document.querySelector(".edit-profile");
const editDetails = document.querySelector(".edit-profile-details");

editDetailsLink.addEventListener("click", () => {
  editDetails.classList.toggle("hidden");
});
