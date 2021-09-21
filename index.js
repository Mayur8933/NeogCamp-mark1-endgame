var readlineSync = require("readline-sync");

var userName = readlineSync.question('What is your name? ');
var score = 0;
console.log('welcome ' + userName + ' to Do you know Mayur?')

function play(que,ans){
  var userAns = readlineSync.question(que);

  if (userAns == ans){
    console.log('right!');
    score = score + 1;
  }else{
    console.log('wrong!');
  }

  console.log('current score: ',score)
  console.log('---------------------')
}

  
var questions = [{
    que: 'what is my hometown?',
    ans: 'Dhule'
  },
{
    que:'from which state I am from?',
    ans:'Maharashtra'
  },
 {
    que:'What is my favourite song?',
    ans:'ranjha'
  },
{
    que:'who is my favourite actor?',
    ans: 'akshay kumar'
  }]

  for(var i=0;i<questions.length; i++){
    var currentQue = questions[i];
    play(currentQue.que,currentQue.ans)
  }

  console.log('Wow! You Scored: ',score)