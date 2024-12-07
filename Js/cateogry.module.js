import { CategoryInfo } from "./categoryInfo.module.js";
import { Ui } from "./ui.module.js";

export class Category {
  constructor() {

  }
  async getCategorise() {
    let load = document.querySelector(".loading");
    load.classList.replace("d-none", "d-flex");
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    let data = await response.json();
    let ui = new Ui();
    ui.categoryUI(data.categories);

    let CategoryInfoBox = document.querySelectorAll(".category .cart");
    CategoryInfoBox.forEach(function (current) {
      current.addEventListener("click", (e) => {
        let CategoryBoxH3 = e.currentTarget.querySelector("h3");
        let name =  CategoryBoxH3.dataset.name;
        new CategoryInfo(name);
        let  categoryClass = document.querySelector("div#category");
        let categoryInfoClass = document.querySelector(".category-info");
        categoryClass.classList.replace("d-block", "d-none")
        categoryInfoClass.classList.replace("d-none", "d-block")
      });
    });

    load.classList.replace("d-flex", "d-none");
  }
}
