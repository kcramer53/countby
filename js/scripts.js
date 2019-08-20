$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var  countBy = parseInt($("#countBy").val());
    var upTo = parseInt($("#upTo").val());

    var count = 0
    for (i = 1; i <= upTo; i += countBy) {
      count += countBy;
      console.log(count);
}

});
});

// var total = 0;
// for (var currentNumber = 1; currentNumber <= 5; currentNumber += 1) {
//   total += currentNumber;
// }
// alert("Total is: " + total);
