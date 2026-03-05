import {
    renderStocks,
    addStock,
    removeStocks,
    updateStock
} from "./stocks.js";

document.addEventListener("DOMContentLoaded", () => {
    renderStocks();
});

document.getElementById("add").addEventListener("click", () => {
    document.getElementById("myForm").style.display = "flex";
});

document.getElementById("submit").addEventListener("click", () => {
    const name = document.getElementById("productName").value;
    const quantity = document.getElementById("productQuantity").value;

    if (!name || !quantity) {
        alert("Please fill in all fields");
        return;
    }

    addStock(name, quantity);
    renderStocks();
});

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("myForm").style.display = "none";
});

document.getElementById("remove").addEventListener("click", () => {
    const checkedBoxes = document.querySelectorAll(
        "#stocksContainer input[type='checkbox']:checked"
    );
    
    if (!checkedBoxes.length>=1) {
        alert("Please select ONE or MORE items to delete");
        return;
    } else {
        document.getElementById("removeContainer").style.display = "flex";
        if (checkedBoxes.length === 1) {
                document.getElementById("txtRemove").textContent = `Are you sure you want to delete the selected item?`;
        } else {
            document.getElementById("txtRemove").textContent = `Are you sure you want to delete the selected items?`;
        }
        document.getElementById("yes").addEventListener("click", () => {

            const indexes = Array.from(checkedBoxes).map(box =>
                Number(box.dataset.index)
            );

            removeStocks(indexes);
            renderStocks();
            document.getElementById("removeContainer").style.display = "none";

        });
    }

    
});



document.getElementById("no").addEventListener("click", () => {
    removeContainer.addEventListener("submit", (e) => {
        e.preventDefault();
    })
    removeContainer = document.getElementById("removeContainer").style.display = "none";
}); 

let selectedIndex = null;

document.getElementById("edit").addEventListener("click", () => {
    const checkedBoxes = document.querySelectorAll(
        "#stocksContainer input[type='checkbox']:checked"
    );

    if (checkedBoxes.length !== 1) {
        alert("Please select exactly ONE item to edit");
        return;
    }

    selectedIndex = Number(checkedBoxes[0].dataset.index);
    document.getElementById("editContainer").style.display = "flex";
});

document.getElementById("editClose").addEventListener("click", () => {
    document.getElementById("editContainer").style.display = "none";
});

document.getElementById("updateSubmit").addEventListener("click", () => {
    const newName = document.getElementById("editProductName").value;
    const newQuantity = document.getElementById("editProductQuantity").value;

    updateStock(selectedIndex, newName, newQuantity);
    renderStocks();

    document.getElementById("editContainer").style.display = "none";
});