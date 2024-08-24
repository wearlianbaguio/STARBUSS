// const accordions = document.querySelectorAll(".info__story h4");

// accordions.forEach((accordion) => {
//   accordion.addEventListener("click", () => {
//     accordion.nextElementSibling.classList.toggle("open");
//     accordion.querySelector("i").classList.toggle("open");
//   });
// });

const accordions = document.querySelectorAll(".info__story h4");
function initializeAccordion() {
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", toggleAccordion);
  });
}

function openAccordionOnDesktop() {
  accordions.forEach((accordion) => {
    accordion.nextElementSibling.classList.add("open");
    accordion.querySelector("i").classList.add("open");
    accordion.classList.add("pointer-events-none"); 
  });
}

function resetAccordionOnMobile() {
  accordions.forEach((accordion) => {
    accordion.nextElementSibling.classList.remove("open");
    accordion.querySelector("i").classList.remove("open");
    accordion.classList.remove("pointer-events-none"); 
  });
}

function toggleAccordion() {
  this.nextElementSibling.classList.toggle("open");
  this.querySelector("i").classList.toggle("open");
}

function handleResize() {
  const isDesktop = window.innerWidth >= 768;
  if (isDesktop) {
    openAccordionOnDesktop(); 
  } else {
    resetAccordionOnMobile(); 
    initializeAccordion(); 
  }
}

document.addEventListener("DOMContentLoaded", () => {
  handleResize(); 
  window.addEventListener("resize", handleResize); 
});

