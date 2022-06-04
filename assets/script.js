// using moment js to get current date
var today = moment();

//Global variable for timeslot in 24hour format
var timeSlot = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Adding Today's date to header section using moment js
$("#currentDay").text(today.format("dddd, MMMM Do"));

//self initiated function that loads data from local storage everytime page is loaded
function displayEventsOnLoad() {
    for (var i = 0; i < timeSlot.length; i++) {
        $("#event_" + timeSlot[i]).val(localStorage.getItem(timeSlot[i]));
    }
}
displayEventsOnLoad();

//initiate saveEvents function to save events to local storage when save icon is clicked
$(".saveBtn").on("click", saveEvents);

function saveEvents() {
    console.log(event.target.id);
    var targetElId = event.target.id.split("_")[1];
    localStorage.setItem(targetElId, $("#event_" + targetElId).val());
}

//self initiated function that sets color for timeslots everytime milliseconds
setInterval(addColor, 1000);

function addColor() {
    for (var i = 0; i < timeSlot.length; i++) {
       //using momentjs method get time in 24 hour format
        var currentHour = moment().hour();

        //below if's set the color for timeblock based on current hour
        if (timeSlot[i] === currentHour) {
            $("#event_" + timeSlot[i]).addClass("present");
        }

        if (timeSlot[i] < currentHour) {
            $("#event_" + timeSlot[i]).addClass("past");
        }

        if (timeSlot[i] > currentHour) {
            $("#event_" + timeSlot[i]).addClass("future");
        }

    }
}