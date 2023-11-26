document.addEventListener('DOMContentLoaded', (event) => {
    // Get the elements
    var overlay = document.querySelector('.overlay');
    var popup = document.querySelector('.popup');
    var closeBtn = document.querySelector('.close-btn');
    var profileButton = document.getElementById('profileButton');
  
    function showPopup() {
        $('.overlay').fadeIn(300); // Fade in the overlay
        $('.popup').css('transform', 'translate(-50%, -50%) scale(1)').fadeIn(300);
    }
  
    function hidePopup() {
        $('.overlay').fadeOut(300);
        $('.popup').fadeOut(300, function() {
            $(this).css('transform', 'translate(-50%, -50%) scale(0.9)');
        });
      }
      
  
      $(document).ready(function() {
        $('#profileButton').click(function() {
          showPopup();
        });
      
        $('.close-btn').click(function() {
          hidePopup();
        });
      });
      
  });

  

