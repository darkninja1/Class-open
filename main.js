var x = document.getElementById("music");
var x2 = document.getElementById("music2");
var x3 = document.getElementById("music3");
var x4 = document.getElementById("music4");
function kenshin_1() {
  x.play();
}
function slime() {
  x3.play();
}
function avatar() {
  x4.play();
}

function pauseAudio() {
  x.pause();
}
function dinger() {
  x2.play();
}
function setHalfVolume() { 
  x.volume = 0.2;
} 
  
function setFullVolume() { 
  x.volume = 1.0;
} 
function superstop() {
  x.pause();
  x2.pause();
  x3.pause();
  x4.pause();
}

function dayw() {
  var nschool = ['1/1','12/24','12/25'];
  var halfday = [];
  var wd = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var mn = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];
  var d = new Date();
  var n = d.getDay();
  var day = d.getDate();
  var month2 = d.getMonth();
  var year = d.getFullYear();
  var day = d.getDay();
  var wd2 = wd[day];
  var month = mn[month2];
  //month = month + 1;
  var date = (wd2+", "+month+" "+day+" "+year);
  document.getElementById("day2").innerHTML = date; 
  var date2 = (month+"/"+day);
  if (date2 in nschool) {
    alert("no school today");
    document.getElementById("day").innerHTML = "No School";
  }
  else if (n == 0) {
    alert("no school today");
    document.getElementById("day").innerHTML = "No School"; 
  }
  else if (n == 1) {
    setInterval(showTime, 1000);
  }
  else if (n == 2) {
    setInterval(showTime2, 1000);
  }
  else if (n == 3) {
    alert("no school today");
    document.getElementById("day").innerHTML = "No School"; 
  }
  else if (n == 4) {
    setInterval(showTime, 1000);
  }
  else if (n == 5) {
    setInterval(showTime2, 1000);
  }
  else if (n == 6) {
    alert("no school today");
    document.getElementById("day").innerHTML = "No School"; 
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
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction1234() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function pd1() {
  window.open("https://mcpsmd.zoom.us/j/98377294250?pwd=YUk3bjBpOGFGNzNHT1Nza0ZzQ0crZz09");
}

function pd2() {
  window.open("https://mcpsmd.zoom.us/j/81296576596?pwd=NVFiUGFEa21SY0k0bVNESkhpeVUvQT09");
}

function pd3() {
  window.open("https://mcpsmd.zoom.us/j/4011189628?pwd=MUNBZEhSekpLOEZUR00xSXV0ZFBmdz09");
}

function pd4() {
  window.open("https://mcpsmd.zoom.us/j/9201705617?pwd=VHU4bkFSZWFNb3MwR3MzbUZ2YU5adz09");
}

function pd5() {
  window.open("https://mcpsmd.zoom.us/j/93664712547?pwd=bGxuSDFoOC8zRFdvWFZ3bVVDQkxMZz09");
}

function pd6() {
  window.open("https://mcpsmd.zoom.us/j/93071692932?pwd=Skxzdi9wdkU4eXB6SjZ0WlIzT0pHZz09");
}

function pd7() {
  window.open("https://mcpsmd.zoom.us/j/97202594090?pwd=RHpGRjVSV0tYNDlFVG05VDl0QVMwUT09");
}

function pd8() {
  window.open("https://mcpsmd.zoom.us/j/8957556274?pwd=M05GaVJwV0EvTTFpRmdPNENuRVlZQT09");
}       
function test() {
  window.open("https://leproductions.leproductions.repl.co/");
}/*
var k = document.getElementById("kenshin");
function kenshin_1() {
  k.play();
}

var k2 = document.getElementById("kenshin1");
function kenshin_2() {
  k2.play();
}
*/