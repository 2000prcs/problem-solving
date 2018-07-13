let closest = Infinity;
let eventId = Infinity;
let cheapestEventPrice = Infinity;
//    let distances  = [];
let currentPrices;
let newPrices;

let events = { 
 '1': [ [ 1, 1 ], [ '40', '60' ] ], 
 '2': [ [ 1, 4 ], [ '50' ] ],
 '3': [ [4, 1], ['60', '80']]
 };

let buyers = { 
 '1': [ 3, 3 ],
 '2': [3, 2],
 '3': [4, 3]
 };

 // closest
function findClosest(){
  for(let num in buyers){
     for(let tix in events){
         let distance = calculateManhattanDistance(events[tix][0][0], events[tix][0][1], buyers[num][0], buyers[num][1]);
         eventId = tix;
         console.log(distance, closest);
         if(distance < closest){
//                 distances = [eventId];
             closest = distance;
             currentPrices = events[tix][1];
             console.log(currentPrices.sort());
             cheapestEventPrice = currentPrices.sort()[0];   
             console.log(cheapestEventPrice);       
         } else if (distance === closest){
             newPrices = events[tix][1];
             let newPrice = newPrices.sort()[0];
             console.log('compare price', newPrice, cheapestEventPrice)
             if(parseInt(newPrice) < parseInt(cheapestEventPrice)){
                 cheapestEventPrice = newPrice;
                 console.log('reset price', cheapestEventPrice);
             }

//                 console.log(currentPrices, newPrices);
             // distances.push(eventId);
         }   
     }
 }
             console.log('cheapest', cheapestEventPrice)

//     if(distances.length > 1){
//        let prices = events[distances[0][1]];
//        for(let i = 0; i < distances.length; i++){
//             for(let j = 0; j < prices.length; j++){

//             }
//        }

//     } else {
//         let prices = events[distances[0]][1];
//         if(prices.length > 0){
//               for(let i = 0; i < prices.length; i++){
//                   if(parseInt(prices[i]) < cheapestEventPrice){
//                       cheapestEventPrice = prices[i];
//                   }
//               }
//         }
//     }
 console.log('result: ', eventId, cheapestEventPrice);
}


function calculateManhattanDistance(x1, y1, x2, y2){
     return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}


findClosest();