var maxDrops = 100;

function preload(){
    
}

function setup(){
   var umbrella1 = new Umbrella(200, 0);
    
}

function draw(){
    for(var i=0; i<=maxDrops; i++ ){
        drops.push(new createDrop(random(0, 400), random(0, 400)));
    }
}   

