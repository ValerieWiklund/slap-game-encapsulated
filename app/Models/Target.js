//create a target for the game


export default class Target {
  constructor(name) {
    console.log("target created");
    this.name = name;
    this.healthScore = 100;
    this.moodScore = 0;
    this.hits = 0;
  }
}