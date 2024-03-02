class Telainicial extends Phaser.Scene {

    constructor() {
        super({
            key: 'Telainicial',
        });
    }

    preload() { //preload de imagens e do html
        
        this.load.html("form", "form/form.html");
        this.load.image("play", "assets/jogar.png");
        this.load.image("play2", "assets/jogar2.png");
        this.load.image('fundodeserto', 'assets/deserto.png');
        this.load.image('cloud1', 'assets/cloud1.png');
        this.load.image('cloud2', 'assets/cloud2.png');
        this.load.image('cloud3', 'assets/cloud3.png');
        this.load.image('cloud4', 'assets/cloud4.png');
        this.load.image('cloud5', 'assets/cloud5.png');
        this.load.image('cloud7', 'assets/cloud7.png');
        this.load.image('cloud6', 'assets/cloud6.png');
        this.load.image('cloud8', 'assets/cloud8.png');
        this.load.image('restart', 'assets/restart.png');
        this.load.image('cenario', 'assets/cenario2.png');
        this.load.html("form", "form/form.html");
        this.load.spritesheet('jump', 'assets/jump.png', { frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('idle', 'assets/idle.png', { frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('run', 'assets/run.png', { frameWidth: 128, frameHeight: 128});
        this.load.image('cloud1', 'assets/cloud1.png');
        this.load.image('castelo', 'assets/castelo.png');
        this.load.image('star', 'assets/star.png');

    }

    create() {

        this.add.image(400, 1100, 'fundodeserto'); //background inicial
        this.cursors = this.input.keyboard.createCursorKeys();
        this.nameFilled = false; 

        var text = { height: 20, padding: 15, content: 'BoringGame' } //Texto com nome do jogo
        this.message = this.add.text(
            this.game.config.width / 2,
            this.game.config.height / 2 - text.padding * 2 - text.height,
            text.content, {
                color: "#9f8763",
                fontSize: 40,
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        var inputSize = { width: 270, height: 42, padding: 15 };  //definições de tamanho e posição da barra e botão
        var inputButton = { width: 30, height: 15 };
        var inputCoords = {
            xposition: (this.game.config.width - inputSize.width) / 2 - inputButton.width,
            yposition: (this.game.config.height - inputSize.height - inputSize.padding * 2) / 2,
        };
        this.inputName = this.add.dom(inputCoords.xposition, inputCoords.yposition).createFromCache('form').setOrigin(0, 0);

        const nomeText = this.add.text( 
            inputCoords.xposition + inputSize.width + 13,
            inputCoords.yposition + inputButton.height + 2, ">", {
                backgroundColor: "#9f8763",
                fontSize: 18,
                padding: 10
            }
        );
        nomeText.setInteractive();

        nomeText.on('pointerdown', () => {
            this.updateName(this.inputName);
        });

        this.botaoJogar = this.add.image(345, 1100, 'play') //adiciona botão play, inicialmente invisivel
            .setOrigin(0, 0).setInteractive().setVisible(false);


        this.botaoJogar.on('pointerdown', function () { //se o nome for completa Fase1 é chamada
            if (this.nameFilled) {
                this.scene.start('Fase1', this.game);
            }}, this);

        botaoHover(this.botaoJogar, 'play', 'play2') //função para botão mudar de cor

    }

    updateName(inputNameElement) { 
        let name = inputNameElement.getChildByName("name");
        if (name.value != "") { //verifica se um nome foi digitado
            this.message.setText("Olá " + name.value+"!"); //caso visivel mostra um texto com o nome da pessoa
            this.botaoJogar.setVisible(true);
            this.nameFilled = true; //define o nome como inserido
            this.game.name = name.value;
        }
    }

    update() {
    }
}

    //Função para fazer com que qualquer botão alterne entre duas texturas se o mouse estiver em cima
    function botaoHover(botao, textura1, textura2){
        botao.on("pointerover", () => botao.setTexture(textura2));
        botao.on("pointerout", () => botao.setTexture(textura1));
    }

