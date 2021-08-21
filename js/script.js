const initialTotal = 1299;
const initialExtraMemoryCost = 0;
const initialStorageMemoryCost = 0;
const initialDeliveryCost = 0;


let memory8Gb = document.getElementById("btnradio1").addEventListener('click', function () {
    let extraMemCost = document.getElementById("extra-memory-cost");
    let prevExtraMemCostText = extraMemCost.innerText;
    let newExtraMemCostNumber = parseFloat(prevExtraMemCostText) * 0;


    let extraStorageCost = document.getElementById("extra-storage-cost");
    let prevExtraStorageCostText = extraStorageCost.innerText;
    let newExtraStorageCostNumber = parseFloat(prevExtraStorageCostText);

    let extraDeliveryCost = document.getElementById("delivery-charge");
    let prevExtraDeliveryCostText = extraDeliveryCost.innerText;
    let newExtraDeliveryCostNumber = parseFloat(prevExtraDeliveryCostText);

    let totalPrice = document.getElementById("total-price");
    let totalPriceCostText = totalPrice.innerText;
    let totalPriceCostNumber = parseFloat(totalPriceCostText);

    let finalTotalPrice = document.getElementById("final-total");

    if (newExtraMemCostNumber == 0) {
        extraMemCost.innerText = newExtraMemCostNumber;
        let newTotalPriceCostNumber = initialTotal + newExtraMemCostNumber + newExtraStorageCostNumber + newExtraDeliveryCostNumber;
        totalPrice.innerText = newTotalPriceCostNumber;
        finalTotalPrice.innerText = newTotalPriceCostNumber;

    }

});




let memory16Gb = document.getElementById("btnradio2").addEventListener('click', function () {

    let extraMemCost = document.getElementById("extra-memory-cost");
    let prevExtraMemCostText = extraMemCost.innerText;
    let newExtraMemCostNumber = parseFloat(prevExtraMemCostText) + 180;


    let extraStorageCost = document.getElementById("extra-storage-cost");
    let prevExtraStorageCostText = extraStorageCost.innerText;
    let newExtraStorageCostNumber = parseFloat(prevExtraStorageCostText);

    let extraDeliveryCost = document.getElementById("delivery-charge");
    let prevExtraDeliveryCostText = extraDeliveryCost.innerText;
    let newExtraDeliveryCostNumber = parseFloat(prevExtraDeliveryCostText);

    let totalPrice = document.getElementById("total-price");
    let totalPriceCostText = totalPrice.innerText;
    let totalPriceCostNumber = parseFloat(totalPriceCostText);

    let finalTotalPrice = document.getElementById("final-total");


    if (newExtraMemCostNumber == 180) {
        extraMemCost.innerText = newExtraMemCostNumber;
        let newTotalPriceCostNumber = initialTotal + newExtraMemCostNumber + newExtraStorageCostNumber + newExtraDeliveryCostNumber;
        totalPrice.innerText = newTotalPriceCostNumber;
        finalTotalPrice.innerText = newTotalPriceCostNumber;

    }

});







let storage256Gb = document.getElementById("btnradio3").addEventListener('click', function () {
    let extraMemCost = document.getElementById("extra-memory-cost");
    let prevExtraMemCostText = extraMemCost.innerText;
    let newExtraMemCostNumber = parseFloat(prevExtraMemCostText);

    let extraStorageCost = document.getElementById("extra-storage-cost");
    let prevExtraStorageCostText = extraStorageCost.innerText;
    let newExtraStorageCostNumber = parseFloat(initialStorageMemoryCost) * 0;

    let extraDeliveryCost = document.getElementById("delivery-charge");
    let prevExtraDeliveryCostText = extraDeliveryCost.innerText;
    let newExtraDeliveryCostNumber = parseFloat(prevExtraDeliveryCostText);

    let totalPrice = document.getElementById("total-price");
    let totalPriceCostText = totalPrice.innerText;
    let totalPriceCostNumber = parseFloat(totalPriceCostText);

    let finalTotalPrice = document.getElementById("final-total");

    if (newExtraStorageCostNumber == 0) {
        extraStorageCost.innerText = newExtraStorageCostNumber;
        let newTotalPriceCostNumber = initialTotal + newExtraMemCostNumber + newExtraStorageCostNumber + newExtraDeliveryCostNumber;
        totalPrice.innerText = newTotalPriceCostNumber;
        finalTotalPrice.innerText = newTotalPriceCostNumber;

    }

});




let storage512Gb = document.getElementById("btnradio4").addEventListener('click', function () {

    let extraMemCost = document.getElementById("extra-memory-cost");
    let prevExtraMemCostText = extraMemCost.innerText;
    let newExtraMemCostNumber = parseFloat(prevExtraMemCostText);

    let extraStorageCost = document.getElementById("extra-storage-cost");
    let prevExtraStorageCostText = extraStorageCost.innerText;
    let newExtraStorageCostNumber = parseFloat(initialStorageMemoryCost) + 100;

    let extraDeliveryCost = document.getElementById("delivery-charge");
    let prevExtraDeliveryCostText = extraDeliveryCost.innerText;
    let newExtraDeliveryCostNumber = parseFloat(prevExtraDeliveryCostText);

    let totalPrice = document.getElementById("total-price");
    let totalPriceCostText = totalPrice.innerText;
    let totalPriceCostNumber = parseFloat(totalPriceCostText);

    let finalTotalPrice = document.getElementById("final-total");

    if (newExtraStorageCostNumber == 100) {
        extraStorageCost.innerText = newExtraStorageCostNumber;
        let newTotalPriceCostNumber = initialTotal + newExtraMemCostNumber + newExtraStorageCostNumber + newExtraDeliveryCostNumber;
        totalPrice.innerText = newTotalPriceCostNumber;
        finalTotalPrice.innerText = newTotalPriceCostNumber;
    }

});



