
const lodash = require('lodash')
console.log(lodash)
// Load the core build.
const lodashCore = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
const fp = require('lodash/fp');
let cards = []

for(let i = 1; i < 53; i ++){
    cards.push(i)
}
console.log('This is cards before shuffle method ffrom lodash', cards)
cards = lodash.shuffle(cards)

console.log('This is the cards after using lodash shuffle', cards)


cards = lodash.sum(cards)
console.log('This is cards using the sum array, should return the sum of the array', cards)