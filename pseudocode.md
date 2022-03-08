PURPOSE

Create a tic-tac-toe game that is playable and has a board that is 3x3.
When a square is clicked the square is changed to that player's shape

FUNCTIONAL




OOP 

Model-- all constants
  - the win conditions (array of arrays showing win possibilities)
  - the design of the individual squares
  - the layout of the board and the original state where every square is empty
  - the title which shows in every state change
  - the button that shows in every state that restarts it all and clears the state to the original
  - whose turn it is based on who just clicked (player 1 starts)

View-- what is shown
  - the title is shown
  - the button is shown (eventListener that calls controller to reset state to original)
  - the game board that is 9 squares (3x3) and their states based on if they have been clicked or not and by whom (one eventListener that controlls every square)

Controller-- sets state at each event and handles the events
  - when reset is clicked the state is set to original
  - when each square is clicked -eventListener- that square changes its innerText to either X or O and the whole state of the board is updated to show
  - when a square (button) is clicked, the eventListener for that square is disabled so only squares that are "null" can be clicked
  - builds the board after each event(init, reset click, square click) and updates the currentState
  - checks the squares on the board every click after the 5th one to see if a win condition has occurred. array.sum() or another thing like that
