import { MealsDetails } from "./mealDetail.module.js";
import { Ui } from "./ui.module.js";

export class Search {
  constructor() {
    this.valeName = document.querySelector("#searchByName");
    this.infoClass = document.querySelector(".info");
    this.searchClass = document.querySelector(".search#search");
  }
  async getDataSearchName(term) {
    let load = document.querySelector(".loading");
    load.classList.replace("d-none", "d-flex");

    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    );
    let data = await response.json();
    let ui = new Ui();

    // Because render
    if (data.meals) {
      ui.searchUi(data.meals);
    } else {
      ui.searchUi([]);
    }

    let BoxSearch = document.querySelectorAll(".search .row:last-child .box");
    BoxSearch.forEach((current) => {
      current.addEventListener("click", (e) => {
        let pID = e.currentTarget.querySelector("p");
        let id = pID.dataset.id;
        new MealsDetails(id);
        this.searchClass.classList.replace("d-block", "d-none");
        this.infoClass.classList.replace("d-none", "d-block");
      });
    });

    load.classList.replace("d-flex", "d-none");
  }

  async getDataSearchChar(term) {
      let load = document.querySelector(".loading");
      load.classList.replace("d-none", "d-flex");
      
      let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`
    );
    let data = await response.json();
    let ui = new Ui();
    ui.searchUi(data.meals);
    
    // Because render
    if (data.meals) {
        ui.searchUi(data.meals);
    } else {
        ui.searchUi([]);
    }

    let BoxSearch = document.querySelectorAll(".search .row:last-child .box");
    BoxSearch.forEach((current) => {
      current.addEventListener("click", (e) => {
        let pID = e.currentTarget.querySelector("p");
        let id = pID.dataset.id;
        new MealsDetails(id);
        this.searchClass.classList.replace("d-block", "d-none");
        this.infoClass.classList.replace("d-none", "d-block");
      });
    });

    load.classList.replace("d-flex", "d-none");
  }
}
