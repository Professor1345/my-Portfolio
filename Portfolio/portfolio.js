function myOpen() {
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
    document.getElementById("sidebar").style.width = "30%";
    
}
function myClose() {
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("sidebar").style.width = "0";
}
function myNav(evt, navName) {
    var i, tabcontent, nav;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    nav = document.getElementsByClassName("nav");
    for (i = 0; i < nav.length; i++) {
        nav[i].className = nav[i].className.replace(" active", "");    
    }

    document.getElementById(navName).style.display = "block";
    evt.currentTarget.className += " active";

    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("sidebar").style.width = "0";
    
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();


