document.querySelector("#checkout").addEventListener("click", placeorder);

function placeorder() {
  let name = document.querySelector(".name");

  let cardNum = document.querySelector(".cardNum");

  let CVV = document.querySelector(".CVV");

  if (CVV.value.length === 3 && cardNum.value.length === 16) {
    name.value = "";
    cardNum.value = null;
    CVV.value = null;
    localStorage.removeItem("Arrdata");
    alert("Congratulation! Your Order is Successfully Placed");
    window.location.href = "navbarHome.html";
  } else {
    alert("Enter 16 Digit card Number & 3 Digit CVV Number");
    name.value = "";
    cardNum.value = null;
    CVV.value = null;
  }
}

document.querySelector(".logo_image").addEventListener("click", () => {
  window.location.href = "navbarHome.html";
});

//go to cart
function goToCart() {
  window.location.href = "cart.html";
}
