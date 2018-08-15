// In elections that use the ballot box system for voting, each voter writes the name of a candidate on a ballot and places
// it in the ballot box. The candidate with the highest number of votes wins the election. If two or more candidates have the
// same number of votes, then the tied candidates' names are ordered alphabetically and the last name in the alphabetical order 
// wins.

// For example, votes are in the names ['Joe', 'Mary', 'Mary', 'Joe']. Each candidate received two votes, but Mary is 
// aplhabetically later than Joe, so she wins.



function electionWinner(votes) {
  let winner = votes[0];
  votes.sort();
  let voters = votes.reduce((count, person)=>{
    count[person] = (count[person] || 0) + 1;
    return count; 
  }, {});
  for(let person in voters){
    if(voters[person] >= voters[winner]){
      winner = person;
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