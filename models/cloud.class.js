class Cloud extends MovableObject {
    width = 500;
    height = 200;
    speed = 0.15;
   
currentImage = 0;

    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/1.png');
       

    this.x = -300 + Math.random() * 810;
    this.y = 2 + Math.random() * 60;
    this.animate();
    
    }

    animate(){
        this.moveLeft();
    }

moveLeft() {
    setInterval(() => {
        this.x -= this.speed;
    }, 1000/60);
}

}
