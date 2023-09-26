var TenAM = $("#Ten");
var ElevenAM = $("Eleven");
var TwelveAM = $("#Twelve");
var OnePM = $("#One");
var TwoPM = $("#Two");
var ThreePM = $("#Three");
var FourPM = $("#Four");
var FivePM = $("#Five");


console.log(moment().hours());
console.log(moment().date());

$("#date").text("Today's date is: " + ((moment().month()) + 1 )+ "/" + (moment().date()) + "/" + (moment().year()));

$(".saveBtn").on("click", function(){
  console.log($(this));
  var key = $(this).attr("id");
  console.log(key);
  var value = $(this).parent().siblings(".text").val();
  console.log(value);
  localStorage.setItem(key, value);
  
  });

  $("#text-9").val(localStorage.getItem("saveButton9"));
  $("#text-10").val(localStorage.getItem("10am"));
  $("#text-11").val(localStorage.getItem("11am"));
  $("#text-12").val(localStorage.getItem("12pm"));
  $("#text-1").val(localStorage.getItem("1pm"));
  $("#text-2").val(localStorage.getItem("2pm"));
  $("#text-3").val(localStorage.getItem("3pm"));
  $("#text-4").val(localStorage.getItem("4pm"));
  $("#text-5").val(localStorage.getItem("5pm"));

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // fetchButton.addEventListener('click', #saveButton);
  
  // TODO: Add a listener for click events on the save button. This code should 
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
