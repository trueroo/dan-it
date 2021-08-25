function getResultForPlayer (playerNumber) {
  let result = Math.random();
  alert(result)
  let resultFormat;

  if (result < 0.33) {
    resultFormat = "rock";
  } else if (result < 0.66) {
    resultFormat = "scissors";
  } else {
    resultFormat = "paper";
  }

  alert(`Player ${playerNumber} got ${resultFormat}`);
  return resultFormat;
}

let result1Format = getResultForPlayer(1);
let result2Format = getResultForPlayer(2);

alert(`Firs player has chosen ${result1Format}, 
      second player has chosen ${result2Format} `);

let win;

if (result1Format == "rock" && result2Format == "scissors") {
  win = "player1";
} else if (result1Format == "rock" && result2Format == "paper") {
  win = "player2"
} else if (result1Format == "paper" && result2Format == "scissors") {
  win = "player2"
} else if (result1Format == "paper" && result2Format == "rock") {
  win = "player1"
} else if (result1Format == "scissors" && result2Format == "rock") {
  win = "player2"
} else if (result1Format == "scissors" && result2Format == "paper") {
  win = "player1"
} else {
  win = "draw"
}

alert(win + ' is winner');
