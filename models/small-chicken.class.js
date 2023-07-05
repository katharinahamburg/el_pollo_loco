class SmallChicken extends MovableObject {

    width = 60;
    height = 40;
    y = 385;

    
    IMAGES_WALKING = [ 
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];

    IMAGES_DEAD = [ 
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png',
       
    ];

    

    currentImage = 0;
    
  
    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        //this.loadImages(this.IMAGES_DEAD);

        this.x = 50 + Math.random() * 950;
        this.speed = 0.02 + Math.random() * 3.5;

        this.animate();
        

    }

    animate() {
        setInterval(() => {
            this.moveRight();
            this.otherDirection = true;
        }, 4000/50);

    
        

    setInterval(() => { 
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }, 100);
    }
}