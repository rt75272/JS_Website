

let vowels = "AEIOUaeiou";
let digits = "0123456789";
let lowercase = "abcdefghijklmnopqrstuvwxyz";

function isLowercase(word, size){

  let count = 0;

  for(i = 0; i < size; i++){

    for(j = 0; j < lowercase.length;j++ ){
      if(word.charAt(i) === lowercase.charAt(j)){
        count++;
      }
    }
  }
  console.log("Total Lowercase letters: " + count);
}



function isVowel(word, size){

  let count = 0;

  for(i = 0; i < size; i++){

      for(j = 0; j < vowels.length;j++ ){
          if(word.charAt(i) === vowels.charAt(j)){
            count++;
          }
    }
  }
  console.log("Total Vowels: " + count);
}

function isDigit(word, size){

  let count = 0;

  for(i = 0; i < size; i++){

    for(j = 0; j < digits.length;j++ ){
      if(word.charAt(i) === digits.charAt(j)){
        count++;
      }
    }
  }
  console.log("Total Digits: " + count);


}

function main(word, size){

  let totalVowels = isVowel(word,size);
  let totalDigit= isDigit(word,size);
  let lowerCase = isLowercase(word,size);
  console.log("Length of word: " + size);
}

let results = main("CandyMAN123",11);
