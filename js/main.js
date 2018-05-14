//function for when the user clicks "Play" it loads the game itself 
function playfunction() {
    var play_game = document.getElementById("on_play");
    if (play_game.style.display === "none") {
        play_game.style.display = "block";
    } else {
        play_game.style.display = "none";
    }
}

function instructions() {
    var load_instructions = document.getElementById("learnGame");
    if (load_instructions.style.display === "none") {
        load_instructions.style.display = "block"; 
    } else {
        load_instructions.style.display = "none";
    }
}
//function for when the user clicks "Instructions" it loads instructions 
//and also gives the play button 

// I'll need a function that recognizes which button the user clicked
// (rock, paper, or scissors) and sets that to a variable for comparison

// need a computer array 


// need randomizes the scissor or rock or paper image for the computer
// and displays that then sends to the compare function 

//a function that takes the user vs. computer comparison and spits out
//winner or loser 

//eventually a function that adds 1 to a variable for the user and computer
//totals whenever one or the other wins and then displays that
