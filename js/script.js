let content = $("#content")
let about = $("#about")
let team = $("#team")
let contact = $("#contact")

let mainpage = $("#mainpage");
let mainpagevideo = $("#mainpagevideo") 

let video = document.getElementById("introVideo");
let video1 = $("#video1");
let video2 = $("#video2");
let video3 = $("#video3");
let mainbtn = $("#myBtn");
let invideo =$("#introVideo");


let prof_container = $("#video-container-prof");
let zoomer_container = $("#video-container-zoomer");
let boomer_container = $("#video-container-boomer");
let intro_container = $("#video-container");



function expand(){
    $(this).toggleClass("on");
    $(".menu").toggleClass("active");
    
    if (!$( ".menu" ).hasClass( "active" )){
        content.fadeIn(500);
        mainpagevideo.fadeIn(500);
        document.getElementById("mainpagevideo").play();
        contact.fadeOut(00);
        about.fadeOut( 0 );
        team.fadeOut(0);
    }else{
        content.fadeOut(500);
        document.getElementById("mainpagevideo").pause();
        mainpagevideo.fadeOut(500);
        
        about.slideUp( 300 ).delay( 400 ).fadeIn( 400 );
    }
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    
  };


$(".button").on('click', expand);

document.getElementById("boomer").addEventListener("click",()=>{
    // mainpage.fadeOut(0);
    // video1.fadeIn(100);

    intro_container.fadeOut(0);
    zoomer_container.fadeOut(0);
    prof_container.fadeOut(0);
    boomer_container.fadeIn(3000);
    document.getElementById("mainpagevideo").pause();
    document.getElementById("mainpagevideo-zoomer").pause();
    document.getElementById("mainpagevideo-prof").pause();

    document.getElementById("mainpagevideo-boomer").play();

})
document.getElementById("memelord").addEventListener("click",()=>{
    // mainpage.fadeOut(0);
    // video2.fadeIn(100);


    intro_container.fadeOut(0);
    prof_container.fadeOut(0);
    boomer_container.fadeOut(0);
    zoomer_container.fadeIn(3000);
    document.getElementById("mainpagevideo").pause();
    document.getElementById("mainpagevideo-prof").pause();
    document.getElementById("mainpagevideo-boomer").pause();

    document.getElementById("mainpagevideo-zoomer").play();
})
document.getElementById("professor").addEventListener("click",()=>{
    intro_container.fadeOut(0);
    zoomer_container.fadeOut(0);
    boomer_container.fadeOut(0);
    prof_container.fadeIn(3000);
    document.getElementById("mainpagevideo").pause();
    document.getElementById("mainpagevideo-zoomer").pause();
    document.getElementById("mainpagevideo-boomer").pause();

    document.getElementById("mainpagevideo-prof").play();

})

document.getElementById("teambtn").addEventListener("click",()=>{
    about.fadeOut( 0 );
    team.fadeIn(300);
    contact.fadeOut(00);
})
document.getElementById("aboutbtn").addEventListener("click",()=>{
    about.fadeIn( 300 );
    contact.fadeOut(00);
    team.fadeOut(0);
})
document.getElementById("contactbtn").addEventListener("click",()=>{
    team.fadeOut(0);
    about.fadeOut(0);
    contact.fadeIn(300);
})
document.getElementById("Mteambtn").addEventListener("click",()=>{
    about.fadeOut( 0 );
    team.fadeIn(300);
    contact.fadeOut(00);
    content.fadeOut(500);
})
document.getElementById("Maboutbtn").addEventListener("click",()=>{
    about.fadeIn( 300 );
    contact.fadeOut(00);
    team.fadeOut(0);
    content.fadeOut(500);
})
document.getElementById("Mcontactbtn").addEventListener("click",()=>{
    team.fadeOut(0);
    about.fadeOut(0);
    contact.fadeIn(300);
    content.fadeOut(500);
})

function myFunction(){
    document.getElementById("mainpagevideo").play(); 
    invideo.fadeOut(0);
    mainbtn.fadeOut(0);
    
    // document.getElementById("video1btn").pause(); 
    // document.getElementById("video2btn").pause(); 
    // document.getElementById("video3btn").pause(); 
    // video1.fadeOut(0);
    // video2.fadeOut(0);
    // video3.fadeOut(0);
    mainpage.fadeIn(1000);
    document.getElementById("background").style.backgroundColor = "white";
}

// video.onended = function() {
//     document.getElementById("introVideo").pause(); 
//     invideo.fadeOut(1000);
//     mainbtn.fadeOut(1000);
//     mainpage.fadeIn(3000);
    
// };

let indd = $("#instructions");
let abtt = $("#AboutBoomer");
function aboutboomer(){
    indd.fadeOut(0);
    abtt.fadeIn(100);
}

function hideaboutb(){
    abtt.fadeOut(0);
    indd.fadeIn(0);
}

