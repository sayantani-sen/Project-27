class Bob {
    constructor(x,y){
        var options = {
            isStatic: true,
		    restitution: 0.3,
		    friction: 0.5,
		    density: 1.2
        }
        this.body = Bodies.circle(x,y,100,options);
        this.scale = 0.2;
        World.add(world,this.body);
    }
    display(){
        fill("purple");
        circle(this.body.position.x,this.body.position.y,100);
    }
} 
// createCanvas(800, 700);