const words = ['chien', 'chat', 'lapin', 'chevaux']
const result =[]
let longestWord =''
for ( const word of words) {
    if(word.length > longestWord.length) {
        longestWord = word
        console.log(longestWord)
    }
}
result.push (longestWord)
console.log(result)
