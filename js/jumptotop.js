var myButton = document.getElementById("jumpTop");

myButton.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});

});