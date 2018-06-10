var Decompte;
var tempsEcoule;
var tempsCompteurEnSecondes;
var tempsDemande;

var cJours;
var cHeures;
var cMinutes;
let cSecondes;

var ctJours;
var ctHeures;
var ctMinutes;
var ctSecondes;

var action

tempsEcoule = 0;
tempsCompteurEnSecondes = 0;
tempsDemande = 0;



function LancerDecompte(){
    document.getElementById('Pause').innerHTML = "Pause";
    document.getElementById("fin").style.display = "none";
    
    tempsDemande = 0;
    tempsEcoule = 0;
    
    cJours = document.getElementById("nJours").value;
    cHeures = document.getElementById("nHeures").value;
    cMinutes = document.getElementById("nMinutes").value;
    cSecondes = document.getElementById("nSecondes").value;

    if (!cJours){cJours=0;}
    if (!cHeures){cHeures=0;}
    if (!cMinutes){cMinutes=0;}
    if (!cSecondes){cSecondes=0;}
    
    ctJours = cJours;
    ctHeures = cHeures;
    ctMinutes = cMinutes;
    ctSecondes = cSecondes;

    if (cJours > 0){tempsDemande = tempsDemande + Math.round(cJours * 86400);}
    if (cHeures > 0){tempsDemande = tempsDemande + Math.round(cHeures * 3600);}
    if (cMinutes > 0){tempsDemande = tempsDemande + Math.round(cMinutes * 60);}
    if (cSecondes > 0){tempsDemande =  tempsDemande + Math.round(cSecondes) ;}
    
     tempsCompteurEnSecondes = tempsDemande;
    
    document.getElementById("saisie").style.display = "none";
    
    Decompte = setInterval(CompteurDecompte,1000);
}

//le décompte
function CompteurDecompte(){    
    if (tempsCompteurEnSecondes > 0){
        if (action !="pause"){
            tempsEcoule += 1;
            tempsCompteurEnSecondes -= 1;  
            
            if (ctSecondes >0){ctSecondes --;}
            if (ctSecondes == 0){                              
                if (ctMinutes > 0){
                    ctSecondes = 59;  
                    ctMinutes --;
                }
                if (ctMinutes == 0){                    
                    if (ctHeures > 0){
                        ctMinutes = 60;
                        ctHeures --;
                    }
                    if (ctHeures == 0){
                        if (ctJours>0){
                            ctHeures = 24;    
                            ctJours --;
                         }
                        if (ctJours == 0){
                            
                        }
                    }
                }
            }
            var Pourcentage = Math.round(((tempsCompteurEnSecondes / tempsDemande)*100));           
            new_degrees = 360 - Math.round(360 * Pourcentage / 100);            
            draw();   
            
            document.getElementById('xjours').innerHTML = ctJours + "";
            document.getElementById('xheures').innerHTML = ctHeures + "<div>Heures</div>";
            document.getElementById('xminutes').innerHTML = ctMinutes + "<div>Minutes</div>";
            document.getElementById('xsecondes').innerHTML = ctSecondes + "<div>Secondes</div>";            
        }
    }else{
        document.getElementById('xjours').innerHTML = 0 + "";
        document.getElementById('xheures').innerHTML = 0 + "<div>Heures</div>";
        document.getElementById('xminutes').innerHTML = 0 + "<div>Minutes</div>";
        document.getElementById('xsecondes').innerHTML = 0 + "<div>Secondes</div>";
        
        clearInterval(Decompte);
        document.getElementById("fin").style.display = "block";
    }
}

//button pause et play
function PauseRepriseDecompte(){
    if (action == "pause"){
        action = "";
        document.getElementById('Pause').innerHTML = "Stop";
    }else{
        action= "pause";
        document.getElementById('Pause').innerHTML = "Play";
    }
}

//début du décompte
function InitialiserDecompte(){
    clearInterval(Decompte); 
      
    document.getElementById('xjours').innerHTML = 0 + "";
    document.getElementById('xheures').innerHTML = 0 + "<div>Heures</div>";
    document.getElementById('xminutes').innerHTML = 0 + "<div>Minutes</div>";
    document.getElementById('xsecondes').innerHTML = 0 + "<div>Secondes</div>";
    
    document.getElementById("nJours").value = "";
    document.getElementById("nHeures").value = "";
    document.getElementById("nMinutes").value = "";
    document.getElementById("nSecondes").value = "";
    
    document.getElementById("saisie").style.display = "block";
    document.getElementById("image").style.display = "none";
    
    degrees = 0;
    new_degrees = 0;
    difference = 0;
}

//button reset
function ResetDecompte(){    
    clearInterval(Decompte);  
    LancerDecompte();
}

//la saisie des chiffre
function Saisie(xid){
    var temp = document.getElementById(xid).value 
    temp = Math.round(temp);
    if (temp < 0){temp = 0;}
    
    switch (xid) {
      case 'nJours':
          if (temp > 365){temp = 365;}
        break;
      case 'nHeures':
          if (temp > 24){temp = 24;}          
        break;
      case 'nMinutes':
          if (temp > 60){temp = 60;}             
        break;
      case 'nSecondes':
          if (temp > 60){temp = 60;}   
        break;    
      default:
        console.log('Sorry, we are out of ' + expr + '.');
    } 
    document.getElementById(xid).value = temp;
}

function draw(){
}

