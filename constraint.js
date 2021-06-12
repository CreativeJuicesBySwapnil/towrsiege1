class Constraint{
    constructor(a,b){
        var options = {
            bodyA: a,
            pointB: b,
            stiffness: 0.2,
            length: 20
        }
        this.c = Matter.Constraint.create(options)

        this.pointb = b
        Matter.World.add(world,this.c)
    }
    display(){
        if(this.c.bodyA){
            line(this.c.bodyA.position.x,this.c.bodyA.position.y,this.pointb.x,this.pointb.y)
        }
        
    }
    dissapear(){
        this.c.bodyA = null
    }
}