import { getStocks } from "./storage.js";

export function renderTransactions() {
    const transactionHistoryContainer = document.getElementById("transactionHistory");
    transactionHistoryContainer.innerHTML = "";

    const stocks = getStocks();
    stocks.forEach((stock) => {
        const container = document.createElement("div");
        container.classList.add("transactions-container");

    

        container.innerHTML =`
            <h1 class="transaction-type">${stock.type}</h1>
            <div class="transactions-wrapper">
                <div class="transactionName-quantity">
                    <h3 class="transaction-name">${stock.name}</h3>
                    <p class="transaction-quantity">Quantity: ${stock.quantity}</p>
                </div>
                <div class="transaction-date-time">${stock.date}</div>
            </div>
        `
        transactionHistoryContainer.appendChild(container);
    })
    
}