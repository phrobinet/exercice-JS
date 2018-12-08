var bouton = function(){

var nombre = Math.random();
console.log(nombre);
var nombre = nombre * 10;

var nbr = Math.round(nombre);
console.log(nbr);

if( nbr > 7.5){
    var nbr = 'pierre';
}  if (nbr <= 7.5){
    var nbr = 'ciseaux';
}  if (nbr <=2.5){
    var nbr = 'papier';
}
console.log(nbr);

var choix = prompt("Veuillez choisir entre : pierre, papier, ciseaux");

if( choix === 'pierre'){
    if(nbr === 'pierre'){
        alert('Egalité');
        alert('L\'ordinateur a choisi  la pierre');
    } else if (nbr === 'ciseaux'){
        alert('Tu as perdu !! ');
        alert('L\'ordinateur a choisi  la pierre');
    }
        else{
            alert('Bravo, tu as gagné !!');
            alert('L\'ordinateur a choisi  la pierre');
    }
} else if( choix === 'ciseaux'){
    if(nbr === 'pierre'){
        alert('Tu as perdu !! ');
        alert('L\'ordinateur a choisi  les ciseaux');
    } else if (nbr === 'ciseaux'){
        alert('Egalité');
        alert('L\'ordinateur a choisi  les ciseaux');
    }
        else{
            alert('Bravo, tu as gagné !!');
            alert('L\'ordinateur a choisi  les ciseaux');
    }
} else if( choix === 'papier'){
    if(nbr === 'pierre'){
        alert('Bravo, tu as gagné !');
        alert('L\'ordinateur a choisi  le papier');
    } else if (nbr === 'ciseaux'){
        alert('Tu as perdu !! ');
        alert('L\'ordinateur a choisi  le papier');
    }
        else{
            alert('Egalité');
            alert('L\'ordinateur a choisi  le papier');
    }
}else{
    alert('Désolé je n\'ai pas compris');
}
}
