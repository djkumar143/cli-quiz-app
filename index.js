var readlineSync = require("readline-sync");
var score = 0;

var questions = [
 {
  question:"What is my web development speciality ",
  answer:"Front-End",
  realAnswer:"Front-End"
},

 {
  question:"where do I live ? ",
  answer:"Bangalore",
  realAnswer:"Bangalore"
},

 {
  question:"what is my goal? ",
  answer:"Web Developer",
  realAnswer:"Wev Developer"
},
{
  question:"What is my favourite sports",
  answer:"Cricket",
  realAnswer:"Cricket"
},
{
  question:"What am I passionate about other than web devlopment? ",
  answer:"Reading Books",
  realAnswer:"Reading Books"
}

];




//function for quiz
function quiz(question, answer,realAnswer){
  var useranswer = readlineSync.question(question);
  if(useranswer == answer){
    console.log("you are right ");
   score = score +1;
   console.log("your score is"+score)
  }
  else{
    console.log("Oops! You are wrong ");
    console.log(" The real Answer is "+realAnswer)
    score = score - 1;
    console.log("Your score is"+ score)
    
  }
}




var qfu =readlineSync.question("Let's see how much do you know about me? Are you ready? (enter yes or no) ");
console.log("You have entered " + qfu);




if(qfu == "yes")
{
    console.log("Here you go . This is your first question.")
    //for loop
    for(i=0;i<questions.length;i++){
    var currentquestion = questions[i];
    quiz(currentquestion.question,currentquestion.answer,currentquestion.realAnswer);

  
    

    }
}



else{
  console.log("It seems you are not interested in the game.Have a nice day. ")
}






