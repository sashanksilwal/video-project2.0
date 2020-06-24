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
let ending_container = $("#video-container-end");

let intro_video = document.getElementById("mainpagevideo");
let prof_video = document.getElementById("mainpagevideo-prof");
let zoomer_video = document.getElementById("mainpagevideo-zoomer");
let boomer_video = document.getElementById("mainpagevideo-boomer");
let ending_video = document.getElementById("mainpagevideo-end")

let mainVid_active = true;
let prof_active = false;
let zoomer_active = false;
let boomer_active = false;
let end_active = false;

intro_video.onended = function(){
    var elmnt = document.getElementById("content");
    elmnt.scrollIntoView();
};

prof_video.onended = function() {
    // prof_active = false;
    // zoomer_active = false;
    // boomer_active = false;
    var elmnt = document.getElementById("content");
    elmnt.scrollIntoView();
};

zoomer_video.onended = function(){
    // prof_active = false;
    // zoomer_active = false;
    // boomer_active = false;
    var elmnt = document.getElementById("content");
    elmnt.scrollIntoView();
};

boomer_video.onended = function() {
    // prof_active = false;
    // zoomer_active = false;
    // boomer_active = false;
    var elmnt = document.getElementById("content");
    elmnt.scrollIntoView();
};


function expand(){
    $(this).toggleClass("on");
    $(".menu").toggleClass("active");
    
    if (!$( ".menu" ).hasClass( "active" )){
        content.fadeIn(500);
        mainpagevideo.fadeIn(500);
        if (prof_active == false && zoomer_active == false && boomer_active == false && end_active == false){
            document.getElementById("mainpagevideo").play();
        }
        if (prof_active == true && zoomer_active == false && boomer_active == false && end_active == false){
            prof_container.fadeIn(0);
            document.getElementById("mainpagevideo-prof").play();
        }
        if (prof_active == false && zoomer_active == true && boomer_active == false && end_active == false){
            zoomer_container.fadeIn(0);
            document.getElementById("mainpagevideo-zoomer").play();

        }
        if (prof_active == false && zoomer_active == false && boomer_active == true && end_active == false){
            boomer_container.fadeIn(0);
            document.getElementById("mainpagevideo-boomer").play();
        }
        if (prof_active == false && zoomer_active == false && boomer_active == false && end_active == true){
            ending_container.fadeIn(0);
            document.getElementById("mainpagevideo-end").play();
        }
        contact.fadeOut(0);
        about.fadeOut( 0 );
        team.fadeOut(0);
    }else{
        
        document.getElementById("mainpagevideo").pause();
        document.getElementById("mainpagevideo-prof").pause();
        document.getElementById("mainpagevideo-zoomer").pause();
        document.getElementById("mainpagevideo-boomer").pause();
        document.getElementById("mainpagevideo-end").pause();
        mainpagevideo.fadeOut(500);
        content.fadeOut(500);
        zoomer_container.fadeOut(500);
        boomer_container.fadeOut(500);
        prof_container.fadeOut(500);
        ending_container.fadeOut(500);
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

    boomer_active = true;
    prof_active = false;
    zoomer_active = false;
    end_active = false;

    intro_container.fadeOut(0);
    zoomer_container.fadeOut(0);
    prof_container.fadeOut(0);
    ending_container.fadeOut(0);
    boomer_container.fadeIn(3000);
    document.getElementById("mainpagevideo").pause();
    document.getElementById("mainpagevideo-zoomer").pause();
    document.getElementById("mainpagevideo-prof").pause();
    document.getElementById("mainpagevideo-end").pause();

    document.getElementById("mainpagevideo-boomer").currentTime = 0;
    document.getElementById("mainpagevideo-boomer").play();

})
document.getElementById("memelord").addEventListener("click",()=>{
    // mainpage.fadeOut(0);
    // video2.fadeIn(100);
    prof_active = false;
    zoomer_active = true;
    boomer_active = false;
    end_active = false;

    intro_container.fadeOut(0);
    prof_container.fadeOut(0);
    boomer_container.fadeOut(0);
    ending_container.fadeOut(0)
    zoomer_container.fadeIn(3000);
    document.getElementById("mainpagevideo").pause();
    document.getElementById("mainpagevideo-prof").pause();
    document.getElementById("mainpagevideo-boomer").pause();
    document.getElementById("mainpagevideo-end").pause();

    document.getElementById("mainpagevideo-zoomer").currentTime = 0;
    document.getElementById("mainpagevideo-zoomer").play();
})
document.getElementById("professor").addEventListener("click",()=>{
    prof_active = true;
    zoomer_active = false;
    boomer_active = false;
    end_active = false;
    intro_container.fadeOut(0);
    zoomer_container.fadeOut(0);
    boomer_container.fadeOut(0);
    ending_container.fadeOut(0)
    prof_container.fadeIn(3000);
    document.getElementById("mainpagevideo").pause();
    document.getElementById("mainpagevideo-zoomer").pause();
    document.getElementById("mainpagevideo-boomer").pause();
    document.getElementById("mainpagevideo-end").pause();

    document.getElementById("mainpagevideo-prof").currentTime = 0;
    document.getElementById("mainpagevideo-prof").play();

})
document.getElementById("ending").addEventListener("click",()=>{
    prof_active = false;
    zoomer_active = false;
    boomer_active = false;
    end_active = true;
    intro_container.fadeOut(0);
    zoomer_container.fadeOut(0);
    boomer_container.fadeOut(0);
    prof_container.fadeOut(0);
    ending_container.fadeIn(3000);
    document.getElementById("mainpagevideo").pause();
    document.getElementById("mainpagevideo-zoomer").pause();
    document.getElementById("mainpagevideo-prof").pause();
    document.getElementById("mainpagevideo-boomer").pause();
    
    

    document.getElementById("mainpagevideo-end").currentTime = 0;
    document.getElementById("mainpagevideo-end").play();

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

