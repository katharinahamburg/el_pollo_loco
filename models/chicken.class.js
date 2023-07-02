class Chicken extends MovableObject {

    width = 110;
    height = 90;
    y = 340;
    IMAGES_WALKING = [ 
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
        
    ];

    currentImage = 0;
    walking_sound = new Audio('audio/chicken.mp3');
  
    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 650;
        this.speed = 0.15 + Math.random() * 0.35;

        this.animate();
        

    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000/60);

        
        

        setInterval(() => { 
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }, 100);
    }
}

