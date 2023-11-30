document.addEventListener('DOMContentLoaded', (event) => {
    var emailPattern= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    function showRegistration() {
        $('.registration-outer').fadeIn(300); // Fade in the overlay
        $('.registration-inner').css('transform', 'translate(-50%, -50%) scale(1)').fadeIn(300);
    }

    function hidePopup() {
      $('.overlay').fadeOut(300);
      $('.popup').fadeOut(300, function() {
          $(this).css('transform', 'translate(-50%, -50%) scale(0.9)');
      });
    }
  
    function hideRegistration() {
        $('.registration-outer').fadeOut(300);
        $('.registration-inner').fadeOut(300, function() {
            $(this).css('transform', 'translate(-50%, -50%) scale(0.9)');
        });
      }
      function registered() {
        if (emailPattern.test($('.registration-inner #email').val()) && $('.registration-inner #name').val().length > 1
        && $('.registration-inner #password').val().length>1 && $('.registration-inner #username').val().length > 1) {
          // Hide the sign-in popup
          hideRegistration();
          hidePopup();
          $('#profile-pic').toggle();
          $('#goose').show();     
          $('#profileButton').prop('disabled', true);     
        } else {
          alert('Please check your credentials!');
        }
      }

      $(document).ready(function(){
        $('#new-user').click(function() {
            showRegistration();
        });

        $('.registration-inner .close-btn').click(function() {
            hideRegistration();
          });

        $('.registration-inner .form .form-element button').click(function() {
            registered();
        });

      });
  });