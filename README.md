# Psychic-Game
Create an array holding all of the computer options.
Create variables to hold the number of wins, losses, guessed characters
Create variables that hold references to the places in the HTML

When the Key is presses by user, store it in a variable.
Generate random character by computer.

if  user's guess = computer guess
			increment win by one
			reset guesses left to 9
			make guessed craracter array empty

if  user's guess <> computer guess
			increment win by one
			guesses left- reduce by 1
			store and show guessed character

if  guesses left =0
			increment losses by one
			reset guesses left to 9
			make guessed craracter array empty
 
Display the user and computer guesses, and wins/losses/ties.
