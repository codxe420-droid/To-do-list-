
let form = document.querySelector("form");
let inp = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function(dets) {
  dets.preventDefault();

  let card = document.createElement("div");
  card.classList.add("dv");
  let ch = document.createElement("input")
ch.type="checkbox"
ch.classList.add("ch")
  let p = document.createElement("p");
  p.textContent = inp[0].value;

  card.appendChild(p);
card.prepend(ch)
  main.appendChild(card);
  
  ch.addEventListener("change", function() {
  if (ch.checked) {
    ch.disabled = true;
    p.style.opacity = "0.3";
    
  }
});
  
  inp.forEach(function (int) {
    if (int.type !== "submit") {
      int.value = "";
    }
  })
  
  
})

