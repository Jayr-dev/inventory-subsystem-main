const STORAGE_KEY = "stocks";

export function getStocks() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveStocks(stocks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stocks));
}