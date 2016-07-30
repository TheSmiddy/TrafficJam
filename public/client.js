// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

var value = 0;
$(".trafficflow").rotate({
  bind:
  {
    click: function(){
      if (value===0) {
        value = 90;
      } else {
        value = 0;
      }
      $(this).rotate({ animateTo:value})
    }
  }
});

setInterval(function(){ 
  $( "#car1" ).animate({
    left: "+=50",
  }, 5000, function() {
    // Animation complete.
  });
}, 3000);
