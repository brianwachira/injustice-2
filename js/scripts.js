new Vue({
  el: "#app",
  data: {
    gameHaStarted : false,
    player1: {
      name: "You, the guy that knew the monster killed Alfred but still let 'it' live",
      health: 100
    },
    player2: {
      name: "The Monster That Killed almost  half of Justice League",
      health: 100
    }
  },
  methods: {
    startGame : function()  {
        this.gameHaStarted = true;
        this.player1.health = 100;
        this.player2.health = 100;
    },
    attack: function() {
      this.player2.health -= this.calculateDamage(10,3);
      var instance = this;
      setTimeout(function() {
        instance.player1.health -= instance.calculateDamage(12,4);
      }, 2000);
    },
    specialAttack: function() {
      this.player2.health -= this.calculateDamage(3,20);
      var instance = this;
      setTimeout(function() {
        instance.player1.health -= instance.calculateDamage(2,20) ;
      }, 2000); 
    },
    heal: function() {  
      if  (this.player1.health <90 && this.player2.health < 90){
          this.player1.health +=10;
          this.player2.health +=10;
        }else {
          this.player1.health = 100;
          this.player2.health = 100;
        }
    },
    giveIn: function(){
      this.gameHaStarted = false;
    },
    calculateDamage : function(min,max){
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    }
  }
});
