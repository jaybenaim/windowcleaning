
  $('.box').on('click', function() {
      if (this.classList.contains("second")) { 
      $(this).toggleClass('secondH');
      } else if (this.classList.contains( "dessert")) { 
      $(this).toggleClass('dessertH'); 
      } else if (this.classList.contains("first")) { 
      $(this).toggleClass('show-description');
      }; 


  });