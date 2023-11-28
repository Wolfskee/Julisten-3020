$('#goose').hide();
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the elements
    var overlay = document.querySelector('.overlay');
    var popup = document.querySelector('.popup');
    var closeBtn = document.querySelector('.close-btn');
    var profileButton = document.getElementById('profileButton');
    var emailPattern= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
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

      function signedIn() {
        if (emailPattern.test($('#email').val()) && $('#password').val().length > 1) {
          // Hide the sign-in popup
          hidePopup();
          $('#profile-pic').toggle();
          $('#goose').show();     
          $('#profileButton').prop('disabled', true);     
        } else {
          alert('Please check your credentials!');
        }
      }
      
  
      $(document).ready(function() {
        $('#profileButton').click(function() {
          showPopup();
        });
      
        $('.close-btn').click(function() {
          hidePopup();
        });

        $('.popup .form .form-element button').click(function() {
          signedIn();
        })
      });
      
  });


  

