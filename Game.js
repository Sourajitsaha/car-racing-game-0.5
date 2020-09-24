class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      
      player = new Player();
      
      var playerCountRef = await database.ref('playerCount').once("value");
     
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
       
      form = new Form()
      form.display();
    }
  }

  //creating the game play functionalityif
  play(){
    form.hide();

    Player.getPlayerInfo();

    textSize(30);
    text("Game is started!!", 120, 100);

    if(allPlayers !== undefined){
     var  pposition= 130;
     for(var plr in  allPlayers){
      if (player==="player"+player.index){
        fill("red");
      }
      else{
        fill("black");
      }
      pposition+=20;
      textSize(15);
      text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 120, pposition);
     }  

    }

    if(keyDowname(UP_ARROW) && player.index !== null){
        player.distance += 50;
        player.update();
    }

  }
}
