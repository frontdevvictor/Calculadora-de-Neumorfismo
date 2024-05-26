let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

btn.forEach(button => {
    button.addEventListener("click", function () {
        if (this.innerHTML == "=") {
            try {
                value.innerHTML = eval(value.innerHTML);
            } catch {
                value.innerHTML = "Erro";
            }
        } else {
            if (this.innerHTML == "Clear") {
                value.innerHTML = "";
            } else {
                value.innerHTML += this.innerHTML;
            }
        }
    });
});

toggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark");
});
