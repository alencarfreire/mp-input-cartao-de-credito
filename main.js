import "./style.css";

function formatCardNumber(string) {
  const sanitizedString = string.replace(/[^0-9]/g, "");
  if (sanitizedString) {
    const fourNumbers = sanitizedString.match(/.{1,4}/g);
    return fourNumbers.join(" ");
  }
  return "";
}

// Form Itens
const ccNumberInput = document.querySelector("#cc-number");
const ccNameInput = document.querySelector("#cc-name");
const ccExpMonth = document.querySelector("#cc-exp-month");
const ccExpYear = document.querySelector("#cc-exp-year");
const ccCVV = document.querySelector("#cc-cvv");

// Card Itens
const cardNumber = document.querySelector(".card-number");
const cardName = document.querySelector(".card-name");
const cardExpMonth = document.querySelector(".card-exp-month");
const cardExpYear = document.querySelector(".card-exp-year");

// Form Event Listeners
ccNumberInput.addEventListener("input", (e) => {
  const numberResult = formatCardNumber(e.target.value);
  ccNumberInput.value = numberResult;
  numberResult || "#### #### #### ####";
});

ccNameInput.addEventListener("input", (e) => {
  cardName.textContent = ccNameInput.value || "Seu nome";
});

ccExpMonth.addEventListener("input", (e) => {
  cardExpMonth.textContent = ccExpMonth.value || "mm";
});

ccExpYear.addEventListener("input", (e) => {
  cardExpYear.textContent = ccExpYear.value || "aa";
});

