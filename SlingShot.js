class SlingShot
{
    constructor(bodyA, pointB)
    {
        var options=
        {
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.4,
           length:50
        }
       this.sling= Constraint.create(options);
       this.pointB=pointB;
       World.add(world, this.sling);
    }

     fly()
    {
       this.sling.bodyA=null;
    }
    display()
    {
        if(this.sling.bodyA)
        {
        var pointA= this.sling.bodyA.position;
        var pointB= this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}