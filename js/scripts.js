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
      this.player2.health -= Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      var instance = this;
      setTimeout(function() {
        instance.player1.health -= Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      }, 2000);
    },
    specialAttack: function() {
      this.player2.health -= Math.floor(Math.random() * (this.player2.health - 1 + 1)) + 10;
      var instance = this;
      setTimeout(function() {
        instance.player1.health -= Math.floor(Math.random() * (instance.player1.health - 1 + 1)) + 1;
      }, 2000);
    },
    heal: function() {
      this.player1.health += (100 - (this.player1.health)) / 2;
      this.player2.health += (100 - (this.player2.health)) / 2;
    }
  }
});
