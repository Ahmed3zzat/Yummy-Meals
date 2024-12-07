import { Category } from "./cateogry.module.js";
import { Area } from "./area.module.js";
import { Ingredients } from "./Ingredients.module.js";
import { Ui } from "./ui.module.js";
import { slideNAv } from "./main.js";
import { MealsDetails } from "./mealDetail.module.js";
import { Search } from "./search.module.js";
import { Contact } from "./contact.module.js";

export class Home {
  constructor() {
    this.getDataHome("");

    // start Inputs
    this.rowInput = document.querySelector(".rowInput");
    this.ButtonValid = document.querySelector("#vaildBtn");

    this.nameInput = document.querySelector("#inputName");
    this.phoneInput = document.querySelector("#inputPhone");
    this.ageInput = document.querySelector("#inputAge");
    this.emailInput = document.querySelector("#inputEmail");
    this.passwordInput = document.querySelector("#inputPassword");
    this.rePasswordInput = document.querySelector("#inputRePassword");

    // end Inputs

    // classes
    this.homeClass = document.querySelector("div#home");
    this.infoClass = document.querySelector(".info");

    this.searchClass = document.querySelector("div#search");
    this.categoryClass = document.querySelector("div#category");
    this.areaClass = document.querySelector("div#area");
    this.ingredientsClass = document.querySelector("div#ingredients");
    this.searchClass = document.querySelector("div#search");

    this.contactClass = document.querySelector("div#contact");
    this.categoryInfoClass = document.querySelector(".category-info");
    this.areaInfoClass = document.querySelector(".area-info");
    this.ingredientsInfoClass = document.querySelector(".ingredients-info");
    this.contact = document.querySelector(".contact#contact");

    // classes

    let listNavClick = document.querySelectorAll(".navbar ul li p");

    for (const element of listNavClick) {
      element.addEventListener("click", (e) => {
        if (e.target == element) {
          slideNAv();
          // start display category
          if (e.target.dataset.nameBtn == "category") {
            let category = new Category();
            category.getCategorise();
            this.searchClass.classList.replace("d-block", "d-none");
            this.areaClass.classList.replace("d-block", "d-none");
            this.ingredientsClass.classList.replace("d-block", "d-none");
            this.contactClass.classList.replace("d-block", "d-none");
            this.homeClass.classList.replace("d-block", "d-none");
            this.categoryInfoClass.classList.replace("d-block", "d-none");
            this.infoClass.classList.replace("d-block", "d-none");
            this.searchClass.classList.replace("d-block", "d-none");

            this.areaInfoClass.classList.replace("d-block", "d-none");
            this.ingredientsInfoClass.classList.replace("d-block", "d-none");

            this.categoryClass.classList.replace("d-none", "d-block");
          }
          // end display category

          // start display area
          else if (e.target.dataset.nameBtn == "area") {
            let area = new Area();
            area.getArea();
            this.homeClass.classList.replace("d-block", "d-none");
            this.categoryClass.classList.replace("d-block", "d-none");
            this.searchClass.classList.replace("d-block", "d-none");
            this.ingredientsClass.classList.replace("d-block", "d-none");
            this.contactClass.classList.replace("d-block", "d-none");
            this.categoryInfoClass.classList.replace("d-block", "d-none");
            this.infoClass.classList.replace("d-block", "d-none");
            this.infoClass.classList.replace("d-block", "d-none");
            this.searchClass.classList.replace("d-block", "d-none");

            this.areaInfoClass.classList.replace("d-block", "d-none");
            this.ingredientsInfoClass.classList.replace("d-block", "d-none");

            this.areaClass.classList.replace("d-none", "d-block");
          }
          // end display area

          //start display ingediants
          else if (e.target.dataset.nameBtn == "ingredient") {
            let ingredients = new Ingredients();
            ingredients.getIngredients();
            this.homeClass.classList.replace("d-block", "d-none");
            this.categoryClass.classList.replace("d-block", "d-none");
            this.searchClass.classList.replace("d-block", "d-none");
            this.areaClass.classList.replace("d-block", "d-none");
            this.contactClass.classList.replace("d-block", "d-none");
            this.ingredientsInfoClass.classList.replace("d-block", "d-none");
            this.infoClass.classList.replace("d-block", "d-none");
            this.searchClass.classList.replace("d-block", "d-none");

            this.categoryInfoClass.classList.replace("d-block", "d-none");
            this.areaInfoClass.classList.replace("d-block", "d-none");

            this.ingredientsClass.classList.replace("d-none", "d-block");
          }
          // end display ingediants

          //start display search
          else if (e.target.dataset.nameBtn == "search") {
            let valeName = document.querySelector("#searchByName");
            let valeChar = document.querySelector("#searchByLetter");

            let search = new Search();
            // if (valeChar.value == null) {
            //   search.getDataSearchChar("s")
            //   console.log("ahmed");
              
            // }
            valeName.addEventListener("keyup", (e) => {
              search.getDataSearchName(e.target.value);
            });
            valeChar.addEventListener("keyup", (e) => {
              search.getDataSearchName(e.target.value.slice(0, 1));
            });

            this.homeClass.classList.replace("d-block", "d-none");
            this.categoryClass.classList.replace("d-block", "d-none");
            this.searchClass.classList.replace("d-block", "d-none");
            this.areaClass.classList.replace("d-block", "d-none");
            this.contactClass.classList.replace("d-block", "d-none");
            this.ingredientsInfoClass.classList.replace("d-block", "d-none");
            this.infoClass.classList.replace("d-block", "d-none");
            this.categoryInfoClass.classList.replace("d-block", "d-none");
            this.areaInfoClass.classList.replace("d-block", "d-none");
            this.ingredientsInfoClass.classList.replace("d-block", "d-none");
            this.ingredientsClass.classList.replace("d-block", "d-none");

            this.searchClass.classList.replace("d-none", "d-block");
          }
          // end display search
          else if (e.target.dataset.nameBtn == "contact") {
            this.homeClass.classList.replace("d-block", "d-none");
            this.categoryClass.classList.replace("d-block", "d-none");
            this.searchClass.classList.replace("d-block", "d-none");
            this.areaClass.classList.replace("d-block", "d-none");
            this.contactClass.classList.replace("d-block", "d-none");
            this.ingredientsInfoClass.classList.replace("d-block", "d-none");
            this.infoClass.classList.replace("d-block", "d-none");
            this.categoryInfoClass.classList.replace("d-block", "d-none");
            this.areaInfoClass.classList.replace("d-block", "d-none");
            this.ingredientsInfoClass.classList.replace("d-block", "d-none");
            this.ingredientsClass.classList.replace("d-block", "d-none");
            this.searchClass.classList.replace("d-block", "d-none");

            this.rowInput = document.querySelector(".rowInput");
            this.ButtonValid = document.querySelector("#vaildBtn");

            this.nameInput = document.querySelector("#inputName");
            this.phoneInput = document.querySelector("#inputPhone");
            this.ageInput = document.querySelector("#inputAge");
            this.emailInput = document.querySelector("#inputEmail");
            this.passwordInput = document.querySelector("#inputPassword");
            this.rePasswordInput = document.querySelector("#inputRePassword");

            let contact = new Contact();

            this.rowInput.addEventListener("keyup", (e) => {
              const allValid =
                contact.isValid(this.nameInput, contact.regxName) &
                contact.isValid(this.passwordInput, contact.regxPassword) &
                contact.isValid(this.rePasswordInput, contact.regxPassword) &
                contact.isValid(this.ageInput, contact.regxAge) &
                contact.isValid(this.phoneInput, contact.regxPhone) &
                contact.isValid(this.emailInput, contact.regxEmail);

              if (allValid) {
                if (this.passwordInput.value === this.rePasswordInput.value) {
                  this.ButtonValid.removeAttribute("disabled");
                } else {
                  this.ButtonValid.setAttribute("disabled", "true");
                  alert("Password and Re-password must match.");
                }
              } else {
                this.ButtonValid.setAttribute("disabled", "true");
              }
            });

            [this.passwordInput, this.rePasswordInput].forEach((current) => {
              current.addEventListener("blur", () => {
                contact.isValid(current, contact.regxPassword);
              });

              current.addEventListener("focus", () => {
                current.nextElementSibling.classList.replace(
                  "d-block",
                  "d-none"
                );
              });
            });
            this.contact.classList.replace("d-none", "d-block");
          }
        }
      });
    }
  }
  async getDataHome(ele) {
    let load = document.querySelector(".loading");
    load.classList.replace("d-none", "d-flex");
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${ele}`
    );
    let data = await response.json();
    let ui = new Ui();
    ui.homeUI(data.meals);
    this.homeClassBox = document.querySelectorAll("div#home .box");
    this.homeClassBox.forEach((current) => {
      current.addEventListener("click", (e) => {
        let idBox = e.currentTarget.querySelector("p").dataset.id;
        new MealsDetails(idBox);

        // mealsDetails.getMealsDetailsApi()
        this.homeClass.classList.replace("d-block", "d-none");
        this.infoClass.classList.replace("d-none", "d-block");
      });
    });
    load.classList.replace("d-flex", "d-none");
  }
}
