var today = moment();


var timeSlot = [9,10,11,12,13,14,15,16,17];

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



setInterval(addColor, 1000);

function addColor(){
for(i=0; i<timeSlot.length; i++){
    var currentHour = moment().hour();
    
   if( timeSlot[i] === currentHour){
       $("#event_"+timeSlot[i]).addClass("present");
   }

   if( timeSlot[i] < currentHour){
    $("#event_"+timeSlot[i]).addClass("past");
}

if( timeSlot[i] > currentHour){
    $("#event_"+timeSlot[i]).addClass("future");
}

}
}