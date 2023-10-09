const input = 'If you want to print the elements themselves, you should use ';

const whaletalk = ['a','e','i','o','u']

const resultArray = [];


for(let i = 0; i < input.length; i++){
  if(input[i] === 'e'){
    resultArray.push(input[i]);
  }
  if(input[i] === 'u'){
    resultArray.push(input[i]);
  }
    for(let j = 0; j < whaletalk.length; j++){
      //console.log(`vowelindex is ${j}`)
      if(input[i] === whaletalk[j])
        resultArray.push(input[i]);
    }
}

const resulString = resultArray.join('').toUpperCase();
console.log(resulString);
