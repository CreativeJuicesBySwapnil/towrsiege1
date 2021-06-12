class Block{
    constructor(x,y){
        var options={
            restitution:0.2,
            friction:0
        }
        this.block = Matter.Bodies.rectangle(x,y,30,40,options)
        this.w = 30
        this.h = 40

        this.visibilty = 255
        Matter.World.add(world,this.block)
    }
    display(){
        if(this.block.speed>3){
    tint(255,this.visibilty)
    this.visibility = this.visibility-10
    Matter.World.remove(world,this.block)
        }
        
        else{
            rectMode(CENTER)
            rect(this.block.position.x,this.block.position.y,this.w,this.h)
        }
        
        
    }
}
