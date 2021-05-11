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