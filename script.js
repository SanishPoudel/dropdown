const options = document.querySelector(".options");

window.addEventListener("click", (event)=> {
    if (event.target.matches(".dropdown")) {
        options.style.visibility = "visible";
    } else {
        options.style.visibility = "hidden";
    }
})

