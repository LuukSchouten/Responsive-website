
function showcontactinfo() {
var contactinfo = document.getElementById("contactinfo");
    if (contactinfo.style.visibility == "visible") {
        contactinfo.style.visibility = "hidden";
        contactinfo.style.height = "0px";
    } else {
        contactinfo.style.visibility = "visible";
        contactinfo.style.height = "200px";
    }
}

function showbusinessinfo(){
    var contactinfo = document.getElementById("businessinfo");
    var sub1 = document.getElementById("autorijbewijsinfo");
    var sub2 = document.getElementById("motorrijbewijsinfo");
    if (contactinfo.style.visibility == "visible") {
        contactinfo.style.visibility = "hidden";
        sub1.style.visibility = "hidden";
        sub1.style.height = "0px";
        sub2.style.visibility = "hidden";
        sub2.style.height = "0px";
        contactinfo.style.height = "0px";
    } else {
        contactinfo.style.visibility = "visible";
        contactinfo.style.height = "200px";
    }
}

function showautorijbewijs(){
    var contactinfo = document.getElementById("autorijbewijsinfo");
    var main = document.getElementById("businessinfo");
    var newheight = parseInt(main.style.height);
    if (contactinfo.style.visibility == "visible") {
        contactinfo.style.visibility = "hidden";
        contactinfo.style.height = "0px";
        main.style.height = newheight - 120 + "px";
    } else {
        contactinfo.style.visibility = "visible";
        contactinfo.style.height = "120px";
        main.style.height = newheight + 120 + "px";
    }
}

function showmotorrijbewijs(){
    var contactinfo = document.getElementById("motorrijbewijsinfo");
    var main = document.getElementById("businessinfo");
    var newheight = parseInt(main.style.height);
    if (contactinfo.style.visibility == "visible") {
        contactinfo.style.visibility = "hidden";
        contactinfo.style.height = "0px";
        main.style.height = newheight - 120 + "px";
    } else {
        contactinfo.style.visibility = "visible";
        contactinfo.style.height = "120px";
        main.style.height = newheight + 120 + "px";
    }
}

