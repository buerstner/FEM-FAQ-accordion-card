"use strict";

const registerEvents = function() {
    let faqItems = document.querySelectorAll(".faq-item");
    for (let faqItem of faqItems) {
        let headline = faqItem.firstElementChild; // h2
        headline.addEventListener("click", e => {
            let currentFaqTextParagraph = faqItem.querySelector("p"); // p
            if (currentFaqTextParagraph.className === "hidden") {
                resetFAQList();
                currentFaqTextParagraph.className="";
                headline.firstElementChild.className="active"; 
                headline.lastElementChild.className="arrow-up"; //img
            } else {
                currentFaqTextParagraph.className="hidden"; // p
                headline.firstElementChild.className="";
                headline.lastElementChild.className=""; // img

            }
 
        });
    }
};

const resetFAQList = function() {
    let faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(f => {
        f.querySelector("p").setAttribute("class", "hidden"); // p
        f.firstElementChild.firstElementChild.className = ""; // h2 > span
        f.firstElementChild.lastElementChild.className=""; // img
    });
};

resetFAQList();
registerEvents();