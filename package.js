class Package{
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y,20,10, options);
        this.image = loadImage("package.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0);
        pop();
      }
}