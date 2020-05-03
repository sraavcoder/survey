
var database;

var  player;

var answer1;
var question1;

var question2;
var answer2;

var question3;
var answer3;

var question4;
var answer4;

var question5;
var answer5;

function setup(){ 
  database = firebase.database();
  
  canvas = createCanvas(500,400);

  answer1 = new Question();
  answer2 = new Question();
  answer3 = new Question();
  answer4 = new Question();
  answer5 = new Question();
 
  
  survey = new Form();

}


function draw(){
 
 survey.display();

}
