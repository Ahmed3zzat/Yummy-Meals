import { Ui } from "./ui.module.js";

export class MealsDetails {
  constructor(id) {
    this.getMealsDetailsApi(id);

  }
  async getMealsDetailsApi(id) {

    let load = document.querySelector(".loading");
    load.classList.replace("d-none", "d-flex");
    let respons = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    let data = await respons.json();
    let ui = new Ui();
    ui.getDetailsMeal(data.meals);
    load.classList.replace("d-flex", "d-none");
  }
}




