//creating constants for 3 main components of matter.js
const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;

//Creating variables
var engine, world;
var rect1;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    //Creating engine object
    engine = Engine.create();
    //creating world for the engine object
    world =  engine.world;
    
    //creating options json object for rect1 so that it remains static
    var  options ={
        isStatic:true
    }; // json object
    //creating the rect1 from Bodies.rectangle
    rect1 = Bodies.rectangle(200,200,50,50,options);
    //Adding the rect1 to the world
    World.add(world,rect1);
    
    //creating groundOtions json object for ground so that it remains static
    var groundOptions ={
        isStatic:true
    };
    //creating the ground from Bodies.rectangle
    ground = Bodies.rectangle(200,390,400,20,groundOptions);
     //Adding the ground to the world
    World.add(world,ground);

    //creating ballOptions json object for rect1 so that it bounces on ground
    var ballOptions ={
        restitution:1.0
    };
    //creating the ball from Bodies.circle
    ball = Bodies.circle(300,200,30,ballOptions);
     //Adding the ball to the world
    World.add(world,ball);

}

function draw(){
    background("black");
    //updating the engine with the engine object
    Engine.update(engine);
    //Keeping the rectangle mode centre
    rectMode(CENTER);
    //keeping the ellipse mode radius
    ellipseMode(RADIUS);

    //Creating a rectangle with the positions of rect1
    rect(rect1.position.x,rect1.position.y,50,50);
    //Creating a rectangle with the positions of ground
    rect(ground.position.x,ground.position.y,400,20);
    //Creating an ellipse with the positions of ball
    ellipse(ball.position.x,ball.position.y,30,30);
}