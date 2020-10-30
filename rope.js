class rope
{
    constructor(body1,body2,offsetX,offsetY)
	{
        this.offsetX=offsetX
        this.offsetY=offsetY
		var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}

			
            }
            //console.log(options);
            this.rope=Constraint.create(options)
            World.add(world,this.rope)
}
display()
{

    var ropePos=this.offsetX.position;
    var ropePos=this.offsetY.position;
    rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
    var pointA=this .rope.bodyA.position;
    var pointB=this.rope.bodyB.position;
    Var Anchor2X=pointB.x+this.offsetX;
    Var Anchor2Y=pointB.y+this.offsetY;


    
			push();
			translate(ropePos.x, ropePos.y);
			rectMode(CENTER)
			//strokeWeight(3);
			fill(255,0,255)
			//ellipse(0,0,this.r, this.r);
			pop();
}
}