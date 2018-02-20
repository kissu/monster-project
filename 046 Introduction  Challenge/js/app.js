var vm = new Vue({
  el: '#app',
  data: {
    playerHealth: 80,
    foeHealth: 75,
    gameOver: false,
    logs: [],
    littleCSS: {
      backgroundColor: 'teal',
    }
  },
  methods: {
    newGame: function() {
      this.gameOver = false,
      this.playerHealth = 80,
      this.foeHealth = 75
    },
    updateHealth: function (value, event) {
      if (this.foeHealth > 0 && this.playerHealth > 0) {
        this.playerHealth -= getRandomIntInclusive(value, value * 3)
        this.logs.unshift('Player is hit')
        this.foeHealth -= getRandomIntInclusive(value, value * 4)
        this.logs.unshift("Let's defeat the monster !")
      } else {
        alert('Game Over')
        this.gameOver = true
        this.logs.unshift('Game is done')
      }
    },
    healPlayer: function (value) {
      if (this.playerHealth < 90) this.playerHealth += getRandomIntInclusive(value, value * 4)
      this.playerHealth -= getRandomIntInclusive(value, value * 3)
      this.logs.unshift('Player is desesperatly trying to heal himself while enemy is kicking his @$$')
    },
    giveUp: function() {
      alert('Loser !')
      this.playerHealth = 0,
      this.foeHealth = 100,
      this.gameOver = true,
      this.logs = []
    }
  }
})

function getRandomIntInclusive(min, max) {
  // this is not Vue :O !! I know... :3
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
