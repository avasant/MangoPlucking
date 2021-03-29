class Ropes{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB = pointB
        this.rope = constraint.create(options);
        World.add(world,this.rope);
    }
    
    release(){
        this.rope.bodyA=null;
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push(); 
            stroke(48,22,8)
         pop();
        }
        
        
       
    }
    
}