// @ts-nocheck
const cont1 = document.querySelector(".container1");
const cont2 = document.querySelector(".container2");
const span_rat = document.getElementById("span_rate");
const r = document.querySelectorAll(".r");

const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   cont2.classList.remove("hide");
//   cont1.classList.add("hide");
// });

btn.onclick = () => {
  cont2.classList.remove("hide");
  cont1.classList.add("hide");
};

r.forEach((i) => {
  i.addEventListener("click", () => {
    span_rat.innerHTML = i.innerHTML;
  });
  i.addEventListener("click", selected);
});

function selected(event) {
  r.forEach((j) => {
    j.classList.remove("active");
  });
  event.target.classList.add("active");
}
