const duplicate = ['foobar', 'test', 'john', 'doe','test',  'foobar', 'test', 'test', 'test',  'foobar', 'test',  'foobar', 'test', 'fin']
var tableau =[];
for (var i = 0 ; i<= duplicate.length; i++){
    tableau[i] = duplicate[i];
};
console.log(tableau);
var max = tableau.length;

for(max; max >= 1; max--){
    tableau.sort();
    if(tableau[max] === tableau[max - 1]){
        var elementSupp = tableau.splice(max, 1);
        console.log(tableau);
    }
}

console.log('le tableau duplucate : ' +duplicate);
alert('Voici le  tableau sans doublon : ' + tableau);