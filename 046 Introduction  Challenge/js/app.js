var vm = new Vue({
  el: '#app',
  data: {
    playerHealth: 80,
    foeHealth: 75,
    gameOver: false,
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
        this.playerHealth = this.playerHealth - getRandomIntInclusive(value, value * 3)
        this.foeHealth = this.foeHealth - getRandomIntInclusive(value, value * 4)
      } else {
        alert('Game Over')
        this.gameOver = true
      }
    },
    healPlayer: function (value) {
      this.playerHealth = this.playerHealth - getRandomIntInclusive(value, value * 3)
      this.playerHealth = this.playerHealth + getRandomIntInclusive(value, value * 4)
    },
    giveUp: function() {
      alert('Loser !')
      this.playerHealth = 0,
      this.foeHealth = 100,
      this.gameOver = true
    }
  }
})

function getRandomIntInclusive(min, max) {
  // this is not Vue :O !! I know... :3
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
