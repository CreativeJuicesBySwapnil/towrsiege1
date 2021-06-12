class Ground{
    constructor(x,y,w,h){
      var options={
            isStatic:true,

        }
        this.ground = Matter.Bodies.rectangle(x,y,w,h,options)
        this.w = w
        this.h = h
        Matter.World.add(world,this.ground)
    }
    display(){
        rectMode(CENTER)
        rect(this.ground.position.x,this.ground.position.y,this.w,this.h)
    }
}