// Card counter challenge from www.freecodecamp.com
var count = 0;
var status = "";

function cc(card) {

  // Sets status depending on count value.
  function player(count) {
    if (count > 0) {
      status = "Bet";
    } else if (count <= 0) {
      status = "Hold";
    }
  }

  // Switch statement to increment or decrement count variable based on face value of card.
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      player(count);
      return count + " " + status;
    case 7:
    case 8:
    case 9:
      player(count);
      return count + " " + status;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      player(count);
      return count + " " + status;
  }
}

// Test values for function.
cc(2); cc(3); cc(7); cc('K'); cc('A');

