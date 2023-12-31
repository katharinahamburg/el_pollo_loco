class MovableObject extends DrawableObject {
    
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;
    
    


    applyGravity(){
        setInterval(()  => {
            if(this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        } }, 1000 / 25);

    }


    isAboveGround(){
        if(this instanceof ThrowableObject) {
            return true;
        } else {
        return this.y < 99;
    }
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
            this.energy -= 20;
            
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
    