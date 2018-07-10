// Andrea and Maria each have a deck of numbered cards in a pile face down. They play a game where they each alternately
// discard and flip the cards on the pile from top to bottom.

// At the beginning of the game, someone will call out 'Even' or 'Odd'. The first move depends on which is called. 
// If 'Even' is called, the player's top cards are flipped so they can see the face value. If instead 'Odd' is called,
// the top card is removed from each deck and discarded, then each flips her next card. Andrea subtracts the value of 
// Maria's card from her own and adds the result to her score. Likewise, Maria subtracts the value of Andrea's card from
// her own and adds the result to her score.

// From this point forward, each alternatiely discards then flips a card. Each time two cards are flipped, the players' scores
// are computed as before. Once all the cards have been played, whoever has the most points wins.

// As an example, Maria's cards, face down, are [3,5,6] and Andrea's are [4,5,7]. After calling 'Even' at random, they each
// compare their first cards. Maria's points are 3-4 = -1, and Andrea's are 4-3 = 1. They discard the 5's and turn over 
// their third cards. Maria receives 6-7 = -1 point and Andrea receives 7-6 = 1 point. Maria score is -2, Andrea's is +2
// so Andrea wins.

// You must determine the name of the winner if there's one, otherwise they tie.
// Return Andrea, Maria or Tie.


function winner(andrea, maria, s) {
  let mariaScore = 0;
  let andreaScore = 0;
  for(let i = 0; i < andrea.length; i++){
      if(s === 'Even' && i % 2 === 0){
          andreaScore += andrea[i] - maria[i];
          mariaScore += maria[i] - andrea[i];

      } else if (s === 'Odd' && i % 2 !== 0){
          andreaScore += andrea[i] - maria[i];
          mariaScore += maria[i] - andrea[i]; 
      }
  }
  if(mariaScore > andreaScore){
      return 'Maria';
  } else if (mariaScore < andreaScore){
      return 'Andrea';
  } else if (mariaScore === andreaScore){
      return 'Tie';
  }
} 



let andrea = [1,2,3];
let maria = [2,1,3];
let s = 'Even';


let win = winner(andrea,maria,s);
console.log(win);