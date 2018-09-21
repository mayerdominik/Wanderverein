//$(document).ready(loadpics());
/*const fs = require('fs');
var files = fs.readdirSync('/img/Jahresgalerie/2007');
console.log(files.length);*/



function loadpics(id, jahr, anzahl){
    let folderurl = "img/Jahresgalerie/" + jahr + "/Komprimiert/" ;
    let folderurlbig = "img/Jahresgalerie/" + jahr + "/" ;
    let imgid = 1;
    let imgelid;
    let imgurl = "";
    let imgurlbig = "";
    let html = "";
    let nextimg = true;
    
    while(nextimg == true){
        imgurl = folderurl + imgid + ".jpg";
        imgelid = "img" + jahr + imgid;
        imgurlbig = folderurlbig + imgid +".jpg";
        html += "<a href='" + imgurlbig + "' data-lightbox='galerie" + id +"' target='_blank'><img id='" + imgelid + "' src='" + imgurl +"' onerror='zeigelogo(" + imgelid + ");' class='galerie' onload='resetheight(2); adjustheight(2);'></a>";
        document.getElementById("galerie" + id).innerHTML = html;
        
        if(imgid==anzahl){
            nextimg=false;
        }
        imgid += 1;
    }
}

function zeigelogo(bildid){
    let temp = document.getElementById(bildid.id)
    temp.src = 'img/weitere seiten/Platzhalter.jpg';
    temp.parentElement.href = "img/weitere seiten/Platzhalter.jpg";
}

