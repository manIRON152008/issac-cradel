class Bob  {
    constructor(x,y,radius){
      var options = {
        'restitution':0.2,
        'friction':0.0,
        'density':0.2,
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.width = radius;
      this.height = radius;
      World.add(world, this.body);
    }
  
    display() {
      var radius = this.body.radius;
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.width, this.height);
        pop();
    }
  }