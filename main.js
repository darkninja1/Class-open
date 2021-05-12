function dayw() {
  var d = new Date();
  var n = d.getDay()
  if (n == 0) {
    alert("no school today");
  }
  else if (n == 1) {
    setInterval(showTime, 1000);
  }
  else if (n == 2) {
    setInterval(showTime2, 1000);
  }
  else if (n == 3) {
    alert("no school today");
  }
  else if (n == 4) {
    setInterval(showTime, 1000);
  }
  else if (n == 5) {
    setInterval(showTime2, 1000);
  }
  else if (n == 6) {
    alert("no school today");
  }

}
function odd_day() {
  confirm("Proceed with odd day?");
  setInterval(showTime, 1000);
}
function even_day() {
  confirm("Proceed with even day?");
  setInterval(showTime2, 1000);
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction123() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}