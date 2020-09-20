$(function() {
    $(".quantity").on("click", function() {
      let $button = $(this);
      let $parent = $button.parent(); 
      let oldValue = $parent.find('.input').val();
   
      if ($button.text() == "+") {
         var newVal = parseFloat(oldValue) + 1;
       } else {
          // 1 alá nem mehet
         if (oldValue > 1) {
           var newVal = parseFloat(oldValue) - 1;
           } else {
           newVal = 1;
         }
         }
       $parent.find('a.kosarba').attr('data-quantity', newVal);
       $parent.find('.input').val(newVal);
    });
   });



