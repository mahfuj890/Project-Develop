
$(document).ready( function (){
//   ============ sticky navbar =======
   $(window).scroll(function(){
       if($(window).scrollTop()>0){
            $(".main_navbar_area").addClass("sticky_main");
       }
       else{
        $(".main_navbar_area").removeClass("sticky_main");
       }

   });

})

