// loading

jQuery(function () {
  jQuery(window).on('load', function () {
    jQuery(".splash").delay(8000).fadeOut();
  });
});

// modal

/*jQuery(function () {
  jQuery('.modal__btn').click(function () {
    jQuery('.modal').fadeOut();
    jQuery('.modalBg').fadeOut();
    jQuery('.is-rocked').removeClass();
    return false;
  });
});

jQuery(function () {
  jQuery('.modalBg').click(function () {
    jQuery('.modal').fadeOut();
    jQuery(this).fadeOut();
    jQuery('.is-rocked').removeClass();
    return false;
  });
});*/

// smooth scroll

jQuery(function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    jQuery('a[href^="#"]').click(function () {
      let header = jQuery(".header__container").innerHeight();
      let speed = 300;
      let id = jQuery(this).attr("href");
      let target = jQuery("#" == id ? "html" : id);
      let position = jQuery(target).offset().top - header;
      jQuery("html, body").animate(
        {
          scrollTop: position
        },
        speed
      );
      return false;
    });
  } else {
    jQuery('a[href^="#"]').click(function () {
      let speed = 300;
      let id = jQuery(this).attr("href");
      let target = jQuery("#" == id ? "html" : id);
      let position = jQuery(target).offset().top;
      jQuery("html, body").animate(
        {
          scrollTop: position
        },
        speed
      );
      return false;
    });
  }
});

// header

jQuery(function () {
  var height = jQuery(window).height();
  if (window.matchMedia("(max-width: 768px)").matches) {
    jQuery(window).on("scroll", function () {
      if (669 < jQuery(this).scrollTop()) {
        jQuery('header').fadeIn();
      } else {
        jQuery('header').fadeOut();
      }
    });
  } else {
    jQuery(window).on("scroll", function () {
      if (height < jQuery(this).scrollTop()) {
        jQuery('header').fadeIn();
      } else {
        jQuery('header').fadeOut();
      }
    });
  }
})

// contact form

jQuery(function () {
  jQuery(document).on('wpcf7invalid', function () {
    jQuery.ajax().always(function () {
      jQuery('.mail__row').each(function (index, el) {
        if (jQuery(el).find('.wpcf7-not-valid-tip').length) {
          jQuery(el).find('.wpcf7-not-valid-tip').insertAfter(jQuery(el))
        }
      });
    });
  });
});

