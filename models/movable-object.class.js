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
        ctx.strokeStyle = 'blue';
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
    
    }

    

    /*
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x + mo.width &&
            this.y < mo.y + mo.height;
    }*/