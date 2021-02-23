// current time
var displayTime = moment();
$("#currentDay").text(displayTime.format("dddd,MMM Do,YYYY"));

// color blocks
function colorBlocks() {
  $(".form-control").each(function () {
    var headerTime = parseInt($(this).attr("id"));
    var currentTime = date.getHours();

    if (headerTime < currentTime) {
      $(this).addClass("past");
    } else if (headerTime === currentTime) {
      $(this).addClass("present");
    } else if (headerTime > currentTime) {
      $(this).addClass("future");
    }
  });
}
$(document).ready(function () {
  colorBlocks();

  reloadEvent();
});

// save button
$(".saveBtn").on("click", function () {
  inputText = $(this).siblings(".form-control").val().trim();
  hourSpan = $(this).siblings(".input-group-text").text().trim();
  localStorage.setItem(hourSpan, JSON.stringify(inputText));
});
// save event blocks

function reloadEvent() {
  var nine = $("9am");
  var reloadNine = JSON.parse(localStorage.getItem("09:00am"));
  nine.val(reloadNine);

  var ten = $("10am");
  var reloadTen = JSON.parse(localStorage.getItem("10:00am"));
  ten.val(reloadNine);

  var eleven = $("11am");
  var reloadEleven = JSON.parse(localStorage.getItem("11:00am"));
  eleven.val(reloadEleven);

  var twelve = $("12pm");
  var reloadTwelve = JSON.parse(localStorage.getItem("12:00pm"));
  twelve.val(reloadTwelve);

  var one = $("1pm");
  var reloadOne = JSON.parse(localStorage.getItem("01:00pm"));
  one.val(reloadOne);

  var two = $("2pm");
  var reloadTwo = JSON.parse(localStorage.getItem("02:00pm"));
  two.val(reloadTwo);

  var three = $("3pm");
  var reloadThree = JSON.parse(localStorage.getItem("03:00pm"));
  three.val(reloadThree);

  var four = $("4pm");
  var reloadFour = JSON.parse(localStorage.getItem("04:00pm"));
  four.val(reloadFour);

  var five = $("5pm");
  var reloadFive = JSON.parse(localStorage.getItem("05:00pm"));
  five.val(reloadFive);
}
