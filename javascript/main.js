
// Change slide banners
let slideIndex = 0;
            showSlides();
            function showSlides() {
              let i;
              let slides = document.getElementsByClassName("mySlides");
              let dots = document.getElementsByClassName("dot");
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
              }
              slideIndex++;
              if (slideIndex > slides.length) {slideIndex = 1}    
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " active";
              setTimeout(showSlides, 4000); // Change image every 4 seconds
            }
// Tabs switch collection
const a = document.querySelector.bind(document)
const aa = document.querySelectorAll.bind(document)

const tabs = aa('.tab-item')
const tabcollect = aa('.tab-collection')

tabs.forEach((tab,index) => {
    const tabcollecting = tabcollect[index]
    tab.onclick = function (){
        
      a('.tab-item.active').classList.remove('active')
      a('.tab-collection.active').classList.remove('active')
      
      this.classList.add('active')
      tabcollecting.classList.add('active')
    }
});

//Responsive menu
function hamDropdown() {
  document.querySelector(".sub_res_menu").classList.toggle("display");
}

//Countdown event
// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown-event").innerHTML = days + " Days " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-event").innerHTML = "Sale Ended";
  }
}, 1000);
// Scroll up/down
	   function auto_scroll(anchor) {
            var target = jQuery(anchor);
            target = target.length && target || jQuery('[name=' + anchor.slice(1) + ']');
            if (target.length) {
                var targetOffset = target.offset().top - 49;
                jQuery('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
// Open/close cart
let cartIcon = document.querySelector('.your_cart')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')
cartIcon.onclick = () => {
  cart.classList.add("open")
};  
closeCart.onclick = () => {
  cart.classList.remove("open")
};
// Add to cart
if (document.readyState =="loading") {
  document.addEventListener("DOMContentLoaded",ready);
}
else {
  ready ();
}
function ready (){
  //Remove items from Cart
  var removeCartButtons = document.getElementsByClassName('fa-trash') 
  console.log(removeCartButtons)
  for (var i=0; i<removeCartButtons.length;i++){
    var button = removeCartButtons[i]
    button.addEventListener('click', removeCartItem);
  } 

  var quantityInputs = document.getElementsByClassName('cart-quantity');
  for (var i=0; i<quantityInputs.length;i++){
    var input = quantityInputs[i]
    input.addEventListener("change", quantityChanged);
  }
  var addCart = document.getElementsByClassName('add-to-cart')
  for (var i=0; i<addCart.length;i++){
    var button = addCart[i]
    button.addEventListener("click", addCartClicked);
  }
  document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
}
function buyButtonClicked(){
  alert('Your Order is placed')
  var cartContent = document.getElementsByClassName('cart-content')[0]
  while (cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
  }
  document.querySelector('.cart-numbers').innerHTML = "0";
  updateTotal();
}
function removeCartItem (event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  document.querySelector('.cart-numbers').innerHTML = "0";
  updateTotal();
}
function quantityChanged(event){
  var input = event.target
  if (isNaN(input.value) || input.value <=0) {
    input.value = 1 
  }
  updateTotal();
}
function addCartClicked(event){
  var i = 0;
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName('title')[0].innerText;
  var price = shopProducts.getElementsByClassName('pricesale')[0].innerText;
  var productImg = shopProducts.getElementsByClassName('pic-1')[0].src;
  console.log(productImg)
  addProductToCart(title, price,productImg);
  updateTotal();
}
function addProductToCart (title, price, productImg){
  var cartShopBox = document.createElement('div');
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName('cart-content')[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i<cartItemsNames.length; i++){
    if(cartItemsNames[i].innerText == title)
    {
      alert("You've already add this item to cart")
    }
  }
var cartBoxContent = `
<img src="${productImg}" class="cart-img">
                <div class="detail-box">
                    <div class="cart-product-title">
                    ${title}
                    </div>
                    <div class="cart-price">${price}</div>
                    <input type="number" value="1" class="cart-quantity">
                </div>
                <i class="fa-solid fa-trash"></i>`;
cartShopBox.innerHTML = cartBoxContent
cartItems.append (cartShopBox)
cartShopBox
.getElementsByClassName('fa-trash')[0]
.addEventListener('click',removeCartItem);
cartShopBox
.getElementsByClassName('cart-quantity')[0]
.addEventListener('change',quantityChanged);
}
//update total
function updateTotal(){
  var cartContent = document.getElementsByClassName('cart-content')[0]
  var cartBoxes = cartContent.getElementsByClassName('cart-box')
  var total = 0;
  for (var i=0; i<cartBoxes.length;i++){
    var cartBox = cartBoxes[i]
    var priceElement = cartBox.getElementsByClassName ('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + (price * quantity);}
    total = Math.round(total*100) /100;
    document.getElementsByClassName('total-price')[0].innerText = '$ ' + total;
}
let addToCart = document.querySelectorAll('.add-to-cart');
for (let i=0; i<addToCart.length;i++){
  addToCart[i].addEventListener('click', ()=> {
    document.querySelector('.cart-numbers').innerHTML = "!";
  })
}
