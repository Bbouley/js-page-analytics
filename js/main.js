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

          $('.btninfo').html('<p>Percentage<br>Seen:<br>'+ $percentseen + '<br><br>Distance<br>Scrolled:<br>'+ $distance + '<br><br>Time on<br>page<br>' + $minutesSpent2 + ' minutes' + '</p>');
          });


      });

      $('.btnRead').on('click', function(){
        var $endTime = $.now();
        var $timeSpent = $endTime - $startTime;
        var $minutesSpent = ($timeSpent/60000).toFixed(4);
        console.log($minutesSpent + ' minutes');
        $startTime = $.now();
    });

      $(window).on('load', function(){
          $timeIn = '0';
      $('.navbar').on({ mouseenter: function(){
        $timeIn = $.now();
         },
       mouseleave : function(){
        var $timeOut = $.now();
        var $totalTime = $timeOut - $timeIn;
        console.log($totalTime);
      }
      });
    });

   $(window).on('load', function(){
            $timeIn = '0';
        $('.blogPost1').on({ mouseenter: function(){
          $timeIn = $.now();
           },
         mouseleave : function(){
          var $timeOut = $.now();
          var $totalTime = $timeOut - $timeIn;
          console.log($totalTime);
        }
        });
      });

      $(window).on('load', function(){
                $timeIn = '0';
            $('.blogPost2').on({ mouseenter: function(){
              $timeIn = $.now();
               },
             mouseleave : function(){
              var $timeOut = $.now();
              var $totalTime = $timeOut - $timeIn;
              console.log($totalTime);
            }
            });
          });

      $(window).on('load', function(){
                  $timeIn = '0';
              $('.blogPost3').on({ mouseenter: function(){
                $timeIn = $.now();
                 },
               mouseleave : function(){
                var $timeOut = $.now();
                var $totalTime = $timeOut - $timeIn;
                console.log($totalTime);
              }
              });
            });
});
