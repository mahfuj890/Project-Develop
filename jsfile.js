
/* 01. ################# HS-01. #####################  */ 
$(document).ready(function(){
    $('#Scratch').wScratchPad({
        size        : 115,          // The size of the brush/scratch.
        bg          : 'imgs/img2.jpg',  // Background (image path or hex color).
        fg          : 'imgs/img1.jpg',  // Foreground (image path or hex color).
       
        
      });
     $("#Scratch").mouseenter(function () { 
       $(".suggest").slideToggle();;
      
        
      });

     $("#Scratch").mouseleave(function () { 
       $(".suggest").slideDown();
     });


});

/* 02. ################# HS-02. #####################  */

$('#draw').wScratchPad({
  size        : 5,          // The size of the brush/scratch.
  bg          : '#cacaca',  // Background (image path or hex color).
  fg          : '#6699ff',  // Foreground (image path or hex color).
 
});
