function wechsleHintergrund(){
    let body = document.getElementsByTagName("body")[0];
    let rand = Math.floor((Math.random()*12)+1);
    let url = "";

        /*switch(rand){
            case 1: url = "img/startseite/1 Kaiser Rudolf.jpg"; break;
            case 2: url = "img/startseite/2 Klosterweiher.jpg"; break;
            case 3: url = "img/startseite/3 Frühlingswiese.jpg"; break;
            case 4: url = "img/startseite/4 Wittenschwand.jpg"; break;
            case 5: url = "img/startseite/5 Feldberg.jpg"; break;
            case 6: url = "img/startseite/6 Kaiser Rudolf Fest.jpg"; break; 
            case 7: url = "img/startseite/7 Wald und Wiese.jpg"; break;
            case 8: url = "img/startseite/8 Wiese Kalte-Herberge.jpg"; break;
            case 9: url = "img/startseite/9 Kaiser Rudolf Schnee.jpg"; break;
            case 10: url = "img/startseite/10 Finsterlingen Alpen.jpg"; break;
            case 11: url = "img/startseite/11 Klosterweiher.jpg"; break;
            case 12: url = "img/startseite/45-Blumenwiese-mit-Belchen.jpg"; break;
        }
    body.setAttribute("background", url);
    setTimeout(wechsleHintergrund, 10000);*/
    //To-Do: Fließender Übergang der Bilder
}