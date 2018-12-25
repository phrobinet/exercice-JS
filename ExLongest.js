const words = ['chien', 'chat', 'lapin', 'chevaux', 'canard', 'oiseaux', 'éléphant'];
const result =[];

let longestWord ='';


for ( const word of words) {
    if(word.length >= longestWord.length) {
        longestWord = word;
        console.log(longestWord);
    } 
}
console.log(longestWord.length);

let mot = longestWord.length;

for (const w of words) {
    if (w.length === mot){
        result.push(w);
    }
}
console.log(result);




// result.push (longestWord);
// console.log(result);
// const a = 'chien';
// const b = a.length;
// console.log(b);
