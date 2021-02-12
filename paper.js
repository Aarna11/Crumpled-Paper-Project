class Paper{
constructor(x,y,height){
    var options={
        'restitution':0.3,
        'density':0.1
    }

    this.body=Bodies.circle(x,y,(this.r-20)/2,height,options) ;
    this.width=(this.r-20)/2;
    this.height=height;
    World.add(world,this.body);
}
display(){
    var angle = this.body.angle;
    var pos=this.body.position;
    push();
      translate(pos.x,pos.y);
      rotate(angle)
      CircleMode(CENTER)
      circle(0,0,this.width, this.height);
      pop();
    
}
}
