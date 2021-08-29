// storing required elements
let faqCard = document.querySelector(".faqCard");
let faqCardAccs = faqCard.querySelectorAll(".faqCardAcc");

faqCardAccs.forEach(function (cardAcc) {
    cardAcc.addEventListener("click", function () {
        // remove the active class to close opened card
        if (cardAcc.classList.contains("active")) {
            cardAcc.classList.remove("active");
        } else {
            // closing all the cards that are open
            faqCardAccs.forEach(function (cardAcc) {
                cardAcc.classList.remove("active");
            });

            // open the card that was clicked by adding active class
            cardAcc.classList.add("active");
        }
    });
});
