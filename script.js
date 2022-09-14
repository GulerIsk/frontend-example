// menu
function openDiv(names) {
    var i;
    var x = document.getElementsByClassName("nav-menus");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(names).style.display = "block";
}