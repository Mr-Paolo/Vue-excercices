const app = {
  data() {
    return {
      secret: Math.random() * 10,
      guess: 0,
      oldGuesses: []
    }
  }
}

Vue.createApp(app).mount('.app')