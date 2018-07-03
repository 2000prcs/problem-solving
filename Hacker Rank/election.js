function electionWinner(votes) {
  let voters = {};
  let sorted = votes.sort();
  let winner;
  for(let i = 0; i < sorted.length; i++){
    voters[votes[i]] =  (voters[votes[i]] || 0) + 1;
  }
  winner = votes[0];
  for(let key in voters){
    if(voters[key] >= voters[winner]){
      winner = key;
    }
  }
  return winner;
}

let people =  [ 'Alex',
'Michael',
'Harry',
'Dave',
'Michael',
'Victor',
'Harry',
'Alex',
'Mary',
'Mary' ];

let winner = electionWinner(people);
console.log(winner);