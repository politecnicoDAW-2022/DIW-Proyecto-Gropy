window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    let logoContainer = document.querySelector(".logo")
    let logo = document.querySelector(".logo img");
    let header = document.querySelector("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.paddingTop = "15px"
        logo.style.width = "70%";
        logo.style.marginLeft = "250px"
        logo.style.objectFit = "cover";
        logo.style.objectPosition =  "90px"; 
    }else{
        header.style.paddingTop = "40px"
        logo.style.width = "100%";
        logo.style.marginLeft = "0px"
        logo.style.objectFit = "";
        logo.style.objectPosition =  "";

    }
}