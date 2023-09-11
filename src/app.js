/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const allSuits = ["♦", "♥", "♠", "♣"];
  const allValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  var cardClass = "heart";
  var cardSuit = "♥";
  var cardValue = "K";

  function cardGenerator() {
    const randSuit = function() {
      return Math.floor(Math.random() * 4);
    };

    const randValue = function() {
      return Math.floor(Math.random() * 13);
    };

    cardSuit = allSuits[randSuit()];

    cardValue = allValues[randValue()];

    const card = document.querySelector(".card");

    if (cardSuit == "♦") {
      card.classList.remove(cardClass);
      cardClass = "diamond";
      card.classList.add(cardClass);
    } else if (cardSuit == "♥") {
      card.classList.remove(cardClass);
      cardClass = "heart";
      card.classList.add(cardClass);
    } else if (cardSuit == "♠") {
      card.classList.remove(cardClass);
      cardClass = "spade";
      card.classList.add(cardClass);
    } else if (cardSuit == "♣") {
      card.classList.remove(cardClass);
      cardClass = "club";
      card.classList.add(cardClass);
    }
    const suitClass = document.getElementsByClassName("suit");
    for (let elm of suitClass) {
      elm.innerHTML = cardSuit;
    }
    const value = document.querySelector(".value");
    value.innerHTML = cardValue;
  }
  setInterval(cardGenerator, 5000);
};
