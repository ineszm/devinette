console.log("Bienvenue dans notre jeu Devinette !");
var s = Math.floor(Math.random() * 100) + 1;
var prop=s;
var essai=0;
var essaiMax=10;
loopWhile:
do {             
    prop = Number(prompt("Entrez un entier entre 1 et 100:"));

    if (prop<s)
    {
        console.log(prop+"  votre nombre est trop petit.");
    }
    else if (prop>s)
    {
        console.log(prop+"  votre entier est trop grand.");
    }
    else if (Number.isNaN(prop)||prop<1||prop>100){
        alert("Attention ! Veuillez entrer un nombre.");
                    
    }
    else if (prop<1||prop>100){
        alert("Attention ! Veuillez entrer un nombre compris entre 1 et 100.");
    }

essai++;


} while(essai<essaiMax &&  prop!==s);
if(prop===s)
{
   console.log("Bravo ! La solution était "+s+".");
}

else
{
     console.log("Game Over ... La solution était "+s+".");
} 
