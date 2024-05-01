const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");

/*----------- updating the cart quantity when the update buttons are clicked -------*/

function updateQuantity(action, buttonId) {
  const quantity = document.querySelector(`.js-quantity-${buttonId}`);
  let value = parseInt(quantity.innerText);

  if (action === "add") {
    value++;
  } else {
    value > 1 && value--; //minimum quantity should be 1
  }

  quantity.innerText = value;
}

// when plus button is clicked
plus.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonId = button.dataset.productId;
    updateQuantity("add", buttonId);
  });
});

// when minus button is clicked
minus.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonId = button.dataset.productId;
    updateQuantity("minus", buttonId);
  });
});

/*---------- removing the item when trash button is clicked ---------------------*/

const deleteButtons = document.querySelectorAll(".trash");

deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonId = button.dataset.productId;
    const deleteItem = document.querySelector(`.product-${buttonId}`);
    deleteItem.remove();
  });
});

/*NB: after updating the item quantity or when delete button is clicked,
make sure to update the payment summary data and cart quantity in the cart title 
to match these changes*/