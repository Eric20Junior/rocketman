function myFunction() {
    var x = document.getElementById("main-navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }