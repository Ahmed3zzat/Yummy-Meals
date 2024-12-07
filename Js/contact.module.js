export class Contact {
  constructor() {
    this.regxName = /^[a-zA-z].+$/;
    this.regxEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    this.regxPhone = /^01(0|1|2|5)[0-9]{8}$/;
    this.regxAge = /^\d.?$/;
    this.regxPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  }
  isValid(inputElement, REGX) {
    if (REGX.test(inputElement.value)) {
      inputElement.nextElementSibling.classList.replace("d-block", "d-none");
      inputElement.classList.add("is-valid");
      inputElement.classList.remove("is-invalid");
      return true;
    } else if (inputElement === document.activeElement) {
      // Show error only if input is focused
      inputElement.nextElementSibling.classList.replace("d-none", "d-block");
      inputElement.classList.remove("is-valid");
      inputElement.classList.add("is-invalid");
    }
    return false;
  }
}
