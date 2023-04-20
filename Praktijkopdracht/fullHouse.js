function isFullHouse(dice) {
    const counts = Array(7).fill(0);
    for (let i = 0; i < dice.length; i++) {
      counts[dice[i]]++;
    }
    let hasTwo = false;
    let hasThree = false;
    for (let i = 1; i <= 6; i++) {
      if (counts[i] == 2) {
        hasTwo = true;
      } else if (counts[i] == 3) {
        hasThree = true;
      }
    }
    return hasTwo && hasThree;
  }
  
  // Voorbeeldgebruik:
  // Rol van dobbelstenen
  const dice = [2, 2, 5, 5, 5];
  if (isFullHouse(dice)) {
  }
  