window.onscroll = function() {scrollFunction()};
$(document).ready(function() {
    for (let ah = 1; ah<=4; ah++){
        adjustheight(ah);
    }
  });
let page1 = "1";
let page2 = "1";
let page3 = "1";
let page4 = "1";



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

    switch(seite){
        case "angebote": 
            resetheight(1);
            elementalt = "angebote" + page1;
            navalt = "leftnava" + page1;
            document.getElementById(elementalt).style.display = "none";
            document.getElementById(elementneu).style.display = "inline";
            document.getElementById(elementneu).style.top = "0";
            page1 = id;
            if(elementneu == "angebote1"){
                navneu="leftnava1";
                document.getElementById("angebotenav").innerHTML = '<img id="bildangebote" src="img/weitere seiten/50 Wegweiser Wanderplan-Seite.jpg" onload="adjustheight(1);">';
            }
            if(elementneu == "angebote2"){
                navneu="leftnava2";
                document.getElementById("angebotenav").innerHTML = '<img id="bildangebote2" src="img/weitere seiten/51 Kreuzfelsen vorher Aktionen-Seite.jpg" onload="adjustheight(1);"> <p id="bildangebote2desc">Kreuzfelsen vorher/nachher</p> <img id="bildangebote3" src="img/weitere seiten/52 Kreuzfelsen nachher Aktionen-Seite.jpg" onload="adjustheight(1);">';
            } 
            if(elementneu == "angebote3"){
                navneu="leftnava3";
                let angebote3string = '<div id ="divtourplaner"><a href="https://www.touren-suedschwarzwald.de/de/tour/themenwege/dachsberg-rund-um-das-horbacher-moor-naturlehrpfad-/1522732/" class="divtpchild" target="_blank">Tourenplaner der Ferienwelt Südschwarzwald</a></div>';
                document.getElementById("angebotenav").innerHTML = angebote3string;
                adjustheight(1);
                // -> Hintergrundbild 1. Content document.getElementById("content1").style.backgroundImage = "URL('img/weitere seiten/53 Feldsee Wandertouren-Seite.JPG')";
            }
            break;
        case "galerie": elementalt = page2; 
            resetheight(2);
            elementalt = "galerie" + page2;
            navalt = "leftnavb" + page2;
            document.getElementById(elementalt).style.display = "none";
            document.getElementById(elementneu).style.display = "inline";
            page2 = id;
            if(elementneu == "galerie1"){
                navneu="leftnavb1";
                adjustheight(2);
            }
            if(elementneu == "galerie2"){
                navneu="leftnavb2";
                adjustheight(2);
            }
            if(elementneu == "galerie3"){
                navneu="leftnavb3";
                adjustheight(2);
            }
            if(elementneu == "galerie4"){
                navneu="leftnavb4";
                adjustheight(2);
            }
            break;
        case "ueberuns": elementalt = page3;
            resetheight(3);
            elementalt = "ueberuns" + page3;
            navalt = "leftnavc" + page3;
            document.getElementById(elementalt).style.display = "none";
            document.getElementById(elementneu).style.display = "inline";
            page3 = id;
            if(elementneu == "ueberuns1"){
                navneu="leftnavc1";
                adjustheight(3);
            }
            if(elementneu == "ueberuns2"){
                navneu="leftnavc2";
                adjustheight(3);
            }
            break;
        case "kontakt": elementalt = page4;
            resetheight(4);
            elementalt = "kontakt" + page4;
            navalt = "leftnavd" + page4;
            document.getElementById(elementalt).style.display = "none";
            document.getElementById(elementneu).style.display = "inline";
            page4 = id;
            if(elementneu == "kontakt1"){
                navneu="leftnavd1";
                adjustheight(4);
            }
            if(elementneu == "kontakt2"){
                navneu="leftnavd2";
                adjustheight(4);
            }
            if(elementneu == "kontakt3"){
                navneu="leftnavd3";
                adjustheight(4);
            }
            break;
        }
        document.getElementById(navalt).classList.remove("selected");
        document.getElementById(navneu).classList.add("selected");
}

function resetheight(id){
    let content = "content" + id;
    let nav = "nav" + id;
    document.getElementById(content).style.height = "auto";
    document.getElementById(nav).style.height = "auto";
}

function adjustheight(id){
    let content = "content" + id;
    let nav = "nav" + id;
    let right=document.getElementById(content).clientHeight;
    let left=document.getElementById(nav).clientHeight;
    
    if (left>right){
        document.getElementById(content).style.height=left;
    }
    else{
        document.getElementById(nav).style.height=right;
    }
}