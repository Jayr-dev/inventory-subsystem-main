import { addStock } from "../../src/js/stocks.js";
import { getStocks } from "../../src/js/storage.js";

describe("test suite: Add Stocks", () => {
    beforeEach(() => {

        while (getStocks().length) {
            getStocks().pop();
        }
    });

    it('adds stock to the storage', () => {
        addStock("Apple", 10, "2024-06-01", "Added");
        const stocks = getStocks();
        expect(stocks).toEqual([{ name: "Apple", quantity: 10, date: "2024-06-01", type: "Added" }]);
    });
});