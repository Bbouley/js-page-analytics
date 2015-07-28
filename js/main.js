// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  var $startTime = $.now();
  var $startTime2 = $.now();

  $(window).on('scroll', function(){
    var $wintop = $(window).scrollTop();
    var $docheight = $(document).height();
    var $winheight = $(window).height();
    var $percentseen = ($wintop/($docheight-$winheight)*100).toFixed(2) + '%';
   var $distance = ($wintop*0.026458333).toFixed(2) + 'mm';


        $('.btninfo').on('click', function(){
          var $endTime2 = $.now();
          var $timeSpent2 = $endTime2 - $startTime2;
          var $minutesSpent2 = ($timeSpent2/60000).toFixed(4);
          console.log($minutesSpent2 + ' minutes');
          $('.btninfo').html('<p>'+ $percentseen + '<br>'+ $distance + '<br>' + $minutesSpent2 + ' minutes' + '</p>');
          });


      });

      $('.btnRead').on('click', function(){
        var $endTime = $.now();
        var $timeSpent = $endTime - $startTime;
        var $minutesSpent = ($timeSpent/60000).toFixed(4);
        console.log($minutesSpent + ' minutes');
        $startTime = $.now();
    });

});
