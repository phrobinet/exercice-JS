const duplicate = ['foobar', 'test', 'john', 'doe','test',  'foobar', 'test', 'test', 'test',  'foobar', 'test',  'foobar', 'test', 'fin']
const tableau = [...duplicate] // spread operator pour faire une véritable copie d'un tableau

for(let max = tableau.length; max >= 1; max--){
    tableau.sort();
    if(tableau[max] === tableau[max - 1]){
      tableau.splice(max, 1);
    }
}
console.log('le tableau dedupe : ' +tableau);
