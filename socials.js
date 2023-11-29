document.addEventListener('DOMContentLoaded', (event) => {
    function showSocials() {
        $('.socials-outer').fadeIn(300); // Fade in the overlay
        $('.socials-inner').css('transform', 'translate(-50%, -50%) scale(1)').fadeIn(300);
    }
  
    function hideSocials() {
        $('.socials-outer').fadeOut(300);
        $('.socials-inner').fadeOut(300, function() {
            $(this).css('transform', 'translate(-50%, -50%) scale(0.9)');
        });
      }
    
    function hideContents(){
    }

    function roomValidate() {
      if ($('.socials-inner #code').val().length > 1) {   
      } else {
        alert('This is not a valid room code !');
      }
    }

    $(document).ready(function(){
      $('#social-page').click(function() {
          showSocials();
      });

      $('.socials-inner .close-btn').click(function() {
          hideSocials();
        });

      $('.socials-inner .form .form-element button').click(function() {
          roomValidate();
      });

    });
  });