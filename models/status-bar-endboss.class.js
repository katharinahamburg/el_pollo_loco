class StatusBarEndboss extends DrawableObject {

    IMAGES = [
        'img/7_statusbars/2_statusbar_endboss/blue/blue0.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue20.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue40.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue60.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue80.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue100.png'

];

percentage = 100;


constructor(){
    super();
    this.loadImages(this.IMAGES);
    this.x = 590;
    this.y = 15;
    this.width = 200;
    this.height = 50;
    this.setPercentage(100);
}

setPercentage(percentage) {
    this.percentage = percentage; // => 0...5
    let path = this.IMAGES[this.progressStatusbar()];
    this.img = this.imageCache[path];

}

progressStatusbar() {
    
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage == 80) {
            return 4;
        }
        else if (this.percentage == 60) {
            return 3;
        }
        else if (this.percentage == 40) {
            return 2;
        }
        else if (this.percentage == 20) {
            return 1;
        } 
        else if (this.percentage == 0) {
            return 0;
        }
    }
    


}