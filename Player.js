class Player {
  constructor(){
    //add properties of Player
    this.index = null;
    this.name = null;
    this.distance = 0;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name : this.name,
      distance : this.distance
    });
  }

  //creating static function
  static getPlayerInfo(){
      var playerinfoRef = database.ref("players");
      playerinfoRef.on( "value", (data)=>{
          allPlayers = data.val();
      });

  }

}
