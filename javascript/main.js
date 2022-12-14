
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
  document.getElementById("countdown-event").innerHTML = days + "Days " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-event").innerHTML = "Sale Ended";
  }
}, 1000);