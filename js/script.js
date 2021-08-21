const initialTotal = 1299;
const initialExtraMemoryCost = '0';
const initialStorageMemoryCost = '0';
const initialDeliveryCost = '0';

// calculate Total Price and Final Price 
function calculateTotalAndFinalTotal(initialTotal, newExtraMemCostNumber, newExtraStorageCostNumber, newExtraDeliveryCostNumber) {
    let totalPrice = document.getElementById("total-price");

    let finalTotalPrice = document.getElementById("final-total");

    let newTotalPriceCostNumber = initialTotal + newExtraMemCostNumber + newExtraStorageCostNumber + newExtraDeliveryCostNumber;
    totalPrice.innerText = newTotalPriceCostNumber;
    finalTotalPrice.innerText = newTotalPriceCostNumber;
}


// calculate Total Memory Price 
function calculateMemoryCost() {
    let extraMemCost = document.getElementById("extra-memory-cost");
    let prevExtraMemCostText = extraMemCost.innerText;
    let newExtraMemCostNumber = parseFloat(prevExtraMemCostText);
    return newExtraMemCostNumber;
}

// calculate Total Storage Price 
function calculateStorageCost() {
    let extraStorageCost = document.getElementById("extra-storage-cost");
    let prevExtraStorageCostText = extraStorageCost.innerText;
    let newExtraStorageCostNumber = parseFloat(prevExtraStorageCostText);
    return newExtraStorageCostNumber;
}

// calculate Total delivery charge 
function calculateDeliveryCost() {
    let extraDeliveryCost = document.getElementById("delivery-charge");
    let prevExtraDeliveryCostText = extraDeliveryCost.innerText;
    let newExtraDeliveryCostNumber = parseFloat(prevExtraDeliveryCostText);
    return newExtraDeliveryCostNumber;
}


// handle 8GB memory event
let memory8Gb = document.getElementById("btnradio1").addEventListener('click', function () {
    let extraMemCost = document.getElementById("extra-memory-cost");
    let prevExtraMemCostText = extraMemCost.innerText;
    let newExtraMemCostNumber = parseFloat(initialExtraMemoryCost) + 0;

    let newExtraStorageCostNumber = calculateStorageCost();

    let newExtraDeliveryCostNumber = calculateDeliveryCost();

    if (newExtraMemCostNumber == 0) {
        extraMemCost.innerText = newExtraMemCostNumber;
        calculateTotalAndFinalTotal(initialTotal, newExtraMemCostNumber, newExtraStorageCostNumber, newExtraDeliveryCostNumber);

    }

});


// handle 16GB memory event
let memory16Gb = document.getElementById("btnradio2").addEventListener('click', function () {

    let extraMemCost = document.getElementById("extra-memory-cost");
    let prevExtraMemCostText = extraMemCost.innerText;
    let newExtraMemCostNumber = parseFloat(initialExtraMemoryCost) + 180;

    let newExtraStorageCostNumber = calculateStorageCost();

    let newExtraDeliveryCostNumber = calculateDeliveryCost();

    if (newExtraMemCostNumber == 180) {
        extraMemCost.innerText = newExtraMemCostNumber;
        calculateTotalAndFinalTotal(initialTotal, newExtraMemCostNumber, newExtraStorageCostNumber, newExtraDeliveryCostNumber);

    }

});


// handle 256GB ssd storage event
let storage256Gb = document.getElementById("btnradio3").addEventListener('click', function () {

    let newExtraMemCostNumber = calculateMemoryCost();

    let extraStorageCost = document.getElementById("extra-storage-cost");
    let prevExtraStorageCostText = extraStorageCost.innerText;
    let newExtraStorageCostNumber = parseFloat(initialStorageMemoryCost) + 0;

    let newExtraDeliveryCostNumber = calculateDeliveryCost();

    if (newExtraStorageCostNumber == 0) {
        extraStorageCost.innerText = newExtraStorageCostNumber;
        calculateTotalAndFinalTotal(initialTotal, newExtraMemCostNumber, newExtraStorageCostNumber, newExtraDeliveryCostNumber);

    }

});


