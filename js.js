
  $('.box').on('click', function() {
      if (this.classList.contains("second")) { 
      $(this).toggleClass('secondH');
      } else if (this.classList.contains( "services")) { 
      $(this).toggleClass('servicesH'); 
      } else if (this.classList.contains("first")) { 
      $(this).toggleClass('show-description');
      }; 


  });