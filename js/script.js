$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Blogger","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Blogger","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

let submitForm = document.querySelector('#contactForm')

    submitForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        let name= document.querySelector('#name').value
        let email= document.querySelector('#email').value
        let message= document.querySelector('#message').value
        let subject= document.querySelector('#subject').value
        let data = { name, email, message, subject };

fetch("https://submit-form.com/kEipJxSO",{
            method:"POST",
            headers:{
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
                },
            body:JSON.stringify(data)
})
.then(data=>console.log('success'))
.catch(err=>console.log('err'));

    document.querySelector('#name').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#message').value = "";
    document.querySelector('#subject').value = "";

        alert("Message sent!");
});       

