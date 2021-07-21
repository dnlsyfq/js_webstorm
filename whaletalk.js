let input = 'Nigger'.toLowerCase();
const vowels = ['a','e','i','o','u'];
let resultArray = [];

for(let i = 0; i < input.length; i++){
    console.log(i);
    for(let j = 0; j < vowels.length; j++){
        console.log(j);
        if(input[i]===vowels[j]){
            if(vowels[j] === 'e' || vowels[j] === 'u'){
                resultArray.push(vowels[j] + vowels[j] );
            }else{
                resultArray.push(vowels[j]);
            }
        }
    }
}

console.log(resultArray.join(' ').toUpperCase());