function showTime2() { 
    let time2 = new Date(); 
    let hour2 = time2.getHours(); 
    let min2 = time2.getMinutes();
    let time = new Date(); 
    let hour = time.getHours(); 
    let min = time.getMinutes(); 
    let sec = time.getSeconds(); 
    am_pm = "AM"; 
    var timy1 = hour2.toString();
    var timy2 = min2.toString();
    var timy3 = timy1 + timy2;
    var timy4 = parseInt(timy3);
    if (hour > 12) { 
        hour -= 12; 
        am_pm = "PM"; 
    } 
    if (hour == 0) { 
        hr = 12; 
        am_pm = "AM"; 
    } 
    if (timy4 <= 815) {
      document.getElementById('day3').innerHTML = 'Next: Jag Live';
    }
    else if (timy4 <= 900) {
      document.getElementById('day3').innerHTML = 'Next: Pd.2';
    }
    else if (timy4 <= 1015) {
      document.getElementById('day3').innerHTML = 'Next: Pd.4';
    }
    else if (timy4 <= 1115) {
      document.getElementById('day3').innerHTML = 'Next: Lunch';
    }
    else if (timy4 <= 1230) {
      document.getElementById('day3').innerHTML = 'Next: Pd.6';
    }
    else if (timy4 <= 140) {
      document.getElementById('day3').innerHTML = 'Next: Pd.8';
    }
    else if (timy4 <= 240) {
      document.getElementById('day3').innerHTML = 'Next: End of School';
    }
    else{
      document.getElementById('day3').innerHTML = 'Next: ---';
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
            .innerHTML = "Even Day";
  //while (hi == 0) {
  if (currentTime == '08:55:00AM') {
    dinger();
  }
  else if (currentTime == '09:00:00AM') {
    pd2();
  }
  else if (currentTime == '10:00:00AM') {
    playAudio();
  }
  else if (currentTime == '10:10:00AM') {
    dinger();
  }
  else if (currentTime == '10:15:00AM') {
    pauseAudio();
    pd4();
  }
  else if (currentTime == '12:25:00AM') {
    dinger();
  }
  else if (currentTime == '12:30:00AM') {
    pd6();
  }
  else if (currentTime == '10:00:00AM') {
    playAudio();
  }
  else if (currentTime == '01:35:00PM') {
    dinger();
  }
  else if (currentTime == '01:40:00PM') {
    pauseAudio();
    pd8();
  }
  //}
}
/*
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
} */
//showTime2();
//setInterval(showTime2, 1000); 