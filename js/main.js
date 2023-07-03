(function ($) {
    "use strict";
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Blogs carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);
//.....api.......//
let about='http://localhost:8050/api/v1/about-us'
let contact='http://localhost:8050/api/v1/contact-us'
let casestudy="http://localhost:8050/api/v1/our-speciality"
let practicearea=""
let socialmedia="'http://localhost:8050/api/v1/social-media'"
let postmanagment="http://localhost:8050/api/v1/post-management"
let postcategory="http://localhost:8050/api/v1/post-category"

//    about pAge API

fetch('http://localhost:8050/api/v1/about-us')
  .then(response => response.json()) // Assuming the API response is in JSON format
  .then(data =>  {
    console.log("about api",data.response)
    // Update the HTML content with the fetched data

//     const aboutTextElement = document.querySelector('.carousel-caption h1');
//     aboutTextElement.textContent = data.response[0].title;

//     const subTitle = document.querySelector('.carousel-caption h2');
//     subTitle.textContent = data.response[0].subTitle;


//     const para = document.querySelector('.carousel-caption p');
//     para.textContent = data.response[0].description;

//     const title2=document.querySelector("#scndcarotitle")
//     title2.textContent=data.response[0].title

//     const para2=document.querySelector("#scndcaropara")
//     para2.textContent=data.response[0].description

//     const title3=document.querySelector("#scndcaro3title")
//     title3.textContent=data.response[0].title

//     const para3=document.querySelector("#scndcaro3para")
//     para3.textContent=data.response[0].description

//     const image = document.querySelector('.about-img img');
//     image.src = data.response[0].aboutusImage;  

//     const caroimg= document.querySelector("#caro-img-1")
//     caroimg.src=data.response[0].bannerImage

//     const caroimg_2= document.querySelector("#caro-img-2")
//     caroimg_2.src=data.response[0].bannerImage

//     const caroimg_3= document.querySelector("#caro-img-3")
//     caroimg_3.src=data.response[0].bannerImage

//     //  about section AP..........
//     const ABOUTP1=document.querySelector(".abtp")
//     ABOUTP1.textContent=data.response[0].description
    
//     const ABOUTP2=document.querySelector(".abtp2")
//     ABOUTP2.textContent=data.response[0].description

//    const aboutimg=document.querySelector(".about-img img")
//     aboutimg.src=data.response[0].aboutusImage

//     const abouttitle=document.querySelector(".section-header h2")
//     abouttitle.textContent=data.response[0].title

//     const absubTitle = document.querySelector(".timeline-content h2");
//     absubTitle.textContent = data.response[0].subTitle;

      
//     const abtpara=document.querySelector(".timeline-content p" )
//     abtpara.textContent=data.response[0].description

//     const footerpara=document.querySelector(".footer-about p" )
//     footerpara.textContent=data.response[0].description
    
     const aboutimg=document.querySelector(".about-img img")
     aboutimg.src=data.response[0].aboutusImage

     const ABOUTP1=document.querySelector(".abp1")
     ABOUTP1.textContent=data.response[0].description

     const ABOUTP2=document.querySelector(".abp2")
     ABOUTP2.textContent=data.response[0].description


     const ABOUTfP1=document.querySelector(".footer-about p")
     ABOUTfP1.textContent=data.response[0].description

  })
  .catch(error => {
    console.error('Error:', error);
  });

//   CONTACT PAGE API......
fetch('http://localhost:8050/api/v1/contact-us')
.then(response => response.json()) // Assuming the API response is in JSON format
.then(contact=>  {
  console.log( "contact api",contact.response)
  // Update the HTML content with the fetched data
  const location=document.querySelector(".location" )
  location.textContent=contact.response[0].locationUrl

  const phone=document.querySelector(".phnumber" )
  phone.textContent=contact.response[0].primaryPhone


  const email=document.querySelector(".email" )
  email.textContent=contact.response[0].primaryEmail

})
.catch(error => {
  console.error('Error:', error);
});


// case study........
fetch('http://localhost:8050/api/v1/our-speciality')
.then(response => response.json()) // Assuming the API response is in JSON format
.then(contact=>  {
  console.log("speciality api",contact.response)
//   Update the HTML content with the fetched data
  const cimg1=document.querySelector(".cimg1" )
  cimg1.src=contact.response[0].specialityImage


  const cimg2=document.querySelector(".cimg2" )
  cimg2.src=contact.response[0].specialityImage

  const cimg3=document.querySelector(".cimg3" )
  cimg3.src=contact.response[0].specialityImage


  const cimg4=document.querySelector(".cimg4" )
  cimg4.src=contact.response[0].specialityImage

  const cimg5=document.querySelector(".cimg5" )
  cimg5.src=contact.response[0].specialityImage

  const cimg6=document.querySelector(".cimg6" )
  cimg6.src=contact.response[0].specialityImage

})

.catch(error => {
  console.error('Error:', error);
});