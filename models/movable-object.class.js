class MovableObject {
    x = 100;
    y = 280;
    height = 150;
    width = 100; 
    img;
    imageCache = {};
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 1000;
    lastHit = 0;


    applyGravity(){
        setInterval(()  => {
            if(this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        } }, 1000 / 25);

    }


    isAboveGround(){
        return this.y < 99;
    }


    loadImage(path){

    this.img = new Image(); 
    this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame (ctx){

        if(this instanceof Character || this instanceof Chicken || this instanceof Endboss){
        ctx.beginPath();
        ctx.lineWidth = '3';
        ctx.strokeStyle = 'transparent';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }
}


    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
    });
    
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
        
        }
    
        jump() {
            this.speedY = 0;
        }
    

        // character.isColliding(chicken);
        isColliding(mo) {
            return this.x + this.width > mo.x &&
                this.y + this.height > mo.y &&
                this.x < mo.x + mo.width &&
                this.y < mo.y + mo.height;
        }

        hit() {
            this.energy -= 5;
            if (this.energy < 0) {
                this.energy = 0;
            } else { 
                this.lastHit = new Date().getTime();

            }
        }

        isHurt() {
            let timepassed = new Date().getTime() - this.lastHit;
            timepassed = timepassed / 1000;
            return timepassed < 1;
        }

        isDead() {
            return this.energy == 0;
        }

        
    }

    

    /*
    if (character.x + chracter.width > chicken.x &&
        character.y + character.height > chickeny &&
        character.x < chicken.x &&
        character.y < chicken.y + chicken.height
        )*/
    