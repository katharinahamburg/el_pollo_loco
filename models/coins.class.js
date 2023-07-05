class Coins extends CollectableObjects {

    width = 20;
    height = 50;
   

    COINS_COLLECT = [
        'img/8_coin/coin_2.png'
];

    constructor() {
        super().loadImages(this.COINS_COLLECT);
       
    }
}