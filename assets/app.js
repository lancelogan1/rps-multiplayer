//listen for user keyup (uer choice)
//listen for opponent keyup (opponent choice)
//if-else statment to see which choice wins
//if choice is the same: tie
//add point to array - wins, loses, ties
//restart game 



$(document).ready(function(){

//Global Variables
//***************************************

    let userChoice = prompt("Do you choose rock, paper or scissors?");
    let computerChoice = Math.random();
    let user1Wins = 0;
    let user2Wins = 0;
    let user1Lose = 0;
    let user2Lose = 0;

    

//Compare choice function 
//***************************************
    let compare = function(choice1, choice2){
        if (choice1 === choice2){
            return "Tie";
        } 
        if (choice1 === "rock"){
            if (choice2 === "scissors"){
                return "rock wins";
            } else {
                return "paper wins";
            }
        }
        if (choice1 === "paper"){
            if (choice2 === "rock"){
                return "paper wins";
            } else {
                return "scissors wins";
            }
        }
        if (choice1 === "scissors"){
            if (choice2 === "paper"){
                return "scissors wins";
            } else {
                return "rock wins";
            }
        }
    };
    
    compare(userChoice, computerChoice);
    
//Gameplay function 
//***************************************
   
    function gameStart(){
        let user1;
        let user2;
    }
   
   
    // let name1 = prompt('What is player 1\'s name?');
    // let name2 = prompt('What is player 2\'s name?');

    //call gameStart here


    














});     //doc ready