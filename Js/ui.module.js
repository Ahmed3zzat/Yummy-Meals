export class Ui {
  constructor() {
    this.rowHome = document.querySelector(".home .row");
    this.rowCategory = document.querySelector(".category .row");
    this.rowCategoryIfo = document.querySelector(".category-info .row");
    this.rowAriaIfo = document.querySelector(".area-info .row");
    this.rowIngdr = document.querySelector(".ingredients .row");
    this.rowIngdrInfo = document.querySelector(".ingredients-info .row");
    this.rowArea = document.querySelector(".area .row");
    this.rowInfoMeal = document.querySelector(".info .row");
    this.rowSearch = document.querySelector(".search .row:last-child");
  }
  homeUI(data) {
    let str = "";
    for (let i = 0; i < data.length; i++) {
      str += `<div class="col-sm-12 col-md-3">
                    <div class="box position-relative overflow-hidden rounded-3 cursor-pointer">
                        <div class="image">
                            <img class="w-100 rounded-3" src=${data[i].strMealThumb} alt="">
                        </div>
                        <div
                            class="overlay px-2 d-flex align-items-center position-absolute bg-light bottom-0 start-0 end-0 bg-opacity-75">
                            <p class="fw-bold" data-id = "${data[i].idMeal}">${data[i].strMeal}</p>
                        </div>
                    </div>
                </div>`;
    }
    this.rowHome.innerHTML = str;
  }

  categoryUI(data) {
    let str = "";
    for (let i = 0; i < data.length; i++) {
      str += `  <div class="col-sm-12 col-md-3">
                    <div class="cart cart-click cursor-pointer position-relative overflow-hidden p-4 text-center">
                        <div class="image">
                            <img class="w-100" src=${
                              data[i].strCategoryThumb
                            } alt="">
                        </div>
                        <div class="overlay position-absolute start-0 end-0 bg-light bg-opacity-75 p-1">
                            <h3 class="fw-bold" data-name=${
                              data[i].strCategory
                            }>${data[i].strCategory}</h3>
                            <p>${data[i].strCategoryDescription
                              .split(" ")
                              .slice(0, 13)
                              .join(" ")}</p>
                        </div>
                    </div>
                </div>`;
    }
    this.rowCategory.innerHTML = str;
  }

  ingredientUI(data) {
    let str = "";
    for (let i = 0; i < data.length; i++) {
      str += `  <div class="col-md-3">
                    <div class="cart cart-cut text-white text-center rounded-2">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3 data-name = ${data[i].strIngredient}>${
        data[i].strIngredient
      }</h3>
                        <p>${data[i].strDescription
                          .split(" ")
                          .slice(0, 13)
                          .join(" ")}</p>
                    </div>
                </div>`;
    }
    this.rowIngdr.innerHTML = str;
  }

  areaUI(data) {
    let str = "";
    for (let i = 0; i < data.length; i++) {
      str += ` <div class="col-md-3">
                    <div class="cart text-white text-center rounded-2 overflow-hidden">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3 data-name = ${data[i].strArea}>${data[i].strArea}</h3>
                    </div>
                </div>
      `;
    }
    this.rowArea.innerHTML = str;
  }

  categoryInfoUi(data) {
    let str = "";
    for (let i = 0; i < data.length; i++) {
      str += `<div class="col-sm-12 col-md-3">
                    <div class="box position-relative overflow-hidden rounded-3 cursor-pointer">
                        <div class="image">
                            <img class="w-100 rounded-3" src=${data[i].strMealThumb} alt="">
                        </div>
                        <div
                            class="overlay px-2 d-flex align-items-center position-absolute bg-light bottom-0 start-0 end-0 bg-opacity-75">
                            <p class="fw-bold" data-id=${data[i].idMeal}>${data[i].strMeal}</p>
                        </div>
                    </div>
                </div>`;
    }
    this.rowCategoryIfo.innerHTML = str;
  }

  AreaInfoUi(data) {
    let str = "";
    for (let i = 0; i < data.length; i++) {
      str += `<div class="col-sm-12 col-md-3">
                    <div class="box position-relative overflow-hidden rounded-3 cursor-pointer">
                        <div class="image">
                            <img class="w-100 rounded-3" src=${data[i].strMealThumb} alt="">
                        </div>
                        <div
                            class="overlay px-2 d-flex align-items-center position-absolute bg-light bottom-0 start-0 end-0 bg-opacity-75">
                            <p class="fw-bold" data-id=${data[i].idMeal}>${data[i].strMeal}</p>
                        </div>
                    </div>
                </div>`;
    }
    this.rowAriaIfo.innerHTML = str;
  }

  IntegraidsInfoUi(data) {
    let str = "";
    for (let i = 0; i < data.length; i++) {
      str += `<div class="col-sm-12 col-md-3">
                    <div class="box position-relative overflow-hidden rounded-3 cursor-pointer">
                        <div class="image">
                            <img class="w-100 rounded-3" src=${data[i].strMealThumb} alt="">
                        </div>
                        <div
                            class="overlay px-2 d-flex align-items-center position-absolute bg-light bottom-0 start-0 end-0 bg-opacity-75">
                            <p class="fw-bold" data-id=${data[i].idMeal}>${data[i].strMeal}</p>
                        </div>
                    </div>
                </div>`;
    }
    this.rowIngdrInfo.innerHTML = str;
  }

  getDetailsMeal(data) {
    let ingredientsRecipe = ``;
    for (let i = 1; i <= 20; i++) {
      if (`${data[0][`strIngredient${i}`]}`) {
        ingredientsRecipe += `<p class="fw-bold fs-5 bg-info py-1 px-2 rounded-3"> ${
          data[0][`strMeasure${i}`]
        } ${data[0][`strIngredient${i}`]}</p>`;
      }
    }
    let tagName = data[0].strTags;
    let tagCont = ``;

    if (tagName) {
      let len = tagName.split(",");
      for (let i = 0; i < len.length; i++) {
        tagCont += `<p class="fw-bold fs-5 bg-danger py-1 px-2 rounded-3">${len[i]}</p>`;
      }
    }

    for (let i = 1; i < data.length; i++) {}
    let str = "";
    str += ` <div class="col-md-4 text-white">
                    <div class="box ">
                          
                        <div class="image">
                            <img class="w-100" src="${data[0].strMealThumb}" alt="meal">
                        </div>
                        <h2 class="mt-2">${data[0].strMeal}</h2>
                    </div>
                </div>
                <div class="col-md-8 text-white">
                    <div class="box">
                        <h3>Instructions</h3>
                        <p>${data[0].strInstructions}</p>
                        <ul class="list-unstyled">
                            <li class="d-flex gap-2 align-items-baseline">
                                <h3>Area : ${data[0].strArea}</h3>
                                <p class="fw-bold fs-5">Turkish</p>
                            </li>
                            <li class="d-flex gap-2 align-items-baseline">
                                <h3>Category : ${data[0].strCategory}</h3>
                                <p class="fw-bold fs-5">Side</p>
                            </li>
                            <li class="d-flex flex-wrap gap-2 align-items-baseline">
                                <h3>Recipes : </h3>
                                ${ingredientsRecipe}
                            </li>
                            <li class="d-flex flex-wrap gap-2 align-items-baseline">
                                <h3>Tags : </h3>
                                ${tagCont}
                            </li>
                            <li class="d-flex gap-2 align-items-baseline mt-2">
                                <a href="${data[0].strSource}" target="_blank" class="btn btn-success list-unstyled">Source</a>
                                <a href="${data[0].strYoutube}" target="_blank"  class="btn btn-danger list-unstyled">Youtube</a>
                            </li>
                        </ul>
                    </div>
                </div>
      `;
    this.rowInfoMeal.innerHTML = str;
  }

  searchUi(data) {
    let str = ``;
    for (let i = 0; i < data.length; i++) {
      str += `           <div class="col-sm-12 col-md-3">
                    <div class="box position-relative overflow-hidden rounded-3 cursor-pointer">
                        <div class="image">
                            <img class="w-100 rounded-3" src="${data[i].strMealThumb}" alt="">
                        </div>
                        <div
                            class="overlay px-2 d-flex align-items-center position-absolute bg-light bottom-0 start-0 end-0 bg-opacity-75">
                            <p class="fw-bold" data-id = "${data[i].idMeal}">${data[i].strMeal}</p>
                        </div>
                    </div>
                </div>
      `;
    }
    this.rowSearch.innerHTML = str;
  }
}
