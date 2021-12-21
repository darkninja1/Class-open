var pd1_2 = 745; // pd 1 and 2 times
var pd3_4 = 930; // pd 3 and 4 times
var pd5_6 = 1206; // pd 5 and 6 times
var pd7_8 = 1256; // pd 7 and 8 times
var rm1 = 1; // warning time
var rm2 = 6; // time between classes


function showTime() { 
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
      document.getElementById('day3').innerHTML = 'Next: Pd.1';
    }
    else if (timy4 <= 1015) {
      document.getElementById('day3').innerHTML = 'Next: Pd.3';
    }
    else if (timy4 <= 1115) {
      document.getElementById('day3').innerHTML = 'Next: Lunch';
    }
    else if (timy4 <= 1230) {
      document.getElementById('day3').innerHTML = 'Next: Pd.5';
    }
    else if (timy4 <= 1340) {
      document.getElementById('day3').innerHTML = 'Next: Pd.7';
    }
    else if (timy4 <= 1440) {
      document.getElementById('day3').innerHTML = 'Next: End of School';
    }
    else{
      document.getElementById('day3').innerHTML = 'Next: ---';
    }
    
    
  
    hour = hour < 10 ? "0" + hour : hour; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 
  
      currentTime = hour + ":" 
      + min + ":" + sec + am_pm;
  
    document.getElementById("clock") 
            .innerHTML = currentTime; 
    openmeodd();        
} 


var hi = 0
function openmeodd() {
  document.getElementById("day") 
            .innerHTML = "Odd Day"; 
  if (currentTime == pd1_2 - rm1) {
    //5 min before
    dinger();
  }
  else if (currentTime == pd1_2) {
    //pd 2
    pd1();
  }
  else if (currentTime == pd3_4 - rm2) {
    //end of pd 2
    shuffle();
  }
  else if (currentTime == pd3_4 - rm1) {
    //5 min before pd 4
    setHalfVolume();
    dinger();
    setFullVolume();
  }
  else if (currentTime == pd3_4) {
    //pd 4
    superstop();
    pd3();
  }
    //lunch
  else if (currentTime == pd5_6 - rm1) {
    // 5 min before pd 6
    dinger();
  }
  else if (currentTime == pd5_6) {
    pd6();
  }
  else if (currentTime == pd7_8 - rm2) {
    //end of pd 6
    shuffle();
  }
  else if (currentTime == pd7_8 - rm1) {
    //5 min before pd 8
    setHalfVolume();
    dinger();
    setFullVolume();
  }
  else if (currentTime == pd7_8) {
    //pd 8
    superstop();
    pd7();
  }
  
}


\
 