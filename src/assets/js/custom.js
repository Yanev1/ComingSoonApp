function myDate(){
  var rightNow = new Date();
  // var theDate = rightNow.toISOString().slice(0,10).replace(/-/g,"");
  var goLiveDate = new Date("08/22/2020");
  var Result = Math.round(goLiveDate.getTime() - rightNow.getTime()) / (1000*3600*24);
  var toTheSecond = (rightNow.getHours() * 3600) + (rightNow.getMinutes() * 60) + (rightNow.getSeconds());
  return [Result.toFixed(), toTheSecond];
}

$(document).ready(function() {
          var remainingSec = $('.countdown').data('remaining-sec');
          $('.countdown').ClassyCountdown({
        theme: "flat-colors-very-wide",
        end: $.now() + remainingSec
    });
    });
 
// $(function() {
//     alert('Hello, custom js');
// })