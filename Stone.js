class Stone{
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("images/stone.png");
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2 
         }
    }
    display(){
        super.display();
    }
}