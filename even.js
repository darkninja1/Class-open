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
    else if (timy4 <= 1340) {
      document.getElementById('day3').innerHTML = 'Next: Pd.8';
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
  if (currentTime == '08:55:00AM') {
    dinger();
  }
  else if (currentTime == '09:00:00AM') {
    pd2();
  }
  else if (currentTime == '10:00:00AM') {
    superstop()
    //music here
  }
  else if (currentTime == '10:10:00AM') {
    setHalfVolume();
    dinger();
    setFullVolume();
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
    superstop()
    //music here
  }
  else if (currentTime == '01:35:00PM') {
    setHalfVolume();
    dinger();
    setFullVolume();
  }
  else if (currentTime == '01:40:00PM') {
    pauseAudio();
    pd8();
  }
  //}
}
