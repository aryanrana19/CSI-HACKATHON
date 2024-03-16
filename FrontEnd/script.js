let popup = document.getElementById("popup")

function openPopup(){
    popup.classList.add("open-popup")
    document.addEventListener("click", handleClickOutside);
}

function closePopup(){
    popup.classList.remove("open-popup")

}


const budgetSlider = document.getElementById("budget");

const budgetValue = document.getElementById("budgetValue");

budgetSlider.addEventListener("input", function() {
  budgetValue.textContent = budgetSlider.value;
});
