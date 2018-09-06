window.onscroll = function() {scrollFunction()};
$(document).ready(function() {
    adjustheight();
  });
let page1 = "1";
let page2 = "galerie1";
let page3 = "ueberuns1";
let page4 = "kontakt1";

function scrollFunction(){
    let topnav = document.getElementsByClassName("topnav");
    
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.height = "90px";
        document.getElementById("titel").style.visibility = "hidden";
        document.getElementById("menu").style.top="0";
        document.getElementById("logobild").style.height="60px";
        document.getElementById("logo").style.marginTop="15px";
        document.getElementById("trenner1").style.marginTop="160px";
        for(let i = 0; i<4; i++){
            topnav[i].style.marginTop="22px";
            topnav[i].style.padding="5px";
        }
      } else {
        document.getElementById("header").style.height = "150px";
        document.getElementById("titel").style.visibility = "visible";
        document.getElementById("menu").style.top="60px";
        document.getElementById("logobild").style.height="78px";
        document.getElementById("logo").style.marginTop="35px";
        document.getElementById("trenner1").style.marginTop="160px";
        for(let i = 0; i<4; i++){
            topnav[i].style.marginTop="36px";
            topnav[i].style.padding="20px";
        }
      }
}

function wechsleInhalt(seite, id){
    let elementalt="";
    let elementneu = "" + seite + id;
    let navneu="";
    let navalt="";

    resetheight();
    switch(seite){
        case "angebote": 
            elementalt = "angebote" + page1;
            navalt = "leftnava" + page1;
            document.getElementById(elementalt).style.display = "none";
            document.getElementById(elementneu).style.display = "inline";
            document.getElementById(elementneu).style.top = "0";
            page1 = id;
            if(elementneu == "angebote1"){
                navneu="leftnava1";
                document.getElementById("angebotenav").innerHTML = '<img id="bildangebote" src="img/weitere seiten/50 Wegweiser Wanderplan-Seite.jpg" onload="adjustheight();">';
            }
            if(elementneu == "angebote2"){
                navneu="leftnava2";
                document.getElementById("angebotenav").innerHTML = '<img id="bildangebote2" src="img/weitere seiten/51 Kreuzfelsen vorher Aktionen-Seite.jpg"> <p id="bildangebote2desc">Kreuzfelsen vorher/nachher</p> <img id="bildangebote3" src="img/weitere seiten/52 Kreuzfelsen nachher Aktionen-Seite.jpg" onload="adjustheight();">';
            }
            if(elementneu == "angebote3"){
                navneu="leftnava3";
                let angebote3string = '<div id ="divtourplaner"><a href="https://www.touren-suedschwarzwald.de/de/tour/themenwege/dachsberg-rund-um-das-horbacher-moor-naturlehrpfad-/1522732/" class="divtpchild" target="_blank">Tourenplaner der Ferienwelt Südschwarzwald</a></div>';
                document.getElementById("angebotenav").innerHTML = angebote3string;
                adjustheight();
                // -> Hintergrundbild 1. Content document.getElementById("content1").style.backgroundImage = "URL('img/weitere seiten/53 Feldsee Wandertouren-Seite.JPG')";
            }
            document.getElementById(navalt).classList.remove("selected");
            document.getElementById(navneu).classList.add("selected");
            break;
        case "galerie": elementalt = page2; 
            document.getElementById(elementalt).style.visibility = "hidden";
            document.getElementById(elementneu).style.visibility = "visible";
            page2 = elementneu;
            break;
        case "ueberuns": elementalt = page3;
            document.getElementById(elementalt).style.visibility = "hidden";
            document.getElementById(elementneu).style.visibility = "visible";
            page3 = elementneu;
            break;
        case "kontakt": elementalt = page4;
            document.getElementById(elementalt).style.visibility = "hidden";
            document.getElementById(elementneu).style.visibility = "visible";
            page4 = elementneu;
            break;
    }
}

function resetheight(){
    document.getElementById("content1").style.height = "auto";
    document.getElementById("nav1").style.height = "auto";
}

function adjustheight(){
    let right=document.getElementById("content1").clientHeight;
    let left=document.getElementById("nav1").clientHeight;
    
    if (left>right){
        document.getElementById("content1").style.height=left;
    }
    else{
        document.getElementById("nav1").style.height=right;
    }
}