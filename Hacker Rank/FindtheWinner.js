function winner(andrea, maria, s) {
  let result = '';
  let mariaScore = 0;
  let andreaScore = 0;
  if(s === 'Even'){
    for(let i = 0; i < andrea.length; i++){
      if(i % 2 === 0){
        andreaScore += andrea[i] - maria[i];
        mariaScore += maria[i] - andrea[i];
      } 
    }
  } else {
    for(let i = 0; i < andrea.length; i++){
      if(i % 2 !== 0){
        andreaScore += andrea[i] - maria[i];
        mariaScore += maria[i] - andrea[i];
      } 
    }
  }

  if(mariaScore > andreaScore){
    result = 'Maria';
  } else if (andreaScore > mariaScore){
    result = 'Andrea';
  } else if (andreaScore === mariaScore){
    result = 'Tie';
  }
  return result;
} 



let andrea = [1,2,3];
let maria = [2,1,3];
let s = 'Even';


let win = winner(andrea,maria,s);
console.log(win);