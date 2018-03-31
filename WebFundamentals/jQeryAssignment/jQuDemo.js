
        $(document).ready(function(){
            alert("you are now using a JQuiry");
        // $('a').click(function(){
        //     alert("you are leaving the page");
        // });
        //     // effictive methods
        
        // $('button').click(function(){
        //     var myText = $('#myParagraph').text('see how .text() works as a setter!');
        
        // });

        // $('#hide').click(function(){
        //         $('p').hide() ;
           
        //  });
        //  $('#show').click(function(){
        //         $('p').show() ;
           
        //  });
        //  // menupliation function to add/change something
        //  $('h3').hover(function(){
        //         $('h2').text("Go see the space needed") ;
           
        //  });
        //  $('.append').click(function(){
        //         $('.result').append('<h4> .append adds HTML!</h4>') ;
           
        //  });

         $('img').hover(function(){
                $('p').css('margin-left' ,'10px') ;
           
        });
        
// $( "#clickme" ).click(function() {
//   $( "#book" ).slideUp( "slow", function() {
//     // Animation complete.
//   });
// });

//         $( "button" ).click(function() {
//             $( "p" ).slideUp( "slow" );
//           });
$('img').click(function(){
    $(this).hide();
});

$('button').click(function(){
    $('img').show();
});

});