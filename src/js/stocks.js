import { getStocks, saveStocks } from "./storage.js";

export function renderStocks() {
    const stocksContainer = document.getElementById("stocksContainer");
    stocksContainer.innerHTML = "";

    const stocks = getStocks();

    stocks.forEach((stock, index) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("stocks-wrapper");

        wrapper.innerHTML = `
            <h1 class="stock-name">${stock.name}</h1>
            <p class="stock-quantity">Quantity: ${stock.quantity}</p>
            <input type="checkbox" data-index="${index}" class="checkbox">
        `;

        stocksContainer.appendChild(wrapper);
    });
}

export function addStock(name, quantity) {
  
    const stocks = getStocks();
    stocks.push({ name, quantity });
    saveStocks(stocks);
}

export function removeStocks(indexes) {
    const stocks = getStocks();

    const updated = stocks.filter((_, index) =>
        !indexes.includes(index)
    );

    saveStocks(updated);
}

export function updateStock(index, newName, newQuantity) {
    if (!newName || !newQuantity) return;

    const stocks = getStocks();
    stocks[index] = { name: newName, quantity: newQuantity };
    saveStocks(stocks);
}