const result1 = Math.random();
alert(result1);

let result1Format;
if (result1 < 0.33) {
  result1Format = "rock";
} else if (result1 < 0.66) {
  result1Format = "scissors";
} else {
  result1Format = "paper";
}

const result2 = Math.random();
alert(result2);

let result2Format;
if (result2 < 0.33) {
  result2Format = "rock";
} else if (result2 < 0.66) {
  result2Format = "scissors";
} else {
  result2Format = "paper";
}

alert(`Firs player has chosen ${result1Format} (${result1}), 
      second player has chosen ${result2Format} (${result2})`);

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

alert(win);
