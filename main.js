var x = document.getElementById("music");



function pauseAudio() {
  x.pause();
}
function dinger() {
  document.getElementById('musicid').src = "music/ding.mp3";
  x.load();
  x.play();
}
function setHalfVolume() { 
  x.volume = 0.2;
} 
  
function setFullVolume() { 
  x.volume = 1.0;
} 
function shuffle() {
  var songs = ['music/Letter From Ajax.mp3','music/RISING SOUL - Tempei Nakamura (Official Music Video).mp3'];
  var songn = ['Letter From Ajax','RISING SOUL - Tempei Nakamura'];
  var pics = [''];
  document.getElementById('myDropdown2').innerHTML = "Playing: "+songn;
  var number = Math.floor(Math.random() * songs.length);
  song = songs[number];
  length = song.getMilliseconds();
  document.getElementById('day4').innerHTML = length;
  document.getElementById('musicid').src = song;
  x.load();
  x.play();
}
function song() {
  var billy123 = setInterval(shuffle, length);
  song.onended = function() {
    clearInterval(billy123);
  }
}
function superstop() {
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
  window.open("https://mcpsmd.zoom.us/j/87599127790?pwd=eU5CSUhrQjg3M2l4ZE9Zb0ZoNWNFZz09");
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