/* =========================================
ULRICH DELICIOUS RESTAURANT
JAVASCRIPT
========================================= */

/* -----------------------------------------
Welcome message
----------------------------------------- */

console.log(
"Welcome to Ulrich Delicious Restaurant!"
);

/* -----------------------------------------
WhatsApp order
----------------------------------------- */

function orderOnWhatsApp() {

const phoneNumber = "237671071911";

const message =
    "Hello Ulrich Delicious Restaurant! " +
    "I would like to place an order.";

const whatsappURL =
    "https://wa.me/" +
    phoneNumber +
    "?text=" +
    encodeURIComponent(message);

window.open(
    whatsappURL,
    "_blank"
);


}

/* -----------------------------------------
Smooth button interaction
----------------------------------------- */

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(function(button) {

button.addEventListener(
    "click",
    function() {

        console.log(
            "Button clicked!"
        );

    }
);


});