//dark-mode
let image = document.getElementById("image")
function changemode(){
   if( document.body.classList.toggle("dark-mode")){
    image.src="images/moon.png"
   }else{
    image.src="images/sun.png"
   }
}

//play-video
let songvideo = document.getElementById("songvideo")

function playvideo(){
    
    songvideo.play()
}

//pause-video

function pausevideo(){
    songvideo.pause()
}

//for full screen
function fullscreen(){
    songvideo.requestFullscreen()
}



//open sidebar in mobile responsive
function openNav() {
    document.getElementById("display-content").style.width = "250px";
    
  }
  
//close sidebar in mobile responsive
  function closeNav() {
    document.getElementById("display-content").style.width = "0";
  }

//scroll left in card caraousel

let scrollcontainer = document.getElementById("cards")
let backbtn = document.getElementById("backbtn")
let nextbtn = document.getElementById("nextbtn")
 function scrollleft(){
  scrollcontainer.scrollLeft -= 1250
 }

 function scrollright(){
  scrollcontainer.scrollLeft += 1250
 }


 //scroll left in mobile responsive
let gallery = document.getElementById("gallery")
let back =document.getElementById("back")
let next = document.getElementById("next")

function left(){
  gallery.scrollLeft -= 400
}

function right(){
  gallery.scrollLeft += 400
}

//scroll left in card section 2
let cards2 = document.getElementById("cards2")
let backbtn2 = document.getElementById("backbtn2")
let nextbtn2 = document.getElementById("nextbtn2")


function myfun() {
           
  cards2.scrollLeft += 1200
}
function myfun1() {
  cards2.scrollLeft -= 1200
}

 //scroll left in mobile responsive
 let gallery2 = document.getElementById("gallery2")
 let back2 =document.getElementById("back2")
 let next2 = document.getElementById("next2")
 
 function left2(){
  gallery2.scrollLeft -= 400
 }
 
 function right2(){
  gallery2.scrollLeft += 400
 }

 //scroll left
 let cards4 = document.getElementById("cards4")
let backbtn4 = document.getElementById("backbtn4")
let nextbtn4 = document.getElementById("nextbtn4")


function myfun4() {
           
  cards4.scrollLeft -= 1200
}
function next4() {
  cards4.scrollLeft += 1200
}

//scroll left in mobile responsive
let gallery4 = document.getElementById("gallery4")
let backbtns4 =document.getElementById("backbtns4")
let nextbtns4 = document.getElementById("nextbtns4")

function left4(){
  gallery4.scrollLeft -= 400
}

function right4(){
  gallery4.scrollLeft += 400
}

//open popup

let popup = document.getElementById("popup")
function closepopup(){
popup.classList.remove("open-popup")
console.log(close)
}

function openpopup(){
  popup.classList.add("open-popup")
}

//to play song according to progress bar

let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrlicon = document.getElementById("ctrlicon")
let newimg = document.getElementById("newimg")

function playpause1(){
  if(ctrlicon.classList.toggle("images/playbtn.png")){
  ctrlicon.src ="images/pausebtn.png"
  song.play()
  newimg.setAttribute("class","img-2")
}else{
  song.pause()
  ctrlicon.src ="images/playbtn.png"
  newimg.setAttribute("class","img-3")
}
}

//sync progress bar with audio
song.onloadedmetadata = function(){
  progress.max = song.duration;
  progress.value = song.currentTime;

 }
if(song.play()){
  setInterval(function(){
    progress.value =song.currentTime
    
  },200)
}


