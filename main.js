"use strict";

const registerEvents = function() {
    let faqItems = document.querySelectorAll(".faq-item");
    for (let faqItem of faqItems) {
        let headline = faqItem.firstElementChild;
        headline.addEventListener("mouseover", e => {
           e.target.style.color = "hsl(14, 88%, 65%)";
           e.target.style.cursor = "pointer";
        });
        headline.addEventListener("mouseout", e => {
            e.target.style.color = "hsl(238, 29%, 16%)";
        });
        headline.addEventListener("click", e => {
            let faqTextParagraph = faqItem.querySelector("p");
            if (faqTextParagraph.className === "hidden") {
                let faqTexts = document.querySelectorAll(".faq-item > p");
                faqTexts.forEach(f => {
                    f.setAttribute("class", "hidden");
                });
                faqTextParagraph.className="";
                headline.lastElementChild.className="arrow-up";
            } else {
                faqTextParagraph.className="hidden";
                headline.lastElementChild.className="";
            }
 
        });
    }
}

registerEvents();