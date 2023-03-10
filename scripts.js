var allPanels = $('.accordion > dd').hide();

	$('.accordion > dt').click(function() {
		allPanels.slideUp();

    $(this).filter('.open').removeClass('open').addClass('closing')
    $('.accordion > dt ').removeClass('open');
    $(this).not(".closing").addClass('open').next().slideDown();
    $('.accordion > dt').removeClass('closing');
    
    return false;
	});

  // Animate on scroll
 AOS.init({
  offset: 250, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
});


//   Slider Container
$('.slider-container').slick({
	autoplay: true, // Do we want it to autoplay? true or false
	autoplaySpeed: 5000, // How long between each slide when auto-playing
	speed: 500, // How fast is the transition in milliseconds
	arrows: false, // Do you want to show arrows to trigger each slide
	accessibility: true, // Enables keyboard tabbing and arrow key navigation
	dots: true, // Enables the dots below to show how many slides
	fade: false, // Changes the animate from slide to fade if true
	infinite: true, // When true, means that it will scroll in a circle
	pauseOnHover: false, // When true means the autoplay pauses when hovering
	pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
});

// Slider Products
$('.slickSlider').slick({
  centerMode: true,
  dots: true,
  arrows: true,
  centerPadding: '0',
  slidesToShow: 3,
  infinite: true,
  autoplay: true,
  useTransform: true,
});


$('.products-slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  dots: true,
  autoplay: true,
  accessibility: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
	
	

// hamburger button
  $('.hamburger-button').click(function(){
    $('.mobile-menu').slideToggle(100);
    $(this).toggleClass('active');
  });
  
  function myFunction(x) {
    x.classList.toggle("change");
  }

  // Lightgallery
  lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});

// Cookies
const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);



