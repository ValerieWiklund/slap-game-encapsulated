import Target from "../Models/Target.js";


let _target = new Target("Stressed Out Stella");


export default class GameServices {
  constructor() {

    console.log('Hello from Game Services');


  }

  //add to the hit count and the mood count
  hit() {
    _target.moodScore++;
    _target.hits++;
    _target.healthScore -= 2;
  }

  get Target() {
    return _target
  }


}