class lightning{
    constructor(x,y,width,height){
        this.x=x
        this.y=y
        this.width=width
        this.height=height

        this.thunder1=loadImage("1.png")
        this.thunder2=loadImage("2.png")
        this.thunder3=loadImage("3.png")
        this.thunder4=loadImage("4.png")
        this.body1=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
World.add(world,this.body1)

    }
     display(){
        
      




  var rand=Math.round(random(1,4))
    if(frameCount%80===0){
        thunder= createSprite(random(10,370),random(10,30),10,10)
        switch(rand){
         case 1: image(this.thunder1,this.x,this.y,this.width,this.height)
         break;
         case 2: image(this.thunder2,this.x,this.y,this.width,this.height)
          break;
          case 3:image(this.thunder3,this.x,this.y,this.width,this.height)
        default: break

        }
        // thunder.scale=random(0.3,0.6)
    }
    }


    
}