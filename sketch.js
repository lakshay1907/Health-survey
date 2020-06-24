var ball;
var database;
var position;
var gameState = 0;
var playerCount=0 ;
var form;
var player;
var game;
function setup(){
    createCanvas(600,600);
   
   database= firebase.database();
   game = new Game();
   game.start();
}


function draw(){
    background("white");
    fill(0);
    text("Enter Email",170,530);
    textSize(20);
    
    text("Q-1 Are you allwed to sample your parent's alcoholic drinks? ",3,20);
    text("Q-2 Do you take a nutritional diet?",3,80);
    text("Q-3 Do you exercise regularly?",3,160);
    text("Q-4 What is the status of your BMI?",1,245);
    text("Q-5 On a scale of 1-10 how healthy do you consider yourself?",1,350);
    text("BMI is the Body Mass Index whose value is derived from the height ",1,300);
    text("and weight of a person.Text me to find your perfect body weight",1,320);
    text("Q-6 Was the survey useful to you?",3,400);
    
}


