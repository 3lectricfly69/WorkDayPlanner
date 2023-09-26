console.log(moment().hours());
console.log(moment().date());

$("#currentDay").text("Today's date is: " + ((moment().month()) + 1 )+ "/" + (moment().date()) + "/" + (moment().year()));
$(#currentTime)
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

$(".saveBtn").on("click", function(){
  console.log($(this));
  var key = $(this).attr("id");
  console.log(key);
  var value = $(this).siblings(".text").val();
  console.log(value);
  localStorage.setItem(key, value);
  
  });

  $("#text-9").val(localStorage.getItem("saveButton9"));
  $("#text-10").val(localStorage.getItem("saveButton10"));
  $("#text-11").val(localStorage.getItem("saveButton11"));
  $("#text-12").val(localStorage.getItem("saveButton12"));
  $("#text-1").val(localStorage.getItem("saveButton1"));
  $("#text-2").val(localStorage.getItem("saveButton2"));
  $("#text-3").val(localStorage.getItem("saveButton3"));
  $("#text-4").val(localStorage.getItem("saveButton4"));
  $("#text-5").val(localStorage.getItem("saveButton5"));

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
