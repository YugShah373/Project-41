class Drops{
    constructor(x, y){
        this.body=Body.Circle(2);
    }
    update(){
        if(this.rain.position.y>height){
            Matter.body.setPosition(this.rain, {x:random(0, 400), y:random(0, 400)})
        }
    }
}