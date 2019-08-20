

import GameController from "./Controllers/GameController.js";




// app definition and main entry point
class app {
  constructor() {
    console.log("Main app created");
    this.controllers = {
      gameController: new GameController()
    }
  }

}


window["app"] = new app();