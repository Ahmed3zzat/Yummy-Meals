import { AreaInfo } from "./areainfo.module.js";
import { Ui } from "./ui.module.js";

export class Area {
  constructor() {
    this.infoClass = document.querySelector(".info");
  }
  async getArea() {
    let load = document.querySelector(".loading");
    load.classList.replace("d-none", "d-flex");
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    let data = await response.json();
    let ui = new Ui();
    ui.areaUI(data.meals.slice(0, 20));

    let AreaInfoBox = document.querySelectorAll(".area .cart");
    AreaInfoBox.forEach(function (current) {
      current.addEventListener("click", (e) => {
        let AreaBoxH3 = e.currentTarget.querySelector("h3");
        let name = AreaBoxH3.dataset.name;
        new AreaInfo(name);
        let areaClass = document.querySelector("div#area");
        let areaInfoClass = document.querySelector(".area-info");
        areaClass.classList.replace("d-block", "d-none");
        areaInfoClass.classList.replace("d-none", "d-block");
      });
    });

    load.classList.replace("d-flex", "d-none");
  }
}
