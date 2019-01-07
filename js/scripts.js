new Vue ({
 el : "#app",
 data : {
   show : true,
   player1 : {
   name: "You, the guy that knew the monster killed Alfred but still let 'it' live",
   health : 100
   },
   player2 : {
   name : "The Monster That Killed almost  half of Justice League",
   health : 100
   }
 },
 methods : {
   attack : function(){
     this.player1.health -= Math.floor(Math.random() * (10 - 1 + 1)) + 1;
     this.player2.health -= Math.floor(Math.random() * (10 - 1 + 1)) + 1; 
  }
 }
});
