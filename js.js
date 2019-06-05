
  $('.box').on('click', function() {
      if (this.classList.contains("second")) { 
      $(this).toggleClass('secondH');
      } else if (this.classList.contains( "dessert")) { 
      $(this).toggleClass('dessertH'); 
      } else { 
      $(this).toggleClass('show-description');
      }


  });