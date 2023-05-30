const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let day;
let date;
let month;
let quoteTextArea = document.getElementById("quote");

function init() {
    let d = new Date();
    day = weekday[d.getDay()]
    date = ordinal_suffix_of(d.getDate())
    month = months[d.getMonth()];

    console.log("Day: " + day);
    console.log("Date: " + date);
    console.log("Month: " + month);

    let displayDate = document.getElementById("date");
    let formatedString = day + " the " + date + " of " + month;

    displayDate.innerText = formatedString

    fetchQuote();
}
function redirect() {
    window.location = "./quote.html";
}

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

async function fetchQuote() {
    fetch('https://taylorswiftapi.onrender.com/get').then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        //console.log(data);
        console.log(data.quote)
        quoteTextArea.innerText = data.quote
       
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    })
}