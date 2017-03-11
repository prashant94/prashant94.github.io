var font;
var font2;
var vehicles = [];

function preload() {
    font = loadFont('AvenirNextLTPro-Demi.otf');
    font2 = loadFont('Walkway Bold.ttf');
    
}

function setup() {
    createCanvas(900,300);
     

    var points = font.textToPoints('Prashant',50,200,192);
    
    for(var i = 0; i < points.length; i++) {
        pt = points[i];
        var vehicle = new Vehicle(pt.x,pt.y)
        vehicles.push(vehicle);
    }
    

}

function draw() {
    background(29,31,33);
    textFont(font2);
    textSize(36);
    fill(255);
    noStroke();
    text('Programming | Animation | Graphic Design', 100, 270);
    for(var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
        
    }
  
}