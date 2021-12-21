var x = document.getElementById("music");
var pre = [];
var songs = ['music/LFA.mp3','music/RISING.mp3','music/JJ.mp3'];
var songn = ['Letter From Ajax','RISING SOUL - Tempei Nakamura','JJ Lin – Lose Control'];
var pics = ['pics/vermont1.jpg','pics/vermont1.jpg','pics/ring.jpg'];
/*
function alert1(mes) {
document.getElementById('message2').innerHTML = mes; $('#message2').fadeIn('slow', function(){$('#message2').delay(3000).fadeOut();});
}*/
function pauseAudio() {
  x.pause();
}
function dinger() {
  document.getElementById('dinger').play();
}
function setHalfVolume() { 
  var x = document.getElementById("music");
  x.volume = 0.2;
} 
  
function setFullVolume() { 
  var x = document.getElementById("music");
  x.volume = 1.0;
} 
function shuffle() {
  var x = document.getElementById("music");
  var number = Math.floor(Math.random() * songs.length);
  if (pre.length == songs.length) {
    pre = [];
    shuffle();
  }
  else if (pre.includes(songn[number])) {
    shuffle();
  }
  
  else{
    
    var song = songs[number];
    //length = song.getMilliseconds();
    //document.getElementById('day4').innerHTML = length;
    document.getElementById('day2').backgroundImage = "url('"+pics[number]+"')";
    document.getElementById('day2').innerHTML = "Playing: "+songn[number];
    pre.push(songn[number]);
    document.getElementById('musicid').src = song;
    x.load();
    x.play();
    document.getElementById("music").onended = function() {
      shuffle();
    };
  }
}
function superstop() {
  var x = document.getElementById("music");
  document.getElementById('day2').innerHTML = "Music";
  x.pause();
}
function vol() {
  var iv = document.getElementById("slide").value;
  if (iv >= 75) {
    document.getElementById('vol').innerHTML = "🔊";
  }
  else if (iv >= 30) {
    document.getElementById('vol').innerHTML = "🔉";
  }
  else {
    document.getElementById('vol').innerHTML = "🔈";
  }

  document.getElementById("music").volume = (iv/100);
}
function up() {
  var cc = document.getElementById('music').currentTime;
  var dd = document.getElementById('music').duration;
  var cc1 = parseInt(cc%60);
  var dd1 = parseInt(dd%60);
  if (cc1 <= 9) {
    document.getElementById('time1').innerHTML = (parseInt(cc/60)+':0'+cc1);
  }
  else {
    document.getElementById('time1').innerHTML = (parseInt(cc/60)+':'+cc1);
  }
  if (dd1 <= 9) {
    document.getElementById('time2').innerHTML = (parseInt(dd/60)+':0'+dd1);
  }
  else {
    document.getElementById('time2').innerHTML = (parseInt(dd/60)+':'+dd1);
  }
  document.getElementById('bar').style.width = ((cc / dd)*100) +'%';
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
  var day2 = d.getDay();
  var wd2 = wd[day2];
  var month = mn[month2];
  //month = month + 1;
  var date = (wd2+", "+month+" "+day+" "+year);
  document.getElementById("day4").innerHTML = date; 
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
  window.open("https://mcpsmd.zoom.us/j/99747154015?pwd=VUJrODIrNnBaN1Q5ckM1L3VIdEI4UT09%20");
}

function pd2() {
  window.open("https://mcpsmd.zoom.us/j/8836412795?pwd=bHVDUDBEK3pPU0RHV0RDcU80RFVPUT09");
}

function pd3() {
  window.open("https://mcpsmd.zoom.us/j/81916584504?pwd=UlRTM2NJcU9EUk9SRGdsWGhMYUx2QT09");
}

function pd4() {
  window.open("https://zoom.us/meeting/81226836740");
}

function pd5() {
  window.open("");
}

function pd6() {
  window.open("");
}

function pd7() {
  window.open("http://%20%20https//mcpsmd.zoom.us/j/87633687636?pwd=Y0FMbVllaXI4YW5EZk04NlM1L3Z3dz09");
}

function pd8() {
  window.open("https://mcpsmd.zoom.us/j/85855096978?pwd=bmNXY0tMelo4NU01dzdMUko5a2VNZz09");
}       
function test() {
  //window.open("https://leproductions.leproductions.repl.co/");
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