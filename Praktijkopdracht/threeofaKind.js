function hasThreeOfAKind(dice) {
    // Sorteer de dobbelstenen in oplopende volgorde
    dice.sort((a, b) => a - b);
    
    // Doorzoek de dobbelstenen voor drie opeenvolgende waarden
    for (let i = 0; i < dice.length - 2; i++) {
      if (dice[i] === dice[i+1] && dice[i] === dice[i+2]) {
        return true; // Er is een three of a kind
      }
    }
    
    return false; // Geen three of a kind gevonden
  }

  const dice1 = [1, 2, 3, 3, 3];
console.log(hasThreeOfAKind(dice1)); // verwachte uitvoer: true

const dice2 = [1, 1, 2, 2, 3];
console.log(hasThreeOfAKind(dice2)); // verwachte uitvoer: false
