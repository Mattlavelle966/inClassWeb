var table = document.getElementById("fhgtable");
var changeTable = document.getElementById("changeTable");
var booleanLoop = false;

changeTable.addEventListener("click", () =>{
    booleanLoop = !booleanLoop;
    if(booleanLoop){
        table.style.color = "green"
        table.style.borderWidth = ".3em";
        table.style.borderStyle = "dotted";
        table.style.borderColor = "yellow"

    } else{
        table.style.color = "#EAEAEA"
        table.style.borderWidth = ".4em";
        table.style.borderStyle = "double";
        table.style.borderColor = "#050404"

    }
});