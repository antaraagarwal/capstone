class Leprochaun {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.leprochaun = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Pictures/lepro.jpg");
        World.add(world, this.body);
      
    }
  
   
  
  }
  