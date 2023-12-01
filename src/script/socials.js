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

    function hideSideBar(){
      $('.socials-side').fadeOut(300);
      $('#check').fadeOut(300); // Hide the checkbox
      $('#bars, #times').fadeOut(300);
    }
    
    function showSideBar(){
      $('.socials-side').fadeIn(300);
      $('#check').fadeIn(300); // Hide the checkbox
      $('#bars, #times').fadeIn(300);
    }

    function roomValidate() {
      if ($('.socials-inner #code').val().length > 1) {   
        showSideBar();
        $('#social-page').prop('disabled', true);  
        hideSocials();
      } else {
        alert('This is not a valid room code !');
      }
    }

    $(document).ready(function(){
      $('.socials-side').hide();
      $('#check').hide(); // Hide the checkbox
      $('#bars, #times').hide();
      $('#social-page').click(function() {
          showSocials();
      });

      $('.socials-inner .close-btn').click(function() {
          hideSocials();
        });

      $('.socials-inner .form .form-element button').click(function() {
          roomValidate();
      });
      
      $('.socials-side button').click(function(){
        $('#social-page').prop('disabled', false);
        hideSideBar();
      });
      $('.socials-outer').click(function(event) {
        if (event.target === this) {
            hideSocials();
        }
    });

    });
  });