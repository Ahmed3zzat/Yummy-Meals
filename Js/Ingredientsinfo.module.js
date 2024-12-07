import { MealsDetails } from "./mealDetail.module.js";
import { Ui } from "./ui.module.js";

export class IngredientsInfo{
    constructor(name){
        this.getIngredientsInfo(name)
        this.infoClass = document.querySelector(".info");
        this.ingredientsInfoClass = document.querySelector(".ingredients-info");
    }
    async getIngredientsInfo(name){
        let load = document.querySelector(".loading");
        load.classList.replace("d-none", "d-flex");
    
        let resposne = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`
        );
        let data = await resposne.json();
        let ui = new Ui();
        ui.IntegraidsInfoUi(data.meals)
        let categoryInfoClass = document.querySelectorAll(".ingredients-info .box");
        categoryInfoClass.forEach((current) => {
          current.addEventListener("click", (e) => {
            let id = e.currentTarget.querySelector("p").dataset.id;
            
            new MealsDetails(id);
            this.infoClass.classList.replace("d-none", "d-block");
            this.ingredientsInfoClass.classList.replace("d-block", "d-none");
          });
        });
        load.classList.replace("d-flex", "d-none");
    }
}