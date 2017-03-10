function Vehicle(x,y){
//    this.pos = createVector(x,y);
    
    this.pos = createVector(random(width),random(height));
    this.target = createVector(x,y);
//    this.vel = createVector();
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = 10;
    this.maxspeed = 5;
    this.maxforce = 2.0;
}

Vehicle.prototype.behaviors = function() {
    var arrive = this.arrive(this.target);
    this.applyForce(arrive);
    
    var mouse = createVector(mouseX,mouseY);
    var flee = this.flee(mouse);
    this.applyForce(flee);
    
}

Vehicle.prototype.applyForce = function(f) {
    this.acc.add(f);
}

Vehicle.prototype.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);    
}

Vehicle.prototype.flee = function(target) {
    var desired = p5.Vector.sub(target,this.pos);
    var d = desired.mag();
    if (d<100) {
        
    desired.setMag(this.maxspeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
//    steer.mult(-1);
    return steer;
    }
    else {
        return createVector(0,0);
    }
    
}

Vehicle.prototype.arrive = function(target) {
    var desired = p5.Vector.sub(target,this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    if(d < 100) {
        speed = map(d,0,100,0,this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    
    return steer;
    
}

Vehicle.prototype.show = function() {
    
    ellipse(this.pos.x,this.pos.y,this.r,this.r);
}   