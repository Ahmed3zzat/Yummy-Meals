import { MealsDetails } from "./mealDetail.module.js";
import { Ui } from "./ui.module.js";
export class CategoryInfo {
  constructor(name) {
    this.getCategoryInfo(name);
    this.infoClass = document.querySelector(".info");
    this.categoryInfoClass = document.querySelector(".category-info");
  }

  async getCategoryInfo(name) {
    let load = document.querySelector(".loading");
    load.classList.replace("d-none", "d-flex");

    let resposne = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
    );
    let data = await resposne.json();
    let catInfo = new Ui();
    catInfo.categoryInfoUi(data.meals);
    
    let categoryInfoClass = document.querySelectorAll(".category-info .box");
    categoryInfoClass.forEach((current) => {
      current.addEventListener("click", (e) => {
        let id = e.currentTarget.querySelector("p").dataset.id;
        new MealsDetails(id);
        this.infoClass.classList.replace("d-none", "d-block");
        this.categoryInfoClass.classList.replace("d-block", "d-none");
      });
    });
    load.classList.replace("d-flex", "d-none");
  }
}
