const initialTotal = 1299;

let memory8Gb = document.getElementById("btnradio1").addEventListener('click', function () {
    let extraMemCost = document.getElementById("extra-memory-cost");
    let prevExtraMemCost = extraMemCost.innerText;
    let newExtraMemCost = parseFloat(prevExtraMemCost) * 0;

    let totalPrice = document.getElementById("total-price");
    let totalPriceCostText = totalPrice.innerText;
    let totalPriceCostNumber = parseFloat(totalPriceCostText);

    let prevExtraStorageCost = document.getElementById("extra-storage-cost");
    let prevExtraStorageCostText = prevExtraStorageCost.innerText;
    let prevExtraStorageCostNumber = parseFloat(prevExtraStorageCostText);

    let prevExtraDeliveryCost = document.getElementById("delivery-charge");
    let prevExtraDeliveryCostText = prevExtraDeliveryCost.innerText;
    let prevExtraDeliveryCostNumber = parseFloat(prevExtraDeliveryCostText);

    if (newExtraMemCost == 0) {
        extraMemCost.innerText = newExtraMemCost;
        let newTotalPriceCostNumber = initialTotal + newExtraMemCost + prevExtraStorageCostNumber + prevExtraDeliveryCostNumber;
        totalPrice.innerText = newTotalPriceCostNumber;

    }

});




let memory16Gb = document.getElementById("btnradio2").addEventListener('click', function () {

    let extraMemCost = document.getElementById("extra-memory-cost");
    let prevExtraMemCost = extraMemCost.innerText;
    let newExtraMemCost = parseFloat(prevExtraMemCost) + 180;

    let totalPrice = document.getElementById("total-price");
    let totalPriceCostText = totalPrice.innerText;
    let totalPriceCostNumber = parseFloat(totalPriceCostText);

    let prevExtraStorageCost = document.getElementById("extra-storage-cost");
    let prevExtraStorageCostText = prevExtraStorageCost.innerText;
    let prevExtraStorageCostNumber = parseFloat(prevExtraStorageCostText);

    let prevExtraDeliveryCost = document.getElementById("delivery-charge");
    let prevExtraDeliveryCostText = prevExtraDeliveryCost.innerText;
    let prevExtraDeliveryCostNumber = parseFloat(prevExtraDeliveryCostText);

    if (newExtraMemCost == 180) {
        extraMemCost.innerText = newExtraMemCost;
        let newTotalPriceCostNumber = initialTotal + newExtraMemCost + prevExtraStorageCostNumber + prevExtraDeliveryCostNumber;
        totalPrice.innerText = newTotalPriceCostNumber;

    }

});