// handle 512GB ssd storage event
let storage512Gb = document.getElementById("btnradio4").addEventListener('click', function () {

    let newExtraMemCostNumber = calculateMemoryCost();

    let extraStorageCost = document.getElementById("extra-storage-cost");
    let prevExtraStorageCostText = extraStorageCost.innerText;
    let newExtraStorageCostNumber = parseFloat(initialStorageMemoryCost) + 100;


    let newExtraDeliveryCostNumber = calculateDeliveryCost();

    if (newExtraStorageCostNumber == 100) {
        extraStorageCost.innerText = newExtraStorageCostNumber;
        calculateTotalAndFinalTotal(initialTotal, newExtraMemCostNumber, newExtraStorageCostNumber, newExtraDeliveryCostNumber);
    }

});


// handle 1TB ssd storage event
let storage1TB = document.getElementById("btnradio5").addEventListener('click', function () {

    let newExtraMemCostNumber = calculateMemoryCost();

    let extraStorageCost = document.getElementById("extra-storage-cost");
    let prevExtraStorageCostText = extraStorageCost.innerText;
    let newExtraStorageCostNumber = parseFloat(initialStorageMemoryCost) + 180;

    let newExtraDeliveryCostNumber = calculateDeliveryCost();

    if (newExtraStorageCostNumber == 180) {
        extraStorageCost.innerText = newExtraStorageCostNumber;
        calculateTotalAndFinalTotal(initialTotal, newExtraMemCostNumber, newExtraStorageCostNumber, newExtraDeliveryCostNumber);
    }

});

// handle 25 August free delivery event
let Delivery25Aug = document.getElementById("btnradio6").addEventListener('click', function () {

    let newExtraMemCostNumber = calculateMemoryCost();

    let newExtraStorageCostNumber = calculateStorageCost();

    let extraDeliveryCost = document.getElementById("delivery-charge");
    let prevExtraDeliveryCostText = extraDeliveryCost.innerText;
    let newExtraDeliveryCostNumber = parseFloat(initialDeliveryCost) + 0;

    if (newExtraDeliveryCostNumber == 0) {
        extraDeliveryCost.innerText = newExtraDeliveryCostNumber;
        calculateTotalAndFinalTotal(initialTotal, newExtraMemCostNumber, newExtraStorageCostNumber, newExtraDeliveryCostNumber);
    }

});

// handle 21 August delivery charge event
let Delivery21Aug = document.getElementById("btnradio7").addEventListener('click', function () {

    let newExtraMemCostNumber = calculateMemoryCost();

    let newExtraStorageCostNumber = calculateStorageCost();

    let extraDeliveryCost = document.getElementById("delivery-charge");
    let prevExtraDeliveryCostText = extraDeliveryCost.innerText;
    let newExtraDeliveryCostNumber = parseFloat(initialDeliveryCost) + 20;

    if (newExtraDeliveryCostNumber == 20) {
        extraDeliveryCost.innerText = newExtraDeliveryCostNumber;
        calculateTotalAndFinalTotal(initialTotal, newExtraMemCostNumber, newExtraStorageCostNumber, newExtraDeliveryCostNumber);
    }

});

//final price using promo code event
document.getElementById("button-addon2").addEventListener('click', function () {
    let promoCode = document.getElementById("promo-value");
    let promoCodeText = promoCode.value;

    let totalPrice = document.getElementById("total-price");
    let totalPriceCostText = totalPrice.innerText;
    let totalPriceCostNumber = parseFloat(totalPriceCostText);

    let finalTotalPrice = document.getElementById("final-total");

    if (promoCodeText == "stevekaku") {
        let discountAmount = totalPriceCostNumber * 0.2;
        finalTotalPrice.innerText = totalPriceCostNumber - discountAmount;
        promoCode.value = "";

    }
});


