class Ground{
    constructor(x, y, width, heigth){
     var options ={

        isStatic:true
     };   

     this.width = width;
     this.heigth = heigth;
     this.body = Bodies.rectangle(x, y, this.width,this.heigth, options);
     World.add(world, this.body);


    }

    display() {
     var pos = this.body.position;
     push();
     translate(pos.x, pos.y);
     fill("brown")
     rectMode(CENTER);
     rect(0,0,this.width,this.heigth)

     pop();
    }
}