
var currentDate = new Date();
var month, day, year;
month = currentDate.getMonth() + 1;
day = currentDate.getDate();
year = currentDate.getFullYear();


function showdate(){
    document.getElementById("currentdate").innerHTML = day + "/" + getMonthString(month) + "/" + year;
}

function getMonthString(monthNum) {
    var monthName = "";
    switch(monthNum){
        case 1: monthName="January"; break;
        case 2: monthName="Febuary"; break;
        case 3: monthName="March"; break;
        case 4: monthName="April"; break;
        case 5: monthName="May"; break;
        case 6: monthName="June"; break;
        case 7: monthName="July"; break;
        case 8: monthName="August"; break;
        case 9: monthName="September"; break;
        case 10: monthName="October"; break;
        case 11: monthName="November"; break;
        case 12: monthName="December"; break;
    }
    return(monthName);
}

window.addEventListener("load", showdate())
