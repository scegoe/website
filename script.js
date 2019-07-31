

function changecolor() {
  var name = document.getElementId("name")
  name.stylecolor = "blue"
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
