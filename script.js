const dropDownText = document.getElementById("dropdown-name");
const dropDownOptions = document.querySelector(".dropdown-options");


dropDownText.addEventListener("click", () => {
    if (dropDownOptions.style.display == "block"){
        dropDownOptions.style.display = "none";
    } else {
        dropDownOptions.style.display = "block";
    }
});

dropDownText.addEventListener("click", () => {
    
});