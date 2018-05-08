function wechsleHintergrund(){
    let body = document.getElementsByTagName("body")[0];
    let rand = Math.floor((Math.random()*12)+1);
    let url = "";

        switch(rand){
            case 1: url = "Bilder Startseite/1 Kaiser Rudolf.jpg"; break;
            case 2: url = "Bilder Startseite/2 Klosterweiher.jpg"; break;
            case 3: url = "Bilder Startseite/3 Frühlingswiese.jpg"; break;
            case 4: url = "Bilder Startseite/4 Wittenschwand.jpg"; break;
            case 5: url = "Bilder Startseite/5 Feldberg.jpg"; break;
            case 6: url = "Bilder Startseite/6 Kaiser Rudolf Fest.jpg"; break; 
            case 7: url = "Bilder Startseite/7 Wald und Wiese.jpg"; break;
            case 8: url = "Bilder Startseite/8 Wiese Kalte-Herberge.jpg"; break;
            case 9: url = "Bilder Startseite/9 Kaiser Rudolf Schnee.jpg"; break;
            case 10: url = "Bilder Startseite/10 Finsterlingen Alpen.jpg"; break;
            case 11: url = "Bilder Startseite/11 Klosterweiher.jpg"; break;
            case 12: url = "Bilder Startseite/45-Blumenwiese-mit-Belchen.jpg"; break;
        }
    body.setAttribute("background", url);
    setTimeout(wechsleHintergrund, 10000);
    //To-Do: Fließender Übergang der Bilder
}