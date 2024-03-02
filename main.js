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
        scene:[Telainicial, Fase1, Telafinal],//fases e menus
        parent: 'game',
        dom:{
        createContainer: true
        },

        physics: {
        default: 'arcade',
        arcade: {
        gravity:{ y: 800},
        debug: true
        }}
        };
    game = new Phaser.Game(gameConfig);
        
    window.focus();
        
}
