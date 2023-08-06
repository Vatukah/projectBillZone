let up = document.getElementById("up");
let down = document.getElementById("down");
let wheel = document.getElementById("wheel");
let feature = document.querySelectorAll(".feature");
let icon = document.querySelectorAll(".fa-solid");
let video=document.getElementById("video");
let playBtn=document.querySelectorAll(".playBtn");
let counter = 0;
let angle = 45;
icon[0].style.color="#FFA400"

icon.forEach((item) => {
  item.addEventListener("click", (e) => {
       
       for(var i=0;i<4;i++){
        if(icon[i]===item){
            icon[i].style.color="#FFA400"
        }else{
            icon[i].style.color="#D5E4FF"
        }
       }

    if (item === icon[0]) {
      feature.forEach((item) => {
        item.style.transform = "translateY(0px)";
      });
    } else if (item === icon[1]) {
      feature.forEach((item) => {
        item.style.transform = "translateY(-400px)";
      });
    } else if (item === icon[2]) {
      feature.forEach((item) => {
        item.style.transform = "translateY(-800px)";
      });
    } else if (item === icon[3]) {
      feature.forEach((item) => {
        item.style.transform = "translateY(-1200px)";
      });
    }
  });
});
//------------------------------- lazy loading ------------------------------
let source="euZLD6upr10"
let img= new Image;
 img.src="https://img.youtube.com/vi/"+source+"/maxresdefault.jpg";
 img.alt="click to see video";
 video.appendChild(img);


 video.addEventListener("click",loadFrame);

 function loadFrame(){
  playBtn[0].style.display="none";
   let iframe=document.createElement("iframe");
   iframe.src="https://www.youtube.com/embed/"+source+"?rel=0&showinfo=0&autoplay=1";
   iframe.frameBorder="0";
   iframe.allowFullscreen=true;
   iframe.allow="autoplay";
   video.replaceChild(iframe,img);
 }
 