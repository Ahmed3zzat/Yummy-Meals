import { IngredientsInfo } from "./Ingredientsinfo.module.js";
import { Ui } from "./ui.module.js";
export class Ingredients {
  constructor() {}
  async getIngredients() {
    let load = document.querySelector(".loading");
    load.classList.replace("d-none", "d-flex");
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    let data = await response.json();
    let ui = new Ui();
    ui.ingredientUI(data.meals.slice(0, 20));

    let ingredientsInfoBox = document.querySelectorAll(".ingredients .cart");
    ingredientsInfoBox.forEach(function (current) {
      current.addEventListener("click", (e) => {
        let ingredientsBoxH3 = e.currentTarget.querySelector("h3");
        let name =  ingredientsBoxH3.dataset.name;
        new IngredientsInfo(name);
        let  IngredientsClass = document.querySelector("div#ingredients");
        let IngredientsInfoClass = document.querySelector(".ingredients-info");
        IngredientsClass.classList.replace("d-block", "d-none")
        IngredientsInfoClass.classList.replace("d-none", "d-block")
      });
    });

    load.classList.replace("d-flex", "d-none");
  }
}
