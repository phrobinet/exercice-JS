const duplicate = ['foobar', 'test', 'john', 'doe', 'foobar', 'test']
duplicate.sort();


for(var i = 0; i <= duplicate.length ; i++){
    if(duplicate[i] === duplicate[i + 1]){
        var elementSupp = duplicate.splice(i, 1);
            console.log(duplicate);
        }
}

alert('Voici le  tableau sans doublon : ' + duplicate);