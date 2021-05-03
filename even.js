function showTime2() { 
    let time = new Date(); 
    let hour = time.getHours(); 
    let min = time.getMinutes(); 
    let sec = time.getSeconds(); 
    am_pm = "AM"; 
  
    if (hour > 12) { 
        hour -= 12; 
        am_pm = "PM"; 
    } 
    if (hour == 0) { 
        hr = 12; 
        am_pm = "AM"; 
    } 
  
    hour = hour < 10 ? "0" + hour : hour; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 
  
    /*let currentTime = hour + ":" 
            + min + ":" + sec + am_pm; */
      currentTime = hour + ":" 
      + min + ":" + sec + am_pm;
  
    document.getElementById("clock") 
            .innerHTML = currentTime; 
    openmeeven();      
} 
function openmeeven() {
  document.getElementById("day") 
            .innerHTML = "even day";
  //while (hi == 0) {
  if (currentTime == '09:00:00AM') {
    french();
  }
  else if (currentTime == '10:15:00AM') {
    english();
  }
  else if (currentTime == '12:30:00PM') {
    science();
  }
  else if (currentTime == '01:40:00PM') {
    health();
  }
  //}
}
function math() {
  window.open("https://mcpsmd.zoom.us/j/98377294250?pwd=YUk3bjBpOGFGNzNHT1Nza0ZzQ0crZz09");
}

function french() {
  window.open("https://mcpsmd.zoom.us/j/81296576596?pwd=NVFiUGFEa21SY0k0bVNESkhpeVUvQT09");
}

function band() {
  window.open("https://mcpsmd.zoom.us/j/4011189628?pwd=MUNBZEhSekpLOEZUR00xSXV0ZFBmdz09");
}

function english() {
  window.open("https://mcpsmd.zoom.us/j/9201705617?pwd=VHU4bkFSZWFNb3MwR3MzbUZ2YU5adz09");
}

function history() {
  window.open("https://mcpsmd.zoom.us/j/93664712547?pwd=bGxuSDFoOC8zRFdvWFZ3bVVDQkxMZz09");
}

function science() {
  window.open("https://mcpsmd.zoom.us/j/93071692932?pwd=Skxzdi9wdkU4eXB6SjZ0WlIzT0pHZz09");
}

function mun() {
  window.open("https://mcpsmd.zoom.us/j/97202594090?pwd=RHpGRjVSV0tYNDlFVG05VDl0QVMwUT09");
}

function health() {
  window.open("https://mcpsmd.zoom.us/j/8957556274?pwd=M05GaVJwV0EvTTFpRmdPNENuRVlZQT09");
}       
function test() {
  window.open("https://leproductions.leproductions.repl.co/");
} 
//showTime2();
//setInterval(showTime2, 1000); 