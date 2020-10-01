class Goal{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.GpWidth=200;
		this.GpHeight=100;
		this.wallThickness=20;
		this.angle=0;	
		this.image=loadImage("Images/goal.jpg");
		this.topBody=Bodies.rectangle(this.x, this.y-110, this.GpWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.GpWidth/2, this.y-this.GpHeight/2, this.wallThickness, this.GpHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.GpWidth/2, this.y-this.GpHeight/2, this.wallThickness, this.GpHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.topBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var postop=this.topBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.GpHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.GpHeight);
			pop()

			push()
			translate(postop.x, postop.y);
            
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
            fill(255)
            imageMode(CENTER)
            image (this.image, 0,this.GpHeight/2, this.GpWidth,this.GpHeight)
			//rect(0,0,this.GpWidth, this.wallThickness);
			pop()
			
	}

}