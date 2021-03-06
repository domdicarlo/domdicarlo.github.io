// For the modal:
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns = document.getElementsByClassName("people-grid-item");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

for (i = 0; i < btns.length; i++)
{
  btn = btns[i];
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// End of For the modal


// collapsibles, open and close
var coll = document.getElementsByClassName("collapsible");
var i;

// add an event listener for each collapsible. on click, show the content.
// or if shown, remove
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("collapsible-active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// TODO: Need to do some stuff with promises here
// looks for nav-placeholders and replaces them with the html
// for the navbar
function placeNavbar() {
  let request = new XMLHttpRequest();
  request.open('GET', './navigation.html');
  request.responseType = 'text';
  request.onload = function() {
    $('#nav-placeholder').replaceWith(request.response);
    console.log("hello");
  }
  request.send();
};
placeNavbar();

// Open the burger menu on click
document.querySelector('.open').addEventListener('click', () => {
   document.querySelector('.nav-list').classList.add('active');
});

// Close the burger menu on click
document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.remove('active');
});

// initialize owl carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
