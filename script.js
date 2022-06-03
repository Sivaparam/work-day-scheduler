var today = moment();
var currentHour = today.format('h A');
var timeSlot = [9, 10, 11, 12, 1, 2, 3, 4, 5];

// Adding Today's date to header section using moment js
$("#currentDay").text(today.format("dddd, MMMM Do"));


$(".saveBtn").on("click", saveEvents);
function displayEventsOnLoad() {
    for (i = 0; i < timeSlot.length; i++) {
        $("#event_" + timeSlot[i]).val(localStorage.getItem(timeSlot[i]));
    }
}
displayEventsOnLoad();



function saveEvents() {
    var targetElId = event.target.id.split("_")[1];


    localStorage.setItem(targetElId, $("#event_" + targetElId).val());


    

}