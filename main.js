const larguraJogo = 800; //Altura da página
const alturaJogo = 2000; //Largura da página
        
window.onload = function()
{
    const gameConfig = 
        {
        type: Phaser.AUTO,
        scale:{
        width:larguraJogo,
        height:alturaJogo,
        autoCenter:Phaser.Scale.CENTER,
        },
                
        backgroundColor: '#312e2b',//fundo padrão
        scene:[Telainicial, Fase1],//fases e menus
        parent: 'game',
        dom:{
        createContainer: true
        },

        physics: {
        default: 'arcade',
        arcade: {
        gravity:{ y: 800},
        debug: false
        }}
        };
    game = new Phaser.Game(gameConfig);
        
    window.focus();
        
}
              
    //Função para fazer com que qualquer botão alterne entre duas texturas se o mouse estiver em cima
    function botaoHover(botao, textura1, textura2){
        botao.on("pointerover", () => botao.setTexture(textura2));
        botao.on("pointerout", () => botao.setTexture(textura1));
    }

