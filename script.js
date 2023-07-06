const initialPrice = document.querySelector("#initial-price");
const stockQty = document.querySelector("#quantity");
const Price = document.querySelector("#price");
const outputEl = document.querySelector("#output");
const submitBtn = document.querySelector("#submit-btn");

function calculateProfitandLoss(initialP, qty, price) {
  if (initialP > price) {
    let loss = (initialP - price) * qty;
    let lossPercentage = (loss / initialP) * 100;
    outputEl.style.color = "red";
    outputEl.style.backgroundColor = "cyan";

    showOutput(`loss is ${loss} and percentage is ${lossPercentage}`);
  } else if (price > initialP) {
    let profit = (price - initialP) * qty;
    let profitPercentage = (profit / initialP) * 100;
    outputEl.style.color = "green";
    outputEl.style.backgroundColor = "cyan";

    showOutput(`profit is ${profit} and profit % is ${profitPercentage}`);
  } else {
    outputEl.style.color = "orange";
    outputEl.style.backgroundColor = "cyan";

    showOutput(`No profit no gain 🙃`);
  }
}
//calculateProfitandLoss(100, 10, 10);

function submitHandler() {
  const ip = initialPrice.value;
  const sqty = stockQty.value;
  const currentprice = Price.value;

  calculateProfitandLoss(ip, sqty, currentprice);
}

function showOutput(message, status) {
  // switch (status) {
  //     case "PROFIT":
  //         outputEl.innerHTML = message
  //         break;
  // case "LOSS":
  //     outputEl.innerHTML= message

  //     default:
  //         break;
  // }

  outputEl.innerHTML = message;
}

submitBtn.addEventListener("click", submitHandler);
