const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world
var droplets
var walking
var thunder
var ground1
var maxDrops=100
var droplets=[]

function preload(){

}

function setup(){
    createCanvas(1200,800)
    engine=Engine.create()
    world=engine.world
     walking=new walker(300,600,10,10)
     thunder= new lightning(600,0)
     ground1=new ground(400,500,1000,10)
   Engine.run(engine)
}



function draw(){
    Engine.update(engine)
    background(0)
    
    
    walking.display()
    thunder.display()
    ground1.display()
    for (var i=0; i<maxDrops; i++){
        droplets.push((new droper(random(0,400),random(0,400)),20))

       
       
       
       }
for (var i=0;i<maxDrops;i++){
    droplets[i].display()
 droplets[i].updateY()
}
   
  
    
} 



    
















  





