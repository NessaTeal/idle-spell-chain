//           const Rarity = [{
//               rarity: "Common",
//               power: 1
//             }, {
//             rarity: "Good",
//             power: 5

//             },{
//             rarity: "Rare",
//             power: 30

//             },
//             "Epic": {

//             },
//             "Legendary": {

//             },
//             "Post-legendary": {

//             },
//             "Ultimate": {

//             }
//           }]
//           getRandomRarityIndex: function() {
//             var rand = Math.random();
//             var cumulativeProbability = 0;
//             for(var i = 0; i < this.maxRarity - 1; i++) {
//               cumulativeProbability += this.cards[i].probability;

//               if(rand <= cumulativeProbability) {
//                 return i;
//               }
//             }

//             return this.maxRarity;
//           }

//           increaseRarity: function() {
//             this.cards.push({id: this.maxRarity, quantity: 0, income: 100, rarity: "Legendary", probability: 0})
//             this.maxRarity++;
//             this.updateProbabilites();
//             this.canIncreaseRarity = false;
//           }

//           updateProbabilites: function() {
//             var total = (this.maxRarity ** (this.probabilityFactor + 1)) / (this.probabilityFactor + 1);

//             var integrals = [];

//             for(var i = 0; i < this.maxRarity; i++) {
//               integrals.push((this.maxRarity - i) ** (this.probabilityFactor + 1) / (this.probabilityFactor + 1))
//             }

//             integrals.push(0);

//             console.log(integrals);
//                         console.log(total);

//             for(var i = 0; i < this.maxRarity; i++) {
//               this.cards[i].probability = (integrals[i] - integrals[i + 1]) / total;
//             }
//           }
//         },
//         created: function() {
//           this.updateProbabilites();
//           setInterval(this.tick, 700);
//         }
//       })
//     </script>
//   </body>
// </html>
