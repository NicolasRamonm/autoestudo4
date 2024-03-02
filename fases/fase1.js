//Variaveis
var personagem;
var teclado;
var plataforma;
var plataforma2;
var plataforma3;
var plataforma4;
var plataforma5;
var plataforma6;
var plataforma7;
var plataforma8;
var plataforma9;
var plataforma10;
var plataforma11;
var plataforma12;
var plataforma13;
var plataforma14;
var plataforma15;
var plataforma16;
var plataforma17;
var plataforma18;
var plataforma19;
var plataforma20;
var castelo;
var overlapDetected = false

class Fase1 extends Phaser.Scene {

    constructor() {
        super({
            key: 'Fase1',
        });
    }
        
            preload() { //carrega os assets
                this.load.image('alien1', 'assets/alien1.png');
                this.load.image('cenario', 'assets/cenario2.png');
                this.load.html("form", "form/form.html");
                this.load.spritesheet('jump', 'assets/jump.png', { frameWidth: 128, frameHeight: 128});
                this.load.spritesheet('idle', 'assets/idle.png', { frameWidth: 128, frameHeight: 128});
                this.load.spritesheet('run', 'assets/run.png', { frameWidth: 128, frameHeight: 128});
                this.load.image('cloud1', 'assets/cloud1.png');
                this.load.image('castelo', 'assets/castelo.png');
            }
    
            create() {
                this.add.image(400, 1100, 'cenario').setScrollFactor(1); //adiciona o background

                this.personagem = this.physics.add.sprite(larguraJogo/2, 2200, 'run').setScale(0.7).setSize(20,80).setOffset(50, 50) //sprite e fisica do personagem
                
                this.personagem.setCollideWorldBounds(true); //personagem se limita a página
                
                this.cameras.main.startFollow(this.personagem, true) //camera segue o personagem

                this.anims.create({ //cria animação de correr
                    key: 'run',
                    frames: this.anims.generateFrameNumbers('run', { start: 0, end:8}),
                    frameRate: 10,
                    repeat: -1
                });

                this.anims.create({ //cria animação de parado
                    key: 'idle',
                    frames: this.anims.generateFrameNumbers('idle', { start: 0, end:7}),
                    frameRate: 10,
                    repeat: -1
                });

                this.anims.create({ //cria animação de pulo
                    key: 'jump',
                    frames: this.anims.generateFrameNumbers('jump', { start: 0, end:7}),
                    frameRate: 10,
                    repeat: -1
                });

                this.personagem.anims.play('idle', true)
                
                teclado = this.input.keyboard.createCursorKeys();
                
                //criarPlataforma(plataforma1, 200, 1950, 'cloud2') FUNÇÃO QUE NÃO FUNCIONA


                //Posição da Nuvens, setadas como objetos com colisão com o 'personagem'
                plataforma = this.physics.add.staticImage(400, 1900, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40); //adiciona plataforma
                this.physics.add.collider(plataforma, this.personagem); 
    
                plataforma2 = this.physics.add.staticImage(300, 1750, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma2, this.personagem);
    
                plataforma3 = this.physics.add.staticImage(200, 1690, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma3, this.personagem);

                plataforma4 = this.physics.add.staticImage(300, 1600, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma4, this.personagem);

                plataforma5 = this.physics.add.staticImage(500, 1600, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma5, this.personagem);

                plataforma6 = this.physics.add.staticImage(650, 1500, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma6, this.personagem);

                plataforma7 = this.physics.add.staticImage(550, 1350, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma7, this.personagem);

                plataforma8 = this.physics.add.staticImage(400, 1250, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma8, this.personagem);

                plataforma9 = this.physics.add.staticImage(180, 1250, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma9, this.personagem);

                plataforma10 = this.physics.add.staticImage(250, 1100, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma10, this.personagem);

                plataforma11 = this.physics.add.staticImage(200, 970, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma11, this.personagem);

                plataforma12 = this.physics.add.staticImage(400, 920, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma12, this.personagem);

                plataforma13 = this.physics.add.staticImage(500, 800, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma13, this.personagem);

                plataforma14 = this.physics.add.staticImage(380, 770, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma14, this.personagem);

                plataforma15 = this.physics.add.staticImage(170, 700, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma15, this.personagem);

                plataforma16 = this.physics.add.staticImage(50, 570, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma16, this.personagem);

                plataforma17 = this.physics.add.staticImage(150, 500, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma17, this.personagem);

                plataforma18 = this.physics.add.staticImage(320, 470, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma18, this.personagem);

                plataforma19 = this.physics.add.staticImage(460, 390, 'cloud1').setScale(0.4).setSize(50,40).setOffset(85, 40);
                this.physics.add.collider(plataforma19, this.personagem);

                plataforma20 = this.physics.add.staticImage(700, 390, 'cloud1').setScale(0.8).setSize(150,80).setOffset(30, 30);
                this.physics.add.collider(plataforma20, this.personagem);
                
                this.cameras.main.fadeIn(4000, 49, 46, 43);

                castelo = this.physics.add.sprite(700, 200, 'castelo').setDepth(3);
                this.physics.add.collider(plataforma20, castelo);

                this.physics.add.overlap(this.personagem, castelo, function() { //detecta se o jogador entrou em
                    overlapDetected = true;});                                  //contato com o castelo
            }
              
            
    
            update() { 


                if (teclado.left.isDown) //se o direcional esquerdo pressionado
                {
                    this.personagem.setVelocityX(-150);
                    this.personagem.setFlip(true, false)
                    this.personagem.anims.play('run', true); //animação de andar virada para o lado certo
                }
                else if (teclado.right.isDown) //se o direcional direito pressionado
                {
                    this.personagem.setVelocityX(150);
                    this.personagem.anims.play('run', true)
                    this.personagem.setFlip(false, false); //animação de andar virada para o lado certo
                }
                else
                {
                    this.personagem.setVelocityX(0); //personagem parado ativa animação de Idle
                    this.personagem.anims.play('idle', true);
                }
        
                if (teclado.space.isDown && this.personagem.body.onFloor()) { //Space pressinado e fora de contato com o chão dá um salto
                    this.personagem.setVelocityY(-500);
                }

                if (!this.personagem.body.onFloor()) {//animação do salto
                    this.personagem.anims.play('jump', true);
                }

                if(overlapDetected) {
                    this.scene.start('Telainicial', this.game)//se o overlap for verdadeiro tela inicial é invocada
                    this.personagem.setPosition(larguraJogo/2, 2200)
                }

    }

}

function criarPlataforma(nome, eixoX, eixoY , nuvem){//ESSA FUNÇÃO NÃO FUNCIONA E NÃO SEI O MOTIVO
    nome = this.physics.add.staticImage(eixoX, eixoY, nuvem).setScale(0.4).setSize(50,40).setOffset(85, 40); //adiciona plataforma
    this.physics.add.collider(nome, this.personagem);
}



