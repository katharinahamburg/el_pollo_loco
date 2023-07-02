class BackgoundObject extends MovableObject {

    width = 800;
    height = 700;
    constructor(imagePath, x, y){
super().loadImage(imagePath);
this.x = x;
this.y = 520 - this.height;

    }
}