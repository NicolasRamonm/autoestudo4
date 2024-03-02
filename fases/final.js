
class Telafinal extends Phaser.Scene {

    constructor() {
        super({
            key: 'Telafinal',
        });
    }

    create(){
        this.add.image(400, 1100, 'fundodeserto');//background
        this.add.image(400, 980, 'restart').setScale(0.2)//mensagem de fim

    }



}
