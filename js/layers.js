addLayer("doge", {
    name: "Dogecoins", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "D", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 0,
    startData() { return {
      unlocked: true,
  	  points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires(){
      let req = new Decimal(5)
      return req
    }, // Can be a function that takes requirement increases into account
    resource: "Dogecoins", // Name of prestige currency
    baseResource: "Wow", // Name of resource prestige is based on
    baseAmount(){
      return player.points
    }, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.75,
    upgrades: {
    rows: 2,
    cols: 5,
    11: {
      title: "Wow",
      description: "Generate 1 meme per second",
      cost: new Decimal(1),
      unlocked() {return player.doge.unlocked},
    },
    12: {
      title: "Very Wow",
      description: "Generate 2 memes per second",
      cost: new Decimal(5),
      unlocked() {return (hasUpgrade("doge", 11))},
    },
    13: {
      title: "Much Wow",
      description: "Generate 7 memes per second",
      cost: new Decimal(20),
      unlocked() {return (hasUpgrade("doge", 12))},
    },
  },
  layerShown(){return true}
})

addLayer("amogus", {
    name: "Among Us",
    symbol "A",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 1,
    startData() { return {
      unlocked: true,
  	  points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires(){
      let req = new Decimal(5)
      return req
    }, // Can be a function that takes requirement increases into account
    resource: "SusCoins", // Name of prestige currency
    baseResource: "Sus", // Name of resource prestige is based on
    baseAmount(){
      return player.points
    }, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.75,
    upgrades: {
    rows: 2,
    cols: 5,
    11: {
      title: "Wow",
      description: "Generate 1 meme per second",
      cost: new Decimal(1),
      unlocked() {return player.doge.unlocked},
    },
    12: {
      title: "Very Wow",
      description: "Generate 2 memes per second",
      cost: new Decimal(5),
      unlocked() {return (hasUpgrade("doge", 11))},
    },
    13: {
      title: "Much Wow",
      description: "Generate 7 memes per second",
      cost: new Decimal(20),
      unlocked() {return (hasUpgrade("doge", 12))},
    },
  },
  layerShown(){return true}
})
