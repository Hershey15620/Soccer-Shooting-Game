class Ball
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:1,
			density:1.2,
			frictionAir:0.0201
			}
		this.x=x;
		this.y=y;
		this.r=50
        this.image=loadImage("Images/ball.png")
		this.body=Bodies.circle(this.x, this.y, 50, options)
		//Matter.Body.setMass(this.body,mass*5);
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			image(this.image,0,0,50,50);
			pop()
			
	}

	score(){
		if (this.body.position.x>1200 && this.body.position.x<1500 && this.body.position.y>600){
			Matter.Body.setStatic(this.body, {isStatic:true})
			score=score+1;
			textSize(80);
			fill("black");
			text("You Win!!!",500,300);
			textSize(20)
			text("Press R to retry",600,350)
			
		}
	}


	
}