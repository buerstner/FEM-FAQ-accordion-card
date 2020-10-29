"use strict";

const registerEvents = function() {
    let headlines = document.querySelectorAll(".faq-item>h2");
    console.log(headlines);
    for (let headline of headlines) {
        headline.addEventListener("mouseover", e => {
           e.target.style.color = "hsl(14, 88%, 65%)";
           e.target.style.cursor = "pointer";
        });
        headline.addEventListener("mouseout", e => {
            e.target.style.color = "hsl(238, 29%, 16%)";
        });
        headline.addEventListener("click", e => {
            console.log(e);
        });
    }
}

registerEvents();