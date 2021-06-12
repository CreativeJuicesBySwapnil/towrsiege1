var ground1,ground2

function setup(){
   createCanvas(900,400)    
    engine = Matter.Engine.create()
    world = engine.world

    ground1 = new Ground(450,390,900,20)
    ground2 = new Ground(390,300,250,10)
    ground3 = new Ground(700,200,200,10)

    //bottom
    b1 = new Block(300,275)
    b2 = new Block(330,275)
    b3 = new Block(360,275)
    b4 = new Block(390,275)
    b5 = new Block(420,275)
    b6 = new Block(450,275)
    b7 = new Block(480,275)

    //middle
    b8 = new Block(330,235)
    b9 = new Block(360,235)
    b10 = new Block(390,235)
    b11 = new Block(420,235)
    b12 = new Block(450,235)

    //top
    b13 = new Block(360,195)
    b14 = new Block(390,195)
    b15 = new Block(420,195)

    //peak
    b16 = new Block(390,155)

    //2nd one
    b17 = new Block(640,175)
    b18 = new Block(670,175)
    b19 = new Block(700,175)
    b20 = new Block(730,175)
    b21 = new Block(760,175)

    //2nd two
    b22 = new Block(670,135)
    b23 = new Block(700,135)
    b24 = new Block(730,135)

    //peak 2
    b25 = new Block(700,95)

    polygon = new Polygon()

    constraint = new Constraint(polygon.polygon,{x:100,y:250})
}

function draw(){
    background("white")
    Matter.Engine.update(engine)

    fill("red")
    ground1.display()
    ground2.display()    
    ground3.display()

    fill("green")
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();

    fill("blue")
    b8.display()
    b9.display()
    b10.display()
    b11.display()
    b12.display()
    b22.display();
    b23.display();
    b24.display();

    fill("red")
    b13.display()
    b14.display()
    b15.display()

    fill("white")
    b16.display()
    b25.display();
    
    fill("yellow")
    polygon.display();

    constraint.display()
}

function mouseDragged(){
Matter.Body.setPosition(polygon.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    constraint.dissapear()
}