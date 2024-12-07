import { MealsDetails } from "./mealDetail.module.js";
import { Ui } from "./ui.module.js";
export class AreaInfo {
  constructor(name) {
    this.getAreaInfo(name);
    this.infoClass = document.querySelector(".info");
    this.areaInfoClass = document.querySelector(".area-info");
  }

  async getAreaInfo(name) {
    let load = document.querySelector(".loading");
    load.classList.replace("d-none", "d-flex");

    let resposne = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
    );
    let data = await resposne.json();
    let areaInfo = new Ui();
    areaInfo.AreaInfoUi(data.meals);

    let areaInfoClass = document.querySelectorAll(".area-info .box");
    areaInfoClass.forEach((current) => {
      current.addEventListener("click", (e) => {
        let id = e.currentTarget.querySelector("p").dataset.id;
        new MealsDetails(id);
        this.infoClass.classList.replace("d-none", "d-block");
        this.areaInfoClass.classList.replace("d-block", "d-none");
      });
    });
    load.classList.replace("d-flex", "d-none");
  }
}
