var player = new Vue({
  el: '#player',
  data: {
    playerProgressBar: {
      backgroundColor: 'teal',
      width: '70%'
    }
  }
})

var foe = new Vue({
  el: '#foe',
  data: {
    foeProgressBar: {
      backgroundColor: 'red',
      width: '30%'
    }
  }
})
