//function that takes user input for username and uses it for the welcome and the user side 

var username_input = "";
 

function username_submit() {
    username_input = document.getElementById("username_input").value; 
    document.getElementById("welcome").innerHTML = "Welcome " + username_input;
    document.getElementById("user_side").innerHTML = username_input; 
    document.getElementById("username_input").value = '';
}
    






//function for when the user clicks "Play" it loads the game itself 
function playfunction() {
    var play_game = document.getElementById("on_play");
    if (play_game.style.display === "none") {
        play_game.style.display = "block";
    } else {
        play_game.style.display = "none";
    }
}


//function for when the user clicks "Instructions" it loads instructions 
//and also gives the play button 
function instructions() {
    var load_instructions = document.getElementById("learnGame");
    if (load_instructions.style.display === "none") {
        load_instructions.style.display = "block"; 
    } else {
        load_instructions.style.display = "none";
    }
}

function user_selection(user_input) {
    var computer_array = ["rock", "paper", "scissor"];
    var computer_choice = computer_array[Math.floor(Math.random() * computer_array.length)];
    if (user_input == computer_choice) {
        alert ("You chose "+ user_input + " " + "Computer chose " + " " + computer_choice + "\nIt's a tie!");
    } else if (user_input == "rock" && computer_choice == "paper") {
        alert ("You chose "+ user_input + " " + "Computer chose " + " " + computer_choice + "\nYou lose!");
    } else if (user_input == "rock" && computer_choice == "scissors") {
        alert ("You chose "+ user_input + " " + "Computer chose " + " " + computer_choice + "\nYou win!");
    } else if (user_input == "paper" && computer_choice == "rock") {
        alert ("You chose "+ user_input + " " + "Computer chose " + " " + computer_choice + "\nYou win!");
    } else if (user_input == "paper" && computer_choice == "scissors") {
        alert ("You chose "+ user_input + " " + "Computer chose " + " " + computer_choice + "\nYou lose!");
    } else if (user_input == "scissors" && computer_choice == "paper") {
        alert ("You chose "+ user_input + " " + "Computer chose " + " " + computer_choice + "\nYou win!");
    } else if (user_input == "scissors" && computer_choice == "rock") {
        alert ("You chose "+ user_input + " " + "Computer chose " + " " + computer_choice + "\nYou lose!");
    }

}

// I'll need a function that recognizes which button the user clicked
// (rock, paper, or scissors) and sets that to a variable for comparison
// function user_selection
//     case 
// // need a computer array 


// // need randomizes the scissor or rock or paper image for the computer
// // and displays that then sends to the compare function 

// //a function that takes the user vs. computer comparison and spits out
// //winner or loser 
// function decide_winner 
//     case 
    

// something that comes up when the game is decided that posts results and let's you click play again


//eventually a function that adds 1 to a variable for the user and computer
//totals whenever one or the other wins and then displays that
