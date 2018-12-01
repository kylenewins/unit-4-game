# unit-4-game

The Game runs like the star Wars game except with Pokemon!

Start the Game by selecting which pokemon You want as your Starter
    -When You select your starter, your selection moves into the yourPoke Div
    -Sound Plays!
    - the other selections move into the enemiesAvail div
    -The text box at the bottom also displays your selection
   

Next, select your opponent
    -When you select your opponent, your selection moves into the opponent Div
    -Sound Plays!
    -The other options hide
    -The text box displays which wild pokemon appears
    -The attack button displays

Next, hit Attack
    -Your HP is subtracted by the opponents attack power
    -the opponents HP is subtracted by your attack power
    -HP deductions are written to the text box along with clarifying strings
    -your attack power stacks +20 each time
    

When the opponent is defeated
    -the button with the opponent's info hides
    -the next challanger button appears, which shows the opponents div we hid before on click
    -repeat the opponent selection process

If you are defeated
    -the button with your pokemon hides
    -the reset button appears

The reset button simply runs the gameStart function which holds the default values of the variables and the hide and show methods. 

The gameStart function is run once as soon as the page loads, and then again when the reset button is pressed.
