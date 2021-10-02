$('.about').on('click', function () {
    $('body, html').animate({
      scrollTop: $('#about').offset().top
    }, 500);
  })

  $('.services').on('click', function () {
    $('body, html').animate({
      scrollTop: $('#services').offset().top
    }, 500);
  })

  $('.projects').on('click', function () {
    $('body, html').animate({
      scrollTop: $('#projects').offset().top
    }, 500);
  })

  $('.contact').on('click', function () {
    $('body, html').animate({
      scrollTop: $('#contact').offset().top
    }, 500);
  })

  const hamburger = document.querySelector('.hamburger');
  const topMenu = document.querySelector('.top_menu');
  const navLink = document.querySelector('.top');

  hamburger.addEventListener('click', mobileMenu);

  function mobileMenu () {
      topMenu.classList.toggle('active');
  }

  topMenu.addEventListener('click', closeMenu);

  function closeMenu() {
      topMenu.classList.toggle('active');
  }