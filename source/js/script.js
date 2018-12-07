      var navMain = document.querySelector('.main-nav');
      var navToggle = document.querySelector('.main-nav__toggle');
      var link = document.querySelector('.user-list__login');
      var popup = document.querySelector(".modal-login");
      var close = popup.querySelector(".modal-login__close");
      var send = document.querySelector(".form__send");
      var modalSuccess = document.querySelector(".modal-success")
      var modalSuccessClose = document.querySelector(".modal-success__close")
      var modalFailure = document.querySelector(".modal-failure");
      var modalFailureClose = document.querySelector(".modal-failure__close");

      navMain.classList.remove('main-nav--nojs');

      navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('main-nav--closed')) {
          navMain.classList.remove('main-nav--closed');
          navMain.classList.add('main-nav--opened');
        } else {
          navMain.classList.add('main-nav--closed');
          navMain.classList.remove('main-nav--opened');
        }
      });

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-login--show");
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-login--show");
       });

      window.addEventListener("keydown", function(evt){
        if (evt.keyCode === 27){
          if (popup.classList.contains("modal-login--show")){
            evt.preventDefault();
            popup.classList.remove("modal-login--show");
            popup.classList.remove("modal-login--show");
          }
        }
      });

      send.addEventListener('click', function(event) {
        event.preventDefault();
        modalSuccess.classList.add('modal-success--show');
      });

      modalSuccessClose.addEventListener('click', function(event) {
        event.preventDefault();
        modalSuccess.classList.remove('modal-success--show');
      });



      // send.addEventListener('click', function(event) {
      //   event.preventDefault();
      //   modalFailure.classList.add('modal-failure--show');
      // });

      // modalFailureClose.addEventListener('click', function(event) {
      //   event.preventDefault();
      //   modalFailure.classList.remove('modal-failure--show');
      // });


