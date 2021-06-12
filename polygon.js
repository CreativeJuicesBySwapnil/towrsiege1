class Polygon{
    constructor(){
        this.polygon = Matter.Bodies.rectangle(100,250,50,50)
        this.width = 50
        this.height = 50
        Matter.World.add(world,this.polygon)
       this.image = loadImage("polygon.png")
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.polygon.position.x,this.polygon.position.y,this.width,this.height);

    }
}