let storage1TB = document.getElementById("btnradio5").addEventListener('click', function () {

    let extraMemCost = document.getElementById("extra-memory-cost");
    let prevExtraMemCostText = extraMemCost.innerText;
    let newExtraMemCostNumber = parseFloat(prevExtraMemCostText);


    let extraStorageCost = document.getElementById("extra-storage-cost");
    let prevExtraStorageCostText = extraStorageCost.innerText;
    let newExtraStorageCostNumber = parseFloat(initialStorageMemoryCost) + 180;

    let extraDeliveryCost = document.getElementById("delivery-charge");
    let prevExtraDeliveryCostText = extraDeliveryCost.innerText;
    let newExtraDeliveryCostNumber = parseFloat(prevExtraDeliveryCostText);

    let totalPrice = document.getElementById("total-price");
    let totalPriceCostText = totalPrice.innerText;
    let totalPriceCostNumber = parseFloat(totalPriceCostText);

    let finalTotalPrice = document.getElementById("final-total");

    if (newExtraStorageCostNumber == 180) {
        extraStorageCost.innerText = newExtraStorageCostNumber;
        let newTotalPriceCostNumber = initialTotal + newExtraMemCostNumber + newExtraStorageCostNumber + newExtraDeliveryCostNumber;
        totalPrice.innerText = newTotalPriceCostNumber;
        finalTotalPrice.innerText = newTotalPriceCostNumber;
    }

});




let Delivery25Aug = document.getElementById("btnradio6").addEventListener('click', function () {
    let extraMemCost = document.getElementById("extra-memory-cost");
    let prevExtraMemCostText = extraMemCost.innerText;
    let newExtraMemCostNumber = parseFloat(prevExtraMemCostText);

    let extraStorageCost = document.getElementById("extra-storage-cost");
    let prevExtraStorageCostText = extraStorageCost.innerText;
    let newExtraStorageCostNumber = parseFloat(initialStorageMemoryCost);

    let extraDeliveryCost = document.getElementById("delivery-charge");
    let prevExtraDeliveryCostText = extraDeliveryCost.innerText;
    let newExtraDeliveryCostNumber = parseFloat(initialDeliveryCost) * 0;

    let totalPrice = document.getElementById("total-price");
    let totalPriceCostText = totalPrice.innerText;
    let totalPriceCostNumber = parseFloat(totalPriceCostText);

    let finalTotalPrice = document.getElementById("final-total");

    if (newExtraDeliveryCostNumber == 0) {
        extraDeliveryCost.innerText = newExtraDeliveryCostNumber;
        let newTotalPriceCostNumber = initialTotal + newExtraMemCostNumber + newExtraStorageCostNumber + newExtraDeliveryCostNumber;
        totalPrice.innerText = newTotalPriceCostNumber;
        finalTotalPrice.innerText = newTotalPriceCostNumber;
    }

});




let Delivery21Aug = document.getElementById("btnradio7").addEventListener('click', function () {

    let extraMemCost = document.getElementById("extra-memory-cost");
    let prevExtraMemCostText = extraMemCost.innerText;
    let newExtraMemCostNumber = parseFloat(prevExtraMemCostText);

    let extraStorageCost = document.getElementById("extra-storage-cost");
    let prevExtraStorageCostText = extraStorageCost.innerText;
    let newExtraStorageCostNumber = parseFloat(initialStorageMemoryCost);

    let extraDeliveryCost = document.getElementById("delivery-charge");
    let prevExtraDeliveryCostText = extraDeliveryCost.innerText;
    let newExtraDeliveryCostNumber = parseFloat(initialDeliveryCost) + 20;

    let totalPrice = document.getElementById("total-price");
    let totalPriceCostText = totalPrice.innerText;
    let totalPriceCostNumber = parseFloat(totalPriceCostText);

    let finalTotalPrice = document.getElementById("final-total");

    if (newExtraDeliveryCostNumber == 20) {
        extraDeliveryCost.innerText = newExtraDeliveryCostNumber;
        let newTotalPriceCostNumber = initialTotal + newExtraMemCostNumber + newExtraStorageCostNumber + newExtraDeliveryCostNumber;
        totalPrice.innerText = newTotalPriceCostNumber;
        finalTotalPrice.innerText = newTotalPriceCostNumber;
    }

});





document.getElementById("button-addon2").addEventListener('click', function () {
    let promoCode = document.getElementById("promo-value");
    let promoCodeText = promoCode.value;

    let totalPrice = document.getElementById("total-price");
    let totalPriceCostText = totalPrice.innerText;
    let totalPriceCostNumber = parseFloat(totalPriceCostText);
    console.log(totalPriceCostNumber);

    let finalTotalPrice = document.getElementById("final-total");

    if (promoCodeText == "stevekaku") {
        let discountAmount = totalPriceCostNumber * 0.2;
        finalTotalPrice.innerText = totalPriceCostNumber - discountAmount;
    }
});
