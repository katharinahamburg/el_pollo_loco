class Bottle extends CollectableObjects {

    width = 60;
    height = 90;
   


    BOTTLE_COLLECT = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'
];

    constructor() {
        super().loadImages(this.BOTTLE_COLLECT);
       ;
    }
}

