import GameServices from "../Services/GameServices.js";

//PRIVATE
let _gameServices = new GameServices();

//get target data from service
//draw mood, health, hits, and name from target on screen
//get elements in html to draw to

function _draw() {
  let nameElement = document.querySelector("#name-holder");
  let moodElement = document.querySelector("#mood-level");
  let healthElement = document.querySelector("#health-level");
  let drinksElement = document.querySelector("#Drinks");
  let player = _gameServices.Target;

  nameElement.textContent = `Name: ${player.name}`;
  moodElement.textContent = `Mood: ${player.moodScore.toString()}`;
  healthElement.textContent = `Health ${player.healthScore.toString()}`;
  drinksElement.textContent = `Number of Drinks ${player.hits.toString()}`;

}


// PUBLIC

export default class GameController {
  constructor() {

    console.log("Hola, from the Game Controller!")
    _draw();

  }

  //let the service know the user wants to give target a glass of wine

  hit() {
    _gameServices.hit();
    _draw();
  }

